/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:16:38
 *
 * most of the code comes from
 *  {@link https://github.com/styled-components/babel-plugin-styled-components/blob/master/src/minify/index.js}
 */

import difference from 'lodash/difference';
import ts from 'typescript';

// The capture group makes sure that the split contains the interpolation index
const placeholderRegex = /(?:__PLACEHOLDER_(\d+)__)/g;

// Alternative regex that splits without a capture group
const placeholderNonCapturingRegex = /__PLACEHOLDER_(?:\d+)__/g;

// Generates a placeholder from an index
const makePlaceholder = (index: number) => `__PLACEHOLDER_${index}__`;

// Splits CSS by placeholders
const splitByPlaceholders = (
  [css, ...rest]: [string, number[]],
  capture = true,
) =>
  [
    css.split(capture ? placeholderRegex : placeholderNonCapturingRegex),
    ...rest,
  ] as const;

const injectUniquePlaceholders = (strArr: string[]) => {
  let i = 0;

  return strArr.reduce((str, val, index, arr) => {
    return str + val + (index < arr.length - 1 ? makePlaceholder(i++) : '');
  }, '');
};

const makeMultilineCommentRegex = (newlinePattern: string) =>
  new RegExp('\\/\\*[^!](.|' + newlinePattern + ')*?\\*\\/', 'g');
const lineCommentStart = /\/\//g;
const symbolRegex = /(\s*[;:{},]\s*)/g;

// Counts occurences of substr inside str
const countOccurences = (str: string, substr: string) =>
  str.split(substr).length - 1;

// Joins substrings until predicate returns true
const reduceSubstr = (
  substrs: string[],
  join: string,
  predicate: (res: string) => boolean,
) => {
  const length = substrs.length;
  let res = substrs[0];

  if (length === 1) {
    return res;
  }

  for (let i = 1; i < length; i++) {
    if (predicate(res)) {
      break;
    }

    res += join + substrs[i];
  }

  return res;
};

// Joins at comment starts when it's inside a string or parantheses
// effectively removing line comments
export const stripLineComment = (line: string) =>
  reduceSubstr(
    line.split(lineCommentStart),
    '//',
    (str) =>
      !str.endsWith(':') && // NOTE: This is another guard against urls, if they're
      // not inside strings or parantheses.
      countOccurences(str, "'") % 2 === 0 &&
      countOccurences(str, '"') % 2 === 0 &&
      countOccurences(str, '(') === countOccurences(str, ')'),
  );

export const compressSymbols = (code: string) =>
  code.split(symbolRegex).reduce((str, fragment, index) => {
    // Even-indices are non-symbol fragments
    if (index % 2 === 0) {
      return str + fragment;
    }

    // Only manipulate symbols outside of strings
    if (
      countOccurences(str, "'") % 2 === 0 &&
      countOccurences(str, '"') % 2 === 0
    ) {
      return str + fragment.trim();
    }

    return str + fragment;
  }, '');

// Detects lines that are exclusively line comments
const isLineComment = (line: string) => line.trim().startsWith('//');

// Creates a minifier with a certain linebreak pattern
const minify = (linebreakPattern: string) => {
  const linebreakRegex = new RegExp(linebreakPattern + '\\s*', 'g');
  const multilineCommentRegex = makeMultilineCommentRegex(linebreakPattern);

  return (code: string): [string, number[]] => {
    const newCode = code
      .replace(multilineCommentRegex, '\n') // Remove multiline comments
      .split(linebreakRegex) // Split at newlines
      .filter((line) => line.length > 0 && !isLineComment(line)) // Removes
      // lines
      // containing
      // only line
      // comments
      .map(stripLineComment) // Remove line comments inside text
      .join(' '); // Rejoin all lines

    const eliminatedExpressionIndices = difference(
      code.match(placeholderRegex),
      newCode.match(placeholderRegex)!,
    ).map((x) => parseInt(x.match(/\d+/)![0], 10));

    return [compressSymbols(newCode), eliminatedExpressionIndices];
  };
};

const minifyRaw = minify('(?:\\\\r|\\\\n|\\r|\\n)');
const minifyCooked = minify('[\\r\\n]');

export const minifyRawValues = (rawValues: string[]) =>
  splitByPlaceholders(minifyRaw(injectUniquePlaceholders(rawValues)), false);

export const minifyCookedValues = (cookedValues: string[]) =>
  splitByPlaceholders(
    minifyCooked(injectUniquePlaceholders(cookedValues)),
    false,
  );

export function minifyTemplate(node: ts.TaggedTemplateExpression) {
  const cookedValues: string[] = [];
  const template = node.template;
  if (ts.isNoSubstitutionTemplateLiteral(template)) {
    cookedValues.push(template.text);
  } else {
    cookedValues.push(template.head.text);
    template.templateSpans.forEach((span) => {
      cookedValues.push(span.literal.text);
    });
  }
  const [spans, indicates] = minifyCookedValues(cookedValues);
  let newTemplate: ts.TemplateLiteral;
  if (ts.isNoSubstitutionTemplateLiteral(template)) {
    newTemplate = ts.createNoSubstitutionTemplateLiteral(spans[0] || '');
  } else {
    const templateSpans = template.templateSpans.slice();
    indicates.forEach((expressionIndex, iteration) => {
      templateSpans.splice(expressionIndex - iteration, 1);
    });
    if (templateSpans.length === 0) {
      newTemplate = ts.createNoSubstitutionTemplateLiteral(spans[0] || '');
    } else {
      newTemplate = ts.createTemplateExpression(
        ts.createTemplateHead(spans[0]),
        templateSpans.map((span, index) => {
          return ts.createTemplateSpan(
            span.expression,
            index === spans.length - 2
              ? ts.createTemplateTail(spans[index + 1])
              : ts.createTemplateMiddle(spans[index + 1]),
          );
        }),
      );
    }
  }
  return ts.createTaggedTemplate(node.tag, node.typeArguments, newTemplate);
}
