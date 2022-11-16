let num = document.getElementById("num");
let plus = document.getElementById("plus");
let counter = 0;
let size = 100;
num.innerText = counter;

plus.addEventListener("click", () => {
    counter ++;
    size -= 10;
    num.innerText = counter;
    num.style.fontSize = size + "px";
});