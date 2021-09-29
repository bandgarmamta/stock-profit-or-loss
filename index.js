const inputUser = document.querySelectorAll(".input-user");
const btnSubmit = document.querySelector("#btn-submit");
const outputelement = document.querySelector("#output");

btnSubmit.addEventListener("click", function calculate() {
    const inputUser = document.querySelectorAll(".input-user");
    const btnSubmit = document.querySelector("#btn-submit");
    const outputelement = document.querySelector("#output");

    btnSubmit.addEventListener("click", function calculate() {

        const x = Number(inputUser[0].value);
        const y = Number(inputUser[1].value);
        const z = Number(inputUser[2].value);

        if (inputUser[0].value === "" || inputUser[1].value === "" || inputUser[2].value === "") {
            outputelement.innerText = "Please enter all input values";
        }
        else {
            if (x === 0 || y === 0 || z === 0) {
                outputelement.innerText = "Please enter values greater than zero";
            }
            else {
                const prevalue = x * y;
                const currvalue = z * y;

                const result = currvalue - prevalue;
                console.log(result);
                const percent = (Math.abs(result) / prevalue) * 100;

                if (result > 0) {
                    outputelement.innerText = "Yippee!! You gained profit of Rs." + result + " and your profit percentage is " + percent + "%  🥳";
                } else {
                    if (result < 0) {

                        outputelement.innerText = "Oops!! You gained loss of Rs." + Math.abs(result) + " and your loss percentage is " + Math.abs(percent) + "%  😞";
                    } else {
                        outputelement.innerText = "No Profit, No Loss.So, don't worry,Be Happy 😉";
                    }
                }
            }
        }
    });