var pinyin = require('pinyin');
var _tempMap = {};

function sort(arr) {
  arr.forEach(function(itm) {
    _tempMap[pinyin(itm, {
        style: pinyin.STYLE_NORMAL
    }).join()] = itm;
  });

  return Object.keys(_tempMap).sort().map(function(key) {
    return _tempMap[key];
  });
}

module.exports = exports.sort = sort;
