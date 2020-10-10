var l1 = 0;
var l2 = 0;
var l3 = 0;

function printEvenNumber(num) {
  if(num%2 == 0) {
    console.log(num);
  }
}

for(l1; l1 < 21; l1++) {
  printEvenNumber(l1);
}

while (l2 < 21) {
  printEvenNumber(l2);
  l2++
}

do {
  printEvenNumber(l3);
  l3++
} while (l3 <= 20)
