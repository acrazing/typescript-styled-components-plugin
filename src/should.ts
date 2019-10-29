/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:16:38
 */

import ts from 'typescript';
import { State } from './State';

/**
 * minify template, process:
 *    styled(Foo)({}), styled(Foo)``, styled.tag({}), styled.div``
 *    keyframes``, css``, createGlobalStyle``, injectGlobal``
 * @param state
 * @param node
 */
export function shouldMinifyNode(
  state: State,
  node: ts.Node,
): node is ts.TaggedTemplateExpression {
  return (
    state.minify &&
    ts.isTaggedTemplateExpression(node) &&
    (shouldWithConfig(state, node) ||
      (ts.isIdentifier(node.tag) &&
        state.cssTagsRecord.has(node.tag.escapedText as string)))
  );
}

export function getRealExpression(node: ts.Node): ts.Node {
  return ts.isParenthesizedExpression(node)
    ? getRealExpression(node.expression)
    : ts.isAsExpression(node)
    ? getRealExpression(node.expression)
    : node;
}

/**
 * withConfig just process
 *    styled(Foo)({}), styled(Foo)``, styled.tag({}), styled.div``
 *    styled(Foo).attrs()``, styled.div.attrs()``
 *    check right: isTaggedTemplateExpression, isCallExpression
 *    the left isCallExpression, isPropertyAccess
 *    the left isIdentifier & 'styled'
 * probable type cast:
 *    (styled(Foo) as Bar), (styled.div as Bar)
 *    styled(Foo)<Bar>``, styled.div<Bar>``
 *    (styled(Foo)``) as Bar, (styled.div``) as Bar
 * @param state
 * @param node
 */
export function shouldWithConfig(state: State, node: ts.Node) {
  if (!state.setDisplayName && !state.setComponentId) {
    return false;
  }
  let middle: ts.Node | false = ts.isCallExpression(node)
    ? getRealExpression(node.expression)
    : ts.isTaggedTemplateExpression(node)
    ? getRealExpression(node.tag)
    : false;
  if (
    middle &&
    ts.isCallExpression(middle) &&
    ts.isPropertyAccessExpression(middle.expression) &&
    middle.expression.name.escapedText === 'attrs'
  ) {
    middle = getRealExpression(middle.expression.expression);
  }
  const left =
    middle &&
    (ts.isCallExpression(middle) || ts.isPropertyAccessExpression(middle))
      ? getRealExpression(middle.expression)
      : false;
  return left && ts.isIdentifier(left) && left.escapedText === 'styled';
}
