const elementPrimary = document.querySelector(".element-primary");
const elementSecondary = document.querySelector(".element-secondary");
const btnPrimary = document.querySelector(".btn-primary");
const btnSecondary = document.querySelector(".btn-secondary");

// console.log(elementPrimary,elementSecondary,btnPrimary,btnSecondary);
function clickHandlerForPrimaryBtn(){
    elementPrimary.style.color = "red";
}
function clickHandlerForSecondaryBtn(){
    elementSecondary.style.color = "yellow";
}
btnPrimary.addEventListener("click",clickHandlerForPrimaryBtn);
btnSecondary.addEventListener("click",clickHandlerForSecondaryBtn)