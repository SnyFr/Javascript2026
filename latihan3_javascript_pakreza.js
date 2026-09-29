//Perulangan for, foreach, while, do while

//for(let i=0;i <= 10; i++) {
  //console.log("Nilai variabel i ", i);
  //console.log(`Nilai variabel ${i}`);

//}

//array : struktur data yang bisa nyimpen datanya lebih dari satu

let nama = ["budi", "laras", "andi"]//index [0,1,2]
const keranjang = ["buah", "sayuran", "ikan"]

// console.log(nama[0])
// console.log(nama[1])
// console.log(nama[2])
// console.log(keranjang[2])
// console.log(keranjang[1])
// console.log(keranjang[0])
nama[2] = "agung"; //kalau pengen ngubah data
console.log(nama);
nama.push('raka'); //sangat kepakai
nama.unshift("rozak");
//console.log("nama baru", nama);//kalau pengen nambah array/data

//indexOF : Method/function 
const target = nama.indexOf("budi"); //outputnya berupa index ke berapa
console.log(target);

//length : berapa sih total datanya ?
//bisa count (php), len (python)
const total = nama.length
const totalKeranjang = keranjang.length
console.log (total)
console.log (totalKeranjang)

//spread operator : (...) berlaku ke array dan object. titik tiga, kayak ngecopy
nama = [...nama, "wawan"]; //index terakhir
nama = ["agus", ...nama]; //index pertama

console.log(nama);
