// 1-MASALA

console.log("1-masala");
let budget = prompt("Mavjud mablagni kiriting");

let sumDollar = (500 + 250) * 11000.34;
let sumYevro = 120 * 12354.03;
let jami = sumDollar + sumYevro;
console.log("Kerak boladigan summa: " + jami + " sum");

let C = budget - jami;
if (C >= 0) {
  console.log("Oq yol, Alisher!");
} else {
  console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
}

// 2-MASALA
// 3 ta son berilgan, ular orasidan eng kattasini topuvchi algoritm tuzing
// (-21, 34, 17 )
console.log("2-masala");

let array1 = [-21, 34, 17];
console.log("Eng katta: " + Math.max(...array1));

// 3-masala
// 2 ta son berilgan, ulardan kattasini kubini topuvchi algoritm tuzing
// (4, 5)
console.log("3-masala");
const array2 = [4, 5];
let max = Math.max(...array2);
console.log("Eng kattasini kubi: " + max ** 3);

// 4-masala
// 3 ta son berilgan ular orasidagi toq sonlar yigindisini toping
// (5,6,7)
console.log("4-masala");
let sum = 0;
let a = 3;
let b = 9;
let c = 7;
{
  if (a % 2 !== 0) {
    sum += a;
  }

  if (b % 2 !== 0) {
    sum += b;
  }

  if (c % 2 !== 0) {
    sum += c;
  }
}
console.log(sum);

// 5-MASALA
// 4 ta son berilgan, bu sonlar orasidan 3 ga karralilari sonini toping
console.log("5-masala");
let m = 12;
let n = 32;
let k = 4;
let l = 18;
let soni = 0;
{
  if (m % 3 == 0) {
    soni++;
  }
  if (n % 3 == 0) {
    soni++;
  }
  if (k % 3 == 0) {
    soni++;
  }
  if (l % 3 == 0) {
    soni++;
  }
}
console.log(soni);

// 6-MASALA
// Foydalanuvchi kiritgan son 3 ga hamda 5 ga karrali bo'lsa rost
// aks holda yolg'on qiymat qaytaruvchi algoritm yozing
console.log("6-masala");
let son = prompt("Sonni kiriting");
console.log(Boolean((son % 3) + (son % 5) == 0));
