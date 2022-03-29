let kiloInput = document.getElementById("kgsInput");
let feetInput = document.getElementById("feetInput");
let meterInput = document.getElementById("meterInput");
let centiInput = document.getElementById("centiInput");
let CelsiusInput = document.getElementById("CelsiusInput");

let poundOutput = document.getElementById("lbsOutput");
let cmsOutput = document.getElementById("cmsOutput");
let meterOutput = document.getElementById("meterOutput");
let inchOutput = document.getElementById("inchOutput");
let FahrenheitOutput = document.getElementById("FahrenheitOutput");

let btnWeight = document.getElementById("btnWeight");
let btnMeasure = document.getElementById("btnMeasure");
let btnkilometer = document.getElementById("btnkilometer");
let btncenti = document.getElementById("btncenti");
let btnCelsius = document.getElementById("btnCelsius");

btnWeight.addEventListener("click", function(){
    // console.log(kiloInput.value);
    let kgs = kiloInput.value;
    poundOutput.innerText = kgs * 2.2046;
});

btnMeasure.addEventListener("click", function(){
    let mes = feetInput.value;
    cmsOutput.innerText = mes * 30.48;
});

btnCelsius.addEventListener("click", function(){
    let cf = CelsiusInput.value;
    FahrenheitOutput.innerText = cf * (9/5) + 32;
});

btnkilometer.addEventListener("click", function(){
    let km = meterInput.value;
    meterOutput.innerText = km * 1000;
});

btncenti.addEventListener("click", function(){
    let ci = centiInput.value;
    inchOutput.innerText = ci * 0.393;
});