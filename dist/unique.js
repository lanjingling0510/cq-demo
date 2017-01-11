(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.unique = factory());
}(this, (function () { 'use strict';

/**
 * Copyright (c) 2016-present, rainie, Inc.
 * All rights reserved.
 *
 * 
 */

function unique(arr) {
    var n = []; //一个新的临时数组
    //遍历当前数组
    for (var i = 0; i < arr.length; i++) {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (!_contains(n, arr[i])) n.push(arr[i]);
    }
    return n;
}

function _contains(arr, element) {
    return arr.some(function (val) {
        return val === element || val !== val && element !== element;
    });
}

return unique;

})));
