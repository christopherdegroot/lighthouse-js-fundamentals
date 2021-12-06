const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 10) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  if (repeat === 9 ) {
    console.log("Get READY FOR THE DROP");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");