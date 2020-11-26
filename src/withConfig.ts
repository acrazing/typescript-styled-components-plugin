/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:23:08
 */

import ts from 'typescript';
import { State } from './State';

export function getDisplayName(node: ts.Node) {
  let parent = node.parent;
  while (parent) {
    if (ts.isBinaryExpression(parent) && ts.isIdentifier(parent.left)) {
      return parent.left.escapedText as string;
    }
    if (ts.isVariableDeclaration(parent) && ts.isIdentifier(parent.name)) {
      return parent.name.escapedText as string;
    }
    if (ts.isPropertyAssignment(parent)) {
      if (ts.isStringLiteral(parent.name)) {
        return parent.name.text as string;
      }
      if (ts.isIdentifier(parent.name)) {
        return parent.name.escapedText as string;
      }
    }
    parent = parent.parent;
  }
  return void 0;
}

export function withConfig(state: State, node: ts.Node) {
  const left = ts.isCallExpression(node)
    ? node.expression
    : ts.isTaggedTemplateExpression(node)
    ? node.tag
    : false;
  if (!left) {
    return node;
  }
  const properties: ts.PropertyAssignment[] = [];
  if (state.setComponentId) {
    properties.push(
      ts.createPropertyAssignment(
        'componentId',
        ts.createStringLiteral('sc-' + state.getId()),
      ),
    );
  }
  if (state.setDisplayName) {
    const displayName = getDisplayName(left);
    if (displayName) {
      properties.push(
        ts.factory.createPropertyAssignment(
          'displayName',
          ts.factory.createStringLiteral(displayName),
        ),
      );
    }
  }
  const newLeft = ts.factory.createCallExpression(
    ts.factory.createPropertyAccessExpression(
      left,
      ts.factory.createIdentifier('withConfig'),
    ),
    void 0,
    [ts.factory.createObjectLiteralExpression(properties, false)],
  );
  return ts.isCallExpression(node)
    ? ts.factory.createCallExpression(
        newLeft,
        node.typeArguments,
        node.arguments,
      )
    : ts.isTaggedTemplateExpression(node)
    ? ts.factory.createTaggedTemplateExpression(
        newLeft,
        node.typeArguments,
        node.template,
      )
    : node;
}
