/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:50:09
 */
import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
const Base = (props) => React.createElement('div', null, props.name);
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
export const GlobalStyle = createGlobalStyle`div{display:block;background:${() =>
  'black'};color:white;}`;
export const Keyframe = keyframes`0%{display:block;background:${'black'};color:white;}`;
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
export const CastFactory = [
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
export const CastAll = [
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
export const TestBabelMinify = styled.div.withConfig({
  displayName: 'TestBabelMinify',
  componentId: 'sc-12zezc7',
})`
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
  content: '\\tlast raw
';
`;
export const TestBabelMinifyOnce = styled.div.withConfig({
  displayName: 'TestBabelMinifyOnce',
  componentId: 'sc-1oepzb3',
})`
  content: 'raw
';
`;
