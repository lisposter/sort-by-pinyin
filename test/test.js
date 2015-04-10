'use strict';

var should = require('should');
var sort = require('..');

describe('sort:', function() {
  it('should sort the Chinese words by Pinyin', function() {
    sort(['上海', '北京', '杭州', '长沙']).should.be.exactly([ '北京', '长沙', '杭州', '上海' ]);
  });
});
