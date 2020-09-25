const add = (x, y) => +x + +y
const subtract = (x, y) => +x - +y
const multiply = (x, y) => +x * +y
const divide = (x, y) => +x / +y

// const validateNumbers = (x, y) => {
//     if(isNaN(x) && isNaN(y)){
//         return false
//     }
//     return true
// }

const validateNumbers = (x, y) => {
    if(isNaN(x) || isNaN(y)){
        return false
    }
    return true
}

const luasPersegipanjang = (x, y) => {
    if(x == 0 || y == 0){
        return "Angka tidak boleh nol"
    } else if(isNaN(x) || isNaN(y)){
        return "Inputan tidak boleh huruf"
    }
    return x * y
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    validateNumbers,
    luasPersegipanjang,
}