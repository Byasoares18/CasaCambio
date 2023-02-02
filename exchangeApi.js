

"use strict";
const listOne = document.querySelector(".list_one");
const listTwo = document.querySelector(".list_two");
const inputAmount = document.querySelector(".input_amount");

const change = document.querySelector(".change");

const resultAmount = document.querySelector(".result_amount");
const resultBtn = document.querySelector(".result_btn");

const apiObject = {
    apiKey: "3675b16bc54487ddc35d609f"
};

let request, resultRequest, option, firstLoad = true, finalResult;

function createList(acronymCurrency, list){
    let option = document.createElement("OPTION");
    option.value = acronymCurrency;
    option.innerHTML = acronymCurrency;
    list.appendChild(option);
}
async function getFirstData(currencyOne, currencyTwo, amount){
    request = await fetch(`https://v6.exchangerate-api.com/v6/${apiObject.apiKey}/latest/${currencyOne}`);
    resultRequest = await request.json();

    inputAmount.value = amount;
    finalResult = amount * resultRequest.conversion_rates[currencyTwo];
    resultAmount.innerHTML = `${finalResult.toFixed(2)} ${currencyTwo}`;

    if(firstLoad){
        Object.keys(resultRequest.conversion_rates).forEach((e)=>{
            createList(e, listOne);
            createList(e, listTwo);
        });
        listTwo.value = currencyTwo;
        firstLoad = false;
    };
};

window.addEventListener("load", ()=>{
    getFirstData("ARS", "USD", "1");
});

resultBtn.addEventListener("click", ()=>{
    getFirstData(listOne.value, listTwo.value, inputAmount.value);
});

change.addEventListener("click", ()=>{
    let valueListOne = listOne.value;
    listOne.value = listTwo.value;
    listTwo.value = valueListOne;
    console.log(valueListOne, listTwo.value)
});



function criarMoneda (Nombre, sigla, valor) {
    return {Nombre, sigla, valor};
} 
    const monedas =[
        {Nombre:'Dolar', sigla: 'USD', valor:182.47},
        {Nombre:'Euro', sigla: 'EUR', valor:197.08},
        {Nombre:'Libra', sigla: 'GBP', valor:224.24},
        {Nombre:'Peso uruguayo', sigla: 'UYU', valor:4.59},
        {Nombre:'Real', sigla: 'BRL', valor:35.77}
    ]
    const item = monedas.find (elemento=> elemento.valor > 200)
    
    const moneda = new Object()
    moneda.nombre = 'Peso Chileno',
    moneda.sigla = 'CLP'
    moneda.valor = 4.32

    localStorage.setItem("monedas", JSON.stringify(monedas));

const monedasEnLS = JSON.parse(localStorage.getItem("monedas"));
console.log(monedasEnLS);

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode");

    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }
})
let fecha_hoy = new Date();
    console.log(fecha_hoy)

    console.log ( 'Gracias por elegirnos') 



    