let reduceButton = document.getElementById("reduce");

let increaseButton = document.getElementById("increase");

let displayButton = document.getElementById("display");

let displayResult = 1;

displayButton.textContent = displayResult;

increaseButton.addEventListener("click",function() {
    displayResult++;
    displayButton.textContent = displayResult;

    displayButton.classList.add("moveUp");
    setTimeout(function(){
        displayButton.classList.remove("moveUp");

    },500);

}); 

reduceButton.addEventListener("click",function() {
    if (displayResult>1) {
        displayResult--;
        displayButton.textContent = displayResult;

        displayButton.classList.add("moveDown");
    setTimeout(function(){
        displayButton.classList.remove("moveDown");

    },500);
    }

});





