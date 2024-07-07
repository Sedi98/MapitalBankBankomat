let cashText = document.querySelector(".cashText");

let moneyShowText = document.querySelector(".moneyShowText");

let comissionText = document.querySelector(".comissionText");

let moneyItems = document.querySelectorAll(".moneyItem");

let numInput = document.querySelector(".numInput");

let btnCalculate = document.querySelector(".btnCalculate");


let moneyInputContainer = document.querySelector(".moneyInputContainer");

let yearText = document.querySelector(".yearText");


let balance= 200;


let moneyValue = 0;


let disabled=false;


let comission = 0;
let comissionPercent = 0;

let year = new Date().getFullYear();

yearText.innerHTML = year == 2024 ? "" : `-${year}`