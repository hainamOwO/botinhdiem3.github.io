const display_to_1 = document.getElementById("display-to-1");
const button_to1_plus1 = document.getElementById("button-to1-plus1");
const button_to1_plus3 = document.getElementById("button-to1-plus3");
const button_to1_plus4 = document.getElementById("button-to1-plus4");
const button_to1_plus5 = document.getElementById("button-to1-plus5");
const button_to1_minus5 = document.getElementById("button-to1-minus5");
const button_to1_minus2 = document.getElementById("button-to1-minus2");
const button_to1_div2 = document.getElementById("button-to1-div2");
const button_to1_div3 = document.getElementById("button-to1-div3");

const display_to_2 = document.getElementById("display-to-2");
const button_to2_plus1 = document.getElementById("button-to2-plus1");
const button_to2_plus3 = document.getElementById("button-to2-plus3");
const button_to2_plus4 = document.getElementById("button-to2-plus4");
const button_to2_plus5 = document.getElementById("button-to2-plus5");
const button_to2_minus5 = document.getElementById("button-to2-minus5");
const button_to2_minus2 = document.getElementById("button-to2-minus2");
const button_to2_div2 = document.getElementById("button-to2-div2");
const button_to2_div3 = document.getElementById("button-to2-div3");

const display_to_3 = document.getElementById("display-to-3");
const button_to3_plus1 = document.getElementById("button-to3-plus1");
const button_to3_plus3 = document.getElementById("button-to3-plus3");
const button_to3_plus4 = document.getElementById("button-to3-plus4");
const button_to3_plus5 = document.getElementById("button-to3-plus5");
const button_to3_minus5 = document.getElementById("button-to3-minus5");
const button_to3_minus2 = document.getElementById("button-to3-minus2");
const button_to3_div2 = document.getElementById("button-to3-div2");
const button_to3_div3 = document.getElementById("button-to3-div3");

const display_to_4 = document.getElementById("display-to-4");
const button_to4_plus1 = document.getElementById("button-to4-plus1");
const button_to4_plus3 = document.getElementById("button-to4-plus3");
const button_to4_plus4 = document.getElementById("button-to4-plus4");
const button_to4_plus5 = document.getElementById("button-to4-plus5");
const button_to4_minus5 = document.getElementById("button-to4-minus5");
const button_to4_minus2 = document.getElementById("button-to4-minus2");
const button_to4_div2 = document.getElementById("button-to4-div2");
const button_to4_div3 = document.getElementById("button-to4-div3");


const reset1 = document.getElementById("reset1");
const reset2 = document.getElementById("reset2");
const reset3 = document.getElementById("reset3");
const reset4 = document.getElementById("reset4");

reset1.addEventListener('click',()=>{
  sum1 = 0;
  display_to_1.textContent = sum1;
});

reset2.addEventListener('click',()=>{
  sum2 = 0;
  display_to_2.textContent = sum2;
});

reset3.addEventListener('click',()=>{
  sum3 = 0;
  display_to_3.textContent = sum3;
});

reset4.addEventListener('click',()=>{
  sum4 = 0;
  display_to_4.textContent = sum4;
});

let sum1=0;
let sum2=0;
let sum3=0;
let sum4=0;

button_to1_plus1.addEventListener('click',()=>{
  sum1 += 1;
  display_to_1.textContent = sum1;
});
button_to1_plus3.addEventListener('click',()=>{
  sum1 += 3;
  display_to_1.textContent = sum1;
});
button_to1_plus4.addEventListener('click',()=>{
  sum1 += 4;
  display_to_1.textContent = sum1;
});
button_to1_plus5.addEventListener('click',()=>{
  sum1 += 5;
  display_to_1.textContent = sum1;
});
button_to1_minus5.addEventListener('click',()=>{
  sum1 -= 5;
  display_to_1.textContent = sum1;
});
button_to1_minus2.addEventListener('click',()=>{
  sum1 -= 2;
  display_to_1.textContent = sum1;
});
button_to1_div2.addEventListener('click',()=>{
  sum1 /= 2;
  display_to_1.textContent = sum1;
});
button_to1_div3.addEventListener('click',()=>{
  sum1 /= 3;
  sum1 = sum1.toFixed(2);
  display_to_1.textContent = sum1;
});




button_to2_plus1.addEventListener('click',()=>{
  sum2 += 1;
  display_to_2.textContent = sum2;
});
button_to2_plus3.addEventListener('click',()=>{
  sum2 += 3;
  display_to_2.textContent = sum2;
});
button_to2_plus4.addEventListener('click',()=>{
  sum2 += 4;
  display_to_2.textContent = sum2;
});
button_to2_plus5.addEventListener('click',()=>{
  sum2 += 5;
  display_to_2.textContent = sum2;
});
button_to2_minus5.addEventListener('click',()=>{
  sum2 -= 5;
  display_to_2.textContent = sum2;
});
button_to2_minus2.addEventListener('click',()=>{
  sum2 -= 2;
  display_to_2.textContent = sum2;
});
button_to2_div2.addEventListener('click',()=>{
  sum2 /= 2;
  display_to_2.textContent = sum2;
});
button_to2_div3.addEventListener('click',()=>{
  sum2 /= 3;
  sum2 = sum2.toFixed(2);
  display_to_2.textContent = sum2;
});



button_to3_plus1.addEventListener('click',()=>{
  sum3 += 1;
  display_to_3.textContent = sum3;
});
button_to3_plus3.addEventListener('click',()=>{
  sum3 += 3;
  display_to_3.textContent = sum3;
});
button_to3_plus4.addEventListener('click',()=>{
  sum3 += 4;
  display_to_3.textContent = sum3;
});
button_to3_plus5.addEventListener('click',()=>{
  sum3 += 5;
  display_to_3.textContent = sum3;
});
button_to3_minus5.addEventListener('click',()=>{
  sum3 -= 5;
  display_to_3.textContent = sum3;
});
button_to3_minus2.addEventListener('click',()=>{
  sum3 -= 2;
  display_to_3.textContent = sum3;
});
button_to3_div2.addEventListener('click',()=>{
  sum3 /= 2;
  display_to_3.textContent = sum3;
});
button_to3_div3.addEventListener('click',()=>{
  sum3 /= 3;
  sum3 = sum3.toFixed(3);
  display_to_3.textContent = sum3;
});

button_to4_plus1.addEventListener('click',()=>{
  sum4 += 1;
  display_to_4.textContent = sum4;
});
button_to4_plus3.addEventListener('click',()=>{
  sum4 += 3;
  display_to_4.textContent = sum4;
});
button_to4_plus4.addEventListener('click',()=>{
  sum4 += 4;
  display_to_4.textContent = sum4;
});
button_to4_plus5.addEventListener('click',()=>{
  sum4 += 5;
  display_to_4.textContent = sum4;
});
button_to4_minus5.addEventListener('click',()=>{
  sum4 -= 5;
  display_to_4.textContent = sum4;
});
button_to4_minus2.addEventListener('click',()=>{
  sum4 -= 2;
  display_to_4.textContent = sum4;
});
button_to4_div2.addEventListener('click',()=>{
  sum4 /= 2;
  display_to_4.textContent = sum4;
});
button_to4_div3.addEventListener('click',()=>{
  sum4 /= 3;
  sum4=sum4.toFixed(2);
  display_to_4.textContent = sum4;
});