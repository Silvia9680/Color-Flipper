const colors = [ "green", "red", "blue", "pink", "yellow"];

const btn = document.getElementById("btn"); 
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandonNumber();
    console.log(randomNumber)
    
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandonNumber() {
    return Math.floor(Math.random() * colors.length);
};
