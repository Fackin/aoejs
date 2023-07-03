'use strict';

/**
 * @desc 对象数组去重
 * @param {Array} arr 
 * @param {String} key 对象中相同的关键字(如id)
 * @returns {Array} 返回新数组，eg: ArrayDelSome([{id: 1}, {id: 2}, {id: 1}], 'id) -> 返回：[{id: 1}, {id: 2}]
 */
function ArrayDelSome(arr, key) {
  const map = new Map();
  return arr.filter(x => !map.has(x[key]) && map.set(x[key], true));
}

var main = {
  ArrayDelSome
};

module.exports = main;
