let inputNumber = document.getElementById("inputnumber");
let h1 = document.getElementById("h2");
let inputText = document.getElementById("inputText");

function enviar() {
    let np = inputText.value;
    let ns = Math.round(Math.random() * np);
    h1.innerHTML = ns;
    h1.innerHTML = n;
}
