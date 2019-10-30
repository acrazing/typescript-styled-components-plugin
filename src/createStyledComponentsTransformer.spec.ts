/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:07:13
 */

import murmurhash from 'murmurhash';
import ts, { ModuleKind, ScriptTarget } from 'typescript';
import { createStyledComponentsTransformer } from './createStyledComponentsTransformer';
import { itos } from './numberFormat';

interface TestCase {
  name: string;
  input: string;
  output: string;
}

const filename = '/root/src/cases.tsx';
const context = '/root';
const packageName = 'test';
const fileHash = `sc-` + itos(murmurhash(`test/src/cases.tsx`));
const headLine = '/** @internal */\n';

const testCases: TestCase[] = [
  {
    name: 'tagged tag',
    input: `var Foo = styled.div\`\``,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'object tag',
    input: `var Foo = styled.div({})`,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'tagged attrs tag',
    input: `var Foo = styled.div.attrs({})\`\``,
    output: `var Foo = styled.div.attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'object attrs tag',
    input: `var Foo = styled.div.attrs({})({})`,
    output: `var Foo = styled.div.attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'cast props tagged tag',
    input: `var Foo = styled.div<Foo>\`\``,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'cast props object tag',
    input: `var Foo = styled.div<Foo>({})`,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'cast props tagged attrs tag',
    input: `var Foo = styled.div.attrs({})<Foo>\`\``,
    output: `var Foo = styled.div.attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'cast props object attrs tag',
    input: `var Foo = styled.div.attrs({})<Foo>({})`,
    output: `var Foo = styled.div.attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'tagged component',
    input: `var Foo = styled(Foo)\`\``,
    output: `var Foo = styled(Foo).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'object component',
    input: `var Foo = styled(Foo)({})`,
    output: `var Foo = styled(Foo).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'tagged attrs component',
    input: `var Foo = styled(Foo).attrs({})\`\``,
    output: `var Foo = styled(Foo).attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'object attrs component',
    input: `var Foo = styled(Foo).attrs({})({})`,
    output: `var Foo = styled(Foo).attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'cast props tagged component',
    input: `var Foo = styled(Foo)<Foo>\`\``,
    output: `var Foo = styled(Foo).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'cast props object component',
    input: `var Foo = styled(Foo)<Foo>({})`,
    output: `var Foo = styled(Foo).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'cast props tagged attrs component',
    input: `var Foo = styled(Foo).attrs({})<Foo>\`\``,
    output: `var Foo = styled(Foo).attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'cast props object attrs component',
    input: `var Foo = styled(Foo).attrs({})<Foo>({})`,
    output: `var Foo = styled(Foo).attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'cast props object cast attrs component',
    input: `var Foo = styled(Foo).attrs<Foo>({})<Foo>({})`,
    output: `var Foo = styled(Foo).attrs({}).withConfig({ componentId: "${fileHash}", displayName: "Foo" })({});`,
  },
  {
    name: 'cast tag',
    input: `var Foo = (styled.div as any as Foo)\`\``,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'cast component',
    input: `var Foo = (styled(Foo) as any as Foo)\`\``,
    output: `var Foo = styled(Foo).withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'cast top level',
    input: `var Foo = ((styled.div as any as Foo)\`\` as any as Foo)`,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`\`;`,
  },
  {
    name: 'minify single string',
    input: `var Foo = styled.div\`
      foo: "\\\\n bar\\n"
    \`
    `,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`foo:"\\\\n bar "\`;`,
  },
  {
    name: 'minify multiple spans',
    input: `var Foo = styled.div\`
      p1: "\\\\n bar\\n";
      p2: \${"p2"};
      p3: \${"p3"}
      p4: ""
    \`
    `,
    output: `var Foo = styled.div.withConfig({ componentId: "${fileHash}", displayName: "Foo" }) \`p1:"\\\\n bar ";p2:\${"p2"};p3:\${"p3"} p4:""\`;`,
  },
  {
    name: 'css tags',
    input: `css\`
    foo: bar;
    bar: foo;
    \`;keyframes\`
    foo: bar;
    bar: foo;
    \`;createGlobalStyle\`
    foo: bar;
    bar: foo;
    \`;injectGlobal\`
    foo: bar;
    bar: foo; \`;other\` foo: bar; \``,
    output: `css \`foo:bar;bar:foo;\`;\nkeyframes \`foo:bar;bar:foo;\`;\ncreateGlobalStyle \`foo:bar;bar:foo;\`;\ninjectGlobal \`foo:bar;bar:foo;\`;\nother \` foo: bar; \`;`,
  },
  {
    name: 'minify comments',
    input: `css\`
    // comment
    // \${"span in comment"}
    // this should be removed
    title: "";
    value: \${"value"};
    second: "";
    // second comment
    // no span
    third: \${"third"};
    /* comment block
    value: \${"block comment"};
    */
    forth: \${"forth"};
    end: "end with space";
    \``,
    output: `css \`title:"";value:\${"value"};second:"";third:\${"third"};forth:\${"forth"};end:"end with space";\`;`,
  },
  {
    name: 'minify as single span',
    input: `css\`
    // comment 1
    // comment \${comment}
    title: value;
    // comment \${3}
    title: value;
    \`;css\`
    // comment \${1}
    title: value;
    \`;css\`
    title: value;
    // comment: \${2}
    \``,
    output: `css \`title:value;title:value;\`;\ncss \`title:value;\`;\ncss \`title:value;\`;`,
  },
];

describe('createStyledComponentsTransformer', () => {
  for (const item of testCases) {
    it(`should transform - ${item.name}`, () => {
      const result = ts.transpileModule(headLine + item.input, {
        fileName: filename,
        compilerOptions: {
          target: ScriptTarget.ESNext,
          module: ModuleKind.ESNext,
          importHelpers: true,
        },
        transformers: {
          before: [
            createStyledComponentsTransformer(void 0, {
              setComponentId: true,
              setDisplayName: true,
              minify: true,
              packageName: packageName,
              context: context,
            }),
          ],
        },
      });
      expect(result.outputText.split(headLine)[1].trim()).toBe(item.output);
    });
  }
});
