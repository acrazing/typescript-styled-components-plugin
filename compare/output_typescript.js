/*!
 * Copyright 2019 acrazing <joking.young@gmail.com>. All rights reserved.
 * @since 2019-10-29 13:50:09
 */
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
import React from 'react';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';
var Base = function (props) {
  return React.createElement('div', null, props.name);
};
export var Styled = [
  styled.div.withConfig({ componentId: 'sc-2mrASk', displayName: 'Styled' })(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-1',
    displayName: 'Styled',
  })(
    templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
];
export var cssFragment = css(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      ['display:block;background:', ';color:white;'],
      ['', ''],
    )),
  function () {
    return 'black';
  },
);
export var GlobalStyle = createGlobalStyle(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      ['div{display:block;background:', ';color:white;}'],
      ['', ''],
    )),
  function () {
    return 'black';
  },
);
export var Keyframe = keyframes(
  templateObject_5 ||
    (templateObject_5 = __makeTemplateObject(
      ['0%{display:block;background:', ';color:white;}'],
      ['', ''],
    )),
  'black',
);
export var WithAttrs = [
  styled.div
    .attrs({ id: 'id' })
    .withConfig({ componentId: 'sc-2mrASk-2', displayName: 'WithAttrs' })(
    templateObject_6 ||
      (templateObject_6 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base)
    .attrs({ id: 'id' })
    .withConfig({ componentId: 'sc-2mrASk-3', displayName: 'WithAttrs' })(
    templateObject_7 ||
      (templateObject_7 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
];
export var StyleObject = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-4',
    displayName: 'StyleObject',
  })({ background: '#FFFFFF' }),
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-5',
    displayName: 'StyleObject',
  })({ background: '#FFFFFF' }),
];
export var CastProps = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-6',
    displayName: 'CastProps',
  })(
    templateObject_8 ||
      (templateObject_8 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-7',
    displayName: 'CastProps',
  })(
    templateObject_9 ||
      (templateObject_9 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
];
export var CastFactory = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-8',
    displayName: 'CastFactory',
  })(
    templateObject_10 ||
      (templateObject_10 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-9',
    displayName: 'CastFactory',
  })(
    templateObject_11 ||
      (templateObject_11 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
];
export var CastAll = [
  styled.div.withConfig({
    componentId: 'sc-2mrASk-10',
    displayName: 'CastAll',
  })(
    templateObject_12 ||
      (templateObject_12 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base).withConfig({
    componentId: 'sc-2mrASk-11',
    displayName: 'CastAll',
  })(
    templateObject_13 ||
      (templateObject_13 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
];
export var TestBabelMinify = styled.div.withConfig({
  componentId: 'sc-2mrASk-12',
  displayName: 'TestBabelMinify',
})(
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(
      [
        ".p0{content:'first raw';}.p1{content:",
        ";}.p2{content:'second raw';}.p3{content:",
        ";}content:'\\tlast raw ';",
      ],
      ['', '', ''],
    )),
  function () {
    return 'first span';
  },
  function () {
    return 'second span';
  },
);
export var TestBabelMinifyOnce = styled.div.withConfig({
  componentId: 'sc-2mrASk-13',
  displayName: 'TestBabelMinifyOnce',
})(
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(["content:'raw ';"], [''])),
);
var templateObject_1,
  templateObject_2,
  templateObject_3,
  templateObject_4,
  templateObject_5,
  templateObject_6,
  templateObject_7,
  templateObject_8,
  templateObject_9,
  templateObject_10,
  templateObject_11,
  templateObject_12,
  templateObject_13,
  templateObject_14,
  templateObject_15;
