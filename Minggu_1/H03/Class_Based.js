class Novel{
    constructor(judul, pengarang){
        this.judul = judul;
        this.pengarang = pengarang;
    }

    getNovel(){
        return "Novel berjudul " + this.judul + 
                " merupakan karya " + this.pengarang;
    }
}

let inputNovel = new Novel("Hujan", "Tereliye");
inputNovel.getNovel();
console.log(inputNovel.getNovel());