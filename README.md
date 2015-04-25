# sort-by-pinyin
[![NPM version](https://img.shields.io/npm/v/sort-by-pinyin.svg?style=flat)](https://www.npmjs.org/package/sort-by-pinyin)
[![Build status](https://img.shields.io/travis/lisposter/sort-by-pinyin.svg?style=flat-square)](https://travis-ci.org/lisposter/sort-by-pinyin)

> Note:
> This package can NOT deal the heteronym(aka. 多音字) very well.


------

## Installation

```bash
$ npm install sort-by-pinyin
```

## Usage
```js
var sort = require('sort-by-pinyin');

console.log(sort(['上海', '北京', '杭州', '长沙']));
// ==> [ '北京', '长沙', '杭州', '上海' ]
```


## License

 © [Leigh Zhu](#)
