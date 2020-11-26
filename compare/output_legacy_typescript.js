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
  styled.div(
    templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base)(
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
  styled.div.attrs({ id: 'id' })(
    templateObject_6 ||
      (templateObject_6 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base).attrs({ id: 'id' })(
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
  styled.div({ background: '#FFFFFF' }),
  styled(Base)({ background: '#FFFFFF' }),
];
export var CastProps = [
  styled.div(
    templateObject_8 ||
      (templateObject_8 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base)(
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
  styled.div(
    templateObject_10 ||
      (templateObject_10 = __makeTemplateObject(
        ['\n    display: block;\n    background: ', ';\n    color: white;\n  '],
        ['\n    display: block;\n    background: ', ';\n    color: white;\n  '],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base)(
    templateObject_11 ||
      (templateObject_11 = __makeTemplateObject(
        ['\n    display: block;\n    background: ', ';\n    color: white;\n  '],
        ['\n    display: block;\n    background: ', ';\n    color: white;\n  '],
      )),
    function () {
      return 'black';
    },
  ),
];
export var CastAll = [
  styled.div(
    templateObject_12 ||
      (templateObject_12 = __makeTemplateObject(
        ['display:block;background:', ';color:white;'],
        ['', ''],
      )),
    function () {
      return 'black';
    },
  ),
  styled(Base)(
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
  displayName: 'TestBabelMinify',
  componentId: 'sc-12zezc7',
})(
  templateObject_14 ||
    (templateObject_14 = __makeTemplateObject(
      [
        ".p0{content:'first raw';}.p1{content:",
        ";}.p2{content:'second raw';}.p3{content:",
        ";}content:'\\tlast raw\n';",
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
  displayName: 'TestBabelMinifyOnce',
  componentId: 'sc-1oepzb3',
})(
  templateObject_15 ||
    (templateObject_15 = __makeTemplateObject(["content:'raw\n';"], [''])),
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
