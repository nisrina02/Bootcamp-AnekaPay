var a = [
    [7, 4],
    [2, 9]
];
var b = [
    [6, 3],
    [8, 5]
];

console.log("Matrix 1 :");
console.table(a);
console.log("");

console.log("Matrix 2 :");
console.table(b);
console.log("");

console.log("Penjumlahan dari matrix 1 dan matrix 2 :");
var jumlah = tambah(a, b);
console.table(jumlah);

function tambah(x, y){
    var hasil = [];
    hasil = new Array(x.length);
    for(var i = 0; i < hasil.length; i++){
        hasil[i] = new Array(x[i].length);

        for(var j = 0; j < hasil[i].length; j++){
            hasil[i][j] = x[i][j] + y[i][j]; 
        }
    }
    return hasil;
}