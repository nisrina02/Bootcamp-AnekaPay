function Kamus(kata,katabaruindo,katabaruinggris,katahapus){

    var kamus = new Map ([
        ["Mangga", "Manggo"],
        ["Pisang", "Banana"],
        ["Semangka", "Watermelon"],
        ["Anggur", "Grape"],
        ["Apel", "Apple"]
        ]
    )
    let sekarang = new Date();
    console.log("Hari ini "+sekarang);
    console.log(kamus);
    
    console.log("");
    console.log("");
    var kataindo = kata;
    var katainggris = "Apple";
    var artiinggris = kamus.get(kataindo);
    var artiindo = kamus.has(katainggris);
    console.log("Bahasa Inggris dari "+kataindo+" adalah "+artiinggris);
    //console.log("Bahasa Indo dari "+katainggris+" adalah "+artiindo);
    
    kamus.set(katabaruindo,katabaruinggris);
    
    console.log("------------------------");
    console.log("Setelah ditambah Kata Baru "+katabaruindo);
    console.log(kamus);
    
    kamus.delete(katahapus);
    console.log("------------------------");
    console.log("Setelah kata "+katahapus+" dihapus");
    
    console.log(kamus);
    
    }
    
    
    Kamus("Pisang", "Melon", "Melon", "Semangka");