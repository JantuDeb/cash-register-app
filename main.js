const inputBillAmount = document.querySelector("#bill-amount")
const errorMessageText = document.querySelector("#error-message");
const buttonNext = document.getElementById("btn-next");
const buttonCheck = document.getElementById("btn-check");
const inputContainerCheck = document.querySelector(".hidden")
const inputCashAmount = document.querySelector("#cash-given")
const tableData = document.querySelectorAll(".no-of-notes")
const notes = [2000, 500, 100, 20, 10, 5, 1]
buttonNext.addEventListener("click", handleNextButtonClicked)

buttonCheck.addEventListener("click", handleCheckButtonClicked)




function handleNextButtonClicked() {
    if (inputBillAmount.value < 0 || !inputBillAmount.value) {
        showMessage("Invalid bill amount")
        inputContainerCheck.style.display = "none"
    }
    else {
        errorMessageText.style.display = "none"
        inputContainerCheck.style.display = "flex"
    }

}

function handleCheckButtonClicked() {
    let returnAmount = inputCashAmount.value - inputBillAmount.value;
    console.log(returnAmount);
    if (returnAmount >= 0) {
        errorMessageText.style.display = "none"
        let remainingAmount = returnAmount;
        if (returnAmount === 0) {
            tableData.forEach(td => td.textContent = "0")
        } else {
            for (let index = 0; index < notes.length; index++) {
                let numOfNotes = Math.trunc(remainingAmount / notes[index])
                remainingAmount %= notes[index]
                tableData[index].textContent = numOfNotes
            }
        }
    } else showMessage("Given amount must be greater than or equal to bill amount: ")

}

function showMessage(text) {
    errorMessageText.innerText = text + inputBillAmount.value
    errorMessageText.style.color = "red"
    errorMessageText.style.display = "block"
}
