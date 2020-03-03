var expect = require('chai').expect;
var wom = require('.');
var moment = require('moment');

var nowDate = moment();
var firstWeek = [moment('2020-01-01'), moment('2020-02-01'), moment('2020-03-01'), moment('2020-04-01'), moment('2020-05-01'), moment('2020-06-01')];
var secondWeek = [moment('2020-01-05'), moment('2020-02-02'), moment('2020-03-08'), moment('2020-04-05'), moment('2020-05-03'), moment('2020-06-07')];
var thirdWeek = [moment('2020-01-12'), moment('2020-02-09'), moment('2020-03-17'), moment('2020-04-12'), moment('2020-05-10'), moment('2020-06-14')];
var fourthWeek = [moment('2020-01-19'), moment('2020-02-16'), moment('2020-03-24'), moment('2020-04-19'), moment('2020-05-17'), moment('2020-06-21')];

describe('TEST MOMENT WEEK OF MONTH', () => {
  it('nowDate should be return number', () => {
    expect(wom(nowDate)).to.be.an('number');
  });
  it('first week should be return 1', () => {
    firstWeek.forEach(att => {
      expect(wom(att)).to.be.equal(1);
    });
  });
  it('second week should be return 2', () => {
    secondWeek.forEach(att => {
      expect(wom(att)).to.be.equal(2);
    });
  });
  it('third week should be return 3', () => {
    thirdWeek.forEach(att => {
      expect(wom(att)).to.be.equal(3);
    });
  });
  it('fourth week should be return 4', () => {
    fourthWeek.forEach(att => {
      expect(wom(att)).to.be.equal(4);
    });
  });
});

