'use strict';

var should = require('should');
var sort = require('..');

describe('sort:', function() {
  it('should sort the Chinese words by Pinyin', function() {
    sort(['上海', '北京', '杭州', '长沙']).join().should.be.equal(['北京', '长沙', '杭州', '上海'].join());
  });
});
