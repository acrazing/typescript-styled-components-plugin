/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:07:13
 */

import ts from 'typescript';
import { minifyTemplate } from './minifyTemplate';
import { shouldMinifyNode, shouldWithConfig } from './should';
import { State } from './State';
import { StateOptions } from './types';
import { withConfig } from './withConfig';

/**
 * @param program
 * @param options
 */
export function createStyledComponentsTransformer(
  program: ts.Program | undefined,
  options: Partial<StateOptions>,
): ts.TransformerFactory<ts.SourceFile> {
  const state = new State(options);
  return (context) => {
    return (node: ts.SourceFile) => {
      state.setFile(node.fileName);
      const visitor: ts.Visitor = (node) => {
        // we need to iterate styled function recursively, for
        // tagged string may contains styled components, although it is
        // extremely rare case.
        // for upon reason, we need to minify first, or the node will be
        // changed.
        if (shouldMinifyNode(state, node)) {
          node = minifyTemplate(node);
        }
        if (shouldWithConfig(state, node)) {
          node = withConfig(state, node);
        }
        return ts.visitEachChild(node, visitor, context);
      };
      return ts.visitNode(node, visitor);
    };
  };
}
