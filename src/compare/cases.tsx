/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:50:09
 */

import React, { ComponentClass } from 'react';
import styled, {
  createGlobalStyle,
  css,
  keyframes,
  StyledComponent,
  StyledFunction,
} from 'styled-components';

interface Props {
  name: string;
}

const Base = (props: Props) => <div>{props.name}</div>;

export const Styled = [
  styled.div`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base)`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];

export const cssFragment = css`
  display: block;
  background: ${() => 'black'};
  color: white;
`;

export const GlobalStyle = createGlobalStyle`
div{
    display: block;
    background: ${() => 'black'};
    color: white;
}
`;

export const Keyframe = keyframes`
  0% {
    display: block;
    background: ${'black'};
    color: white;
  }
`;

export const WithAttrs = [
  styled.div.attrs({ id: 'id' })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base).attrs({ id: 'id' })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];

export const StyleObject = [
  styled.div({ background: '#FFFFFF' }),
  styled(Base)({ background: '#FFFFFF' }),
];

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

export const CastFactory = [
  (styled.div as StyledFunction<ComponentClass<Props>>)`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  (styled(Base) as StyledFunction<ComponentClass<Props>>)`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];

export const CastAll = [
  (styled.div`
    display: block;
    background: ${() => 'black'};
    color: white;
  ` as unknown) as StyledComponent<ComponentClass<Props>, any>,
  (styled(Base)`
    display: block;
    background: ${() => 'black'};
    color: white;
  ` as unknown) as StyledComponent<ComponentClass<Props>, any>,
];

export const TestBabelMinify = styled.div`
  .p0 {
    content: 'first raw';
  }
  .p1 {
    content: ${() => 'first span'};
  }
  .p2 {
    content: 'second raw';
  }
  .p3 {
    content: ${() => 'second span'};
  }
  content: '\\tlast raw\n';
`;

export const TestBabelMinifyOnce = styled.div`
  content: 'raw\n';
`;
