// // Your code goes here!

// //import{fixRoundingErrors} from './aspect-ratio.js'
// //import {modulo} from './percentage.js'
// import * as ronni from './percentage.js'


// const moduloForm = document.getElementById("modulo-form") // hole Form number 1
// moduloForm.addEventListener("change",(e)=>{
//     const inputOne = document.getElementById('modulo_1')
//     const inputTwo = document.getElementById('modulo_2')
//     const moduloResult = document.getElementById('modulo_result')

//     switch (e.target.id){
//         case "modulo_1":
//             case "modulo_2":
//                 moduloResult.value = ronni.modulo(inputOne.value,inputTwo.value)
//     }

// })



import { modulo } from "./percentage.js"

const moduloResult = document.getElementById("modulo_result")
moduloResult.addEventListener("click", function(){
    let modulo1 = document.getElementById("modulo_1").value
    let modulo2 = document.getElementById("modulo_2").value
    let result = modulo(modulo1, modulo2)
    moduloResult.value = result
})

import { percentage } from"./percentage.js"

const percentageResult =document.getElementById("percentage_result");
percentageResult.addEventListener("click", function(){
    let percentage1 = document.getElementById("percentage_1").value
    let percentage2 = document.getElementById("percentage_2").value
    let resultPer = percentage(percentage1, percentage2);
    percentageResult.value = resultPer;
    
})

import {  percentageOf } from "./percentage.js"

const percentageOfResult = document.getElementById("percentageOf_Result")
percentageOfResult.addEventListener("click", function (){
    let percentageOf1 = document.getElementById("percentageOf_1").value
    let percentageOf2 = document.getElementById("percentageOf_2").value
    let resultPerOf = percentageOf(percentageOf1, percentageOf2)
    percentageOfResult.value = resultPerOf

})

import{ difference } from "./percentage.js"

const differenceResult =document.getElementById("difference_result") 
differenceResult.addEventListener("click", function() {
    let difference1 = document.getElementById("difference_1").value
    let difference2 = document.getElementById("difference_2").value
    let resultDif = difference(difference1,difference2)
    differenceResult.value = resultDif

})

import { calculateAspectRatio } from "./aspect-ratio.js"

const ratioResultHeight = document.getElementById("ratio_result-height")
ratioResultHeight.addEventListener("click", function (){
    let ratio1 = document.getElementById("ratio_1").value
    let ratio2 = document.getElementById("ratio_2").value
    let newWidth = document.getElementById("ratio_result-width").value
    let ratioResult = calculateAspectRatio(ratio1, ratio2, newWidth, "number")
    ratioResultHeight.value = ratioResult

})


//====================================================================


// import { modulo } from "./percentage.js";
// const moduloResult = document.getElementById("modulo_result");
// moduloResult.addEventListener("click", function () {
//   let modulo1 = document.getElementById("modulo_1").value;
//   let modulo2 = document.getElementById("modulo_2").value;
//   let result = modulo(modulo1, modulo2);
//   moduloResult.value = result;
// });
// import { percentage } from "./percentage.js";
// const percentageResult = document.getElementById("percentage_result");
// percentageResult.addEventListener("click", function () {
//   let percentage1 = document.getElementById("percentage_1").value;
//   let percentage2 = document.getElementById("percentage_2").value;
//   let resultPer = percentage(percentage1, percentage2);
//   percentageResult.value = resultPer;
// });
// import { percentageOf } from "./percentage.js";
// const percentageOfResult = document.getElementById("percentageOf_result");
// percentageOfResult.addEventListener("click", function () {
//   let percentageOf1 = document.getElementById("percentageOf_1").value;
//   let percentageOf2 = document.getElementById("percentageOf_2").value;
//   let resultPerOf = percentageOf(percentageOf1, percentageOf2);
//   percentageOfResult.value = resultPerOf;
// });
// import { difference } from "./percentage.js";
// const differenceResult = document.getElementById("difference_result");
// differenceResult.addEventListener("click", function () {
//   let difference1 = document.getElementById("difference_1").value;
//   let difference2 = document.getElementById("difference_2").value;
//   let resultDif = difference(difference1, difference2);
//   differenceResult.value = resultDif;
// });
// import { calculateAspectRatio } from "./aspect-ratio.js";
// const ratioResultHeight = document.getElementById("ratio_result-height");
// ratioResultHeight.addEventListener("click", function () {
//   let ratio1 = document.getElementById("ratio_1").value;
//   let ratio2 = document.getElementById("ratio_2").value;
//   let newWidth = document.getElementById("ratio_result-width").value;
//   let ratioResult = calculateAspectRatio(ratio1, ratio2, newWidth, "number");
//   ratioResultHeight.value = ratioResult;
// });
