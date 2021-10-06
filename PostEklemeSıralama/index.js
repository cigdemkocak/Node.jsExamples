const gonderiler = [
    {
        gonderiNumarasi: "Gönderi 1",
        gonderi: "Birinci Gönderi"
    },
    {
        gonderiNumarasi: "Gönderi 2",
        gonderi: "İkinci Gönderi"
    },
    {
        gonderiNumarasi: "Gönderi 3",
        gonderi: "Üçüncü Gönderi"
    },
];

const gonderiListele = () => {
    gonderiler.map((gonderi) => {
        console.log(`${gonderi.gonderiNumarasi} \n ${gonderi.gonderi}`);
    });
};

const gonderiEkle = (yenigonderi) => {
    const promise1 = new Promise((resolve, reject) => {
        gonderiler.push(yenigonderi);
        //reject('BIR HATA OLUSTU');
    });

    return promise1;
};

gonderiEkle({ gonderiNumarasi: "Gönderi 4", gonderi: "Yeni Gönderi" })
    .then(() => {
        console.log("YENI LISTE");
        gonderiListele();
    })
    .catch((error) => {
        console.log(error);
    });
gonderiListele();