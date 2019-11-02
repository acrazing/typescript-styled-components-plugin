# typescript-styled-components-plugin

A styled-components plugin to minify & set componentId & displayName for typescript.

This transformer helps you to transform the following code:

```typescript jsx
export const CastProps = [
  styled.div<Props>`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base)<Props>`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];
```

to the following format:

```typescript jsx
export const CastProps = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-6',
    displayName: 'CastProps',
  })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-7',
    displayName: 'CastProps',
  })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];
```

## Install

```bash
yarn add typescript-styled-components-plugin -D

# or npm
npm install typescript-styled-components-plugin -D
```

## Usage

### with `ttypescript`

you just need add `typescript-styled-components-plugin` to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "plugins": [
      {
        "transform": "typescript-magic-variable-plugin",
        // the following options is optional
        "setComponentId": true,
        "setDisplayName": true,
        "minify": true
      }
    ]
  }
}
```

### with `webpack` and `ts-loader`

you need to add the following options to your loader:

```js
import { createStyledComponentsTransformer } from 'typescript-styled-components-plugin';
export default {
  // ...
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader', // or awesome-typescript-loader
        options: {
          getCustomTransformers: (program) => ({
            before: [
              createStyledComponentsTransformer(program, {
                setComponentId: true,
                setDisplayName: true,
                minify: true,
              }),
            ],
          }),
        },
      },
    ],
  },
};
```

## Notes

**Supported syntax**:

```typescript jsx
import styled from 'styled-components';

type Props = {};
function Foo() {}

// 1. simple cases
styled.div``;
styled(Foo)``;

// 2. style object
styled.div({});
styled(Foo)({});

// 3. attrs
styled.div.attrs({})``;
styled(Foo).attrs({})``;

// 4. with types
styled.div<Props>``;
styled(Foo)<Props>``;

// 5. type cast
((styled.div as any) as Props)``;
((styled(Foo) as any) as Foo)``;
```

**Unsupported syntax**:

```typescript jsx
// 1. extend, please use styled(...)`` instead.
styled.div({}).extend``;

// 2. withComponent, please use as property instead.
styled.div({}).withComponent('div');
```

## LICENSE

MIT

    The MIT License (MIT)

    Copyright (c) 2019 acrazing

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
