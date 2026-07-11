let buttons = document.body.querySelectorAll(".red");

buttons.forEach(function (button) {

    button.onmouseenter = function () {
        button.style.backgroundColor = "rgb(149, 15, 15)";
        // button.style.border= "1px solid rgb(226, 216, 216)";
         button.style.transform = "scale(1.05)";

        // button.style.transition = "0.5s";
    }
    button.onmouseleave = function () {
        button.style.backgroundColor = "rgb(229, 9, 20)";
        button.style.color = "white";
        button.style.transform = "scale(1)";
       
        // button.style.transition = "0.5s";
    }
})