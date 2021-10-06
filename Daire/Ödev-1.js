const arguments = process.argv.slice(2);


function daireninAlanı (yarıçap){
    PI = Math.PI
    alan = PI*yarıçap*yarıçap

    console.log(`Yarıçapı ${yarıçap} olan dairenin alanı: ${alan}` );
}

daireninAlanı(arguments[0]*1);