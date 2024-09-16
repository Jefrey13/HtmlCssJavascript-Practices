let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () =>{
    toggle.classList.toggle("active");

let price = document.querySelectorAll(".price");
let dollar = document.querySelectorAll(".dollar");
let usd = 72.72;//1 dollar = 72.72 rupess which is the current rate at 2021

if(toggle.classList.contains('active')){

    for(var i =0; i < dollar.length; i++){
        dollar[i].textContent = 'CS';
        price[i].textContent = (price[i].textContent * usd).toFixed(2);
    }
}else{
    for( var i = 0; i < dollar.length; i++){
        dollar[i].textContent = '$';
        price[i].textContent = (price[i].textContent / usd).toFixed(2);
    }
}
})

console.log("Hello word");