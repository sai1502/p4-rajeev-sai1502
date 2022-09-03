function sum(a, b){
    return a + b;
  }
  function diff(a, b){
    return a - b;
  }
  function product(a, b){
    return a * b;
  }
  
  //const operation = require('./mathOperations');
  
  test('sum 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });
  
  test('diff 2 - 2 to equal 0', () => {
    expect(diff(2, 2)).toBe(0);
  });
  
  test('product 2 * 2 to equal 4', () => {
    expect(product(2, 2)).toBe(4);
  });