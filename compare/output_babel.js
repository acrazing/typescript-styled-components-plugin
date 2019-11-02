/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:50:09
 */
import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

const Base = (props) => React.createElement('div', null, props.name);

export const Styled = [
  styled.div.withConfig({
    displayName: 'source__Styled',
    componentId: 'sc-1tkkdbu-0',
  })(['display:block;background:', ';color:white;'], () => 'black'),
  styled(Base).withConfig({
    displayName: 'source__Styled',
    componentId: 'sc-1tkkdbu-1',
  })(['display:block;background:', ';color:white;'], () => 'black'),
];
export const cssFragment = css(
  ['display:block;background:', ';color:white;'],
  () => 'black',
);
export const GlobalStyle = createGlobalStyle`
div{
    display: block;
    background: ${() => 'black'};
    color: white;
}
`;
export const Keyframe = keyframes(
  ['0%{display:block;background:', ';color:white;}'],
  'black',
);
export const WithAttrs = [
  styled.div
    .attrs({
      id: 'id',
    })
    .withConfig({
      displayName: 'source__WithAttrs',
      componentId: 'sc-1tkkdbu-2',
    })(['display:block;background:', ';color:white;'], () => 'black'),
  styled(Base)
    .attrs({
      id: 'id',
    })
    .withConfig({
      displayName: 'source__WithAttrs',
      componentId: 'sc-1tkkdbu-3',
    })(['display:block;background:', ';color:white;'], () => 'black'),
];
export const StyleObject = [
  styled.div.withConfig({
    displayName: 'source__StyleObject',
    componentId: 'sc-1tkkdbu-4',
  })({
    background: '#FFFFFF',
  }),
  styled(Base).withConfig({
    displayName: 'source__StyleObject',
    componentId: 'sc-1tkkdbu-5',
  })({
    background: '#FFFFFF',
  }),
];
export const CastProps = [
  styled.div.withConfig({
    displayName: 'source__CastProps',
    componentId: 'sc-1tkkdbu-6',
  })(['display:block;background:', ';color:white;'], () => 'black'),
  styled(Base).withConfig({
    displayName: 'source__CastProps',
    componentId: 'sc-1tkkdbu-7',
  })(['display:block;background:', ';color:white;'], () => 'black'),
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
  styled.div.withConfig({
    displayName: 'source__CastAll',
    componentId: 'sc-1tkkdbu-8',
  })(['display:block;background:', ';color:white;'], () => 'black'),
  styled(Base).withConfig({
    displayName: 'source__CastAll',
    componentId: 'sc-1tkkdbu-9',
  })(['display:block;background:', ';color:white;'], () => 'black'),
];
export const TestBabelMinify = styled.div.withConfig({
  displayName: 'source__TestBabelMinify',
  componentId: 'sc-1tkkdbu-10',
})(
  [
    ".p0{content:'first raw';}.p1{content:",
    ";}.p2{content:'second raw';}.p3{content:",
    ";}content:'\\tlast raw ';",
  ],
  () => 'first span',
  () => 'second span',
);
export const TestBabelMinifyOnce = styled.div.withConfig({
  displayName: 'source__TestBabelMinifyOnce',
  componentId: 'sc-1tkkdbu-11',
})(["content:'raw ';"]);
