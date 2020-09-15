/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:50:09
 */
import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
const Base = (props) => React.createElement('div', null, props.name);
export const Styled = [
  styled.div.withConfig({ componentId: 'sc-2mrASk', displayName: 'Styled' })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-1',
    displayName: 'Styled',
  })`
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
  styled.div
    .attrs({ id: 'id' })
    .withConfig({
      componentId: 'sc-2mrASk-2',
      displayName: 'WithAttrs',
    })`display:block;background:${() => 'black'};color:white;`,
  styled(Base)
    .attrs({ id: 'id' })
    .withConfig({
      componentId: 'sc-2mrASk-3',
      displayName: 'WithAttrs',
    })`display:block;background:${() => 'black'};color:white;`,
];
export const StyleObject = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-4',
    displayName: 'StyleObject',
  })({ background: '#FFFFFF' }),
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-5',
    displayName: 'StyleObject',
  })({ background: '#FFFFFF' }),
];
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
export const CastFactory = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-8',
    displayName: 'CastFactory',
  })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-9',
    displayName: 'CastFactory',
  })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];
export const CastAll = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-10',
    displayName: 'CastAll',
  })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-11',
    displayName: 'CastAll',
  })`
    display: block;
    background: ${() => 'black'};
    color: white;
  `,
];
export const TestBabelMinify = styled.div.withConfig({
  componentId: 'sc-2mrASk-12',
  displayName: 'TestBabelMinify',
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
  content: '\\tlast raw ';
`;
export const TestBabelMinifyOnce = styled.div.withConfig({
  componentId: 'sc-2mrASk-13',
  displayName: 'TestBabelMinifyOnce',
})`
  content: 'raw ';
`;
