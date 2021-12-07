for (let repeat = 100; repeat < 201; repeat++) {

  if (repeat % 4 === 0 && repeat % 3 === 0) {
    console.log("LoopyLighthouse");
  } 
  
  else if (repeat % 4 === 0) {
    console.log("Lighthouse");
  } 
  
  else if (repeat % 3 === 0) {
    console.log("Loopy");
  } 
  
  else console.log(repeat);

}