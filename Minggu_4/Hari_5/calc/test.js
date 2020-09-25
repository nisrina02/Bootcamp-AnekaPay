const operations = require('./operation.js')
const assert = require('assert')

// it('should return true', () => {
//     assert.equal(true, true)
// })


// MATHEMATICAL OPERATIONS
it('correctly calculates the sum of 1 and 3', () => {
    assert.equal(operations.add(1, 3), 4)
  })

it('correctly calculates the sum of -1 and -1', () => {
    assert.equal(operations.add(-1, -1), -2)
  })
  
it('correctly calculates the difference of 33 and 3', () => {
    assert.equal(operations.subtract(33, 3), 30)
  })
  
it('correctly calculates the product of 12 and 12', () => {
    assert.equal(operations.multiply(12, 12), 144)
  })
  
it('correctly calculates the quotient of 10 and 2', () => {
    assert.equal(operations.divide(10, 2), 5)
  })

// VALIDATION
it('indicate failure when a string is used instead of a number', () => {
    assert.equal(operations.validateNumbers('sammy', 5), false)
})

it('indicate failure when two string is used instead of a numbers', () => {
    assert.equal(operations.validateNumbers('sammy', 'sammy'), false)
})

it('successfully runs when two numbers are used', () => {
    assert.equal(operations.validateNumbers(5, 5), true)
})

it('menghitung luas persegi panjang', () => {
  assert.equal(operations.luasPersegipanjang(10, 5), 50)
})

it('menghitung luas persegi panjang salah', () => {
  assert.equal(operations.luasPersegipanjang(10, 10), 50)
})

it('menghitung luas persegi panjang menggunakan angka 0', () => {
  assert.equal(operations.luasPersegipanjang(10, 0), "Angka tidak boleh nol")
})

it('menghitung luas persegi panjang menggunakan huruf', () => {
  assert.equal(operations.luasPersegipanjang("apa", "hayo"), "Inputan tidak boleh huruf")
})