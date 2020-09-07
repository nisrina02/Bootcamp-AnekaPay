function Perkalian(className){
    this.className = className;
}

Perkalian.prototype.getClass = function() {
    return "Ini adalah kelas " + this.className;
}

function Kali(a, b){
    this.a = a;
    this.b = b;
    Perkalian.call(this, "Perkalian");
}

Kali.prototype = Perkalian.prototype;
Kali.prototype.getAngka = function(){
    return "Hasil perkalian dari " + this.a + 
    " dan " + this.b + " adalah " + this.a * this.b;
}

var hasil = new Kali(10 , 5);
console.log(hasil.getClass());
console.log(hasil.getAngka());
