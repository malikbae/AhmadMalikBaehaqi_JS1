// If Else
let pagi = false;
let siang = true;
let sore = false;

if (pagi) {
  console.log("Halo, Selamat pagi.");
} else if (siang) {
  console.log("Halo, Selamat siang.");
} else if (sore) {
  console.log("Halo, Selamat sore.");
} else {
  console.log("Halo, Selamat malam.");
}


// Nested If
let sudahSarapan = false;
let makananTersedia = true;
let adaWaktu = true;

if (adaWaktu) {
  if (makananTersedia) {
    if (sudahSarapan) {
      console.log("Anda sudah sarapan. Selamat bekerja!");
    } else {
      console.log("Anda belum sarapan. Silakan makan terlebih dahulu.");
    }
  } else {
    console.log("Tidak ada makanan yang tersedia. Pastikan Anda membawa bekal.");
  }
} else {
  console.log("Anda tidak memiliki waktu untuk sarapan. Segera berangkat!");
}


// Switch Case
let nilai = "D";

switch (nilai) {
  case "A":
  case "B":
  case "C":
    console.log(`Anda lulus dengan nilai ${nilai}`);
    break;
  case "D":
  case "E":
    console.log(`Maaf, Anda harus mengulang`);
    break;
  default:
    console.log("Nilai yang di input salah");
}


// For Statement
let listAngka = [3, 34, 20, 16, 7];
let jumlah = 0;

for (let i = 0; i < listAngka.length; i++) {
  jumlah += listAngka[i];
}

console.log(`Jumlah dari angka dalam array adalah: ${jumlah}`);


// While
let angka1 = 10;
let faktorial = 1;
let i = 1;

while (i <= angka1) {
  faktorial *= i;
  i++;
}

console.log(`Faktorial dari ${angka1} adalah: ${faktorial}`);


// Do While
let angka2 = 10;
let output = "";

do {
  output += angka2 + ",";
  angka2 -= 2;
} while (angka2 >= 0);

console.log(output.slice(0, -1));


// Function
let a = 5;
let b = 3;
function perkalian(a, b) {
  return a * b;
}

let hasilPerkalian = perkalian(a, b);
console.log(`Hasil perkalian ${a} dengan ${b} adalah: ${hasilPerkalian}`);