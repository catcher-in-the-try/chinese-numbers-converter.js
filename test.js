const ChineseNumber = require('./chinese-numbers');

function expectInteger(text) {
  return expect(new ChineseNumber(text).toInteger());
}

it('Normal number', () => {
  expectInteger('兩百四十五').toBe(245); // 245 
});

it('Mixed Arabic and Chinese', () => {
  expectInteger('345 萬').toBe(3450000); // 3,450,000
});

it('The only supported type of decimals', () => {
  expectInteger('3.5萬').toBe(35000); // 35,000
});

it('Phone, year etc: without the words "thousand, hundred, ten"', () => {
  expectInteger(' 二〇一二年').toBe(2012);
});

it('Cantonese slang', () => {
  expectInteger('卅六').toBe(36); 
});

it('finance numbers ', () => {
  expectInteger('***貳佰零伍元***').toBe(205); 
});

it('ignore non-Chinese words', () => {
  expectInteger('1000 and one').toBe(1000); 
});