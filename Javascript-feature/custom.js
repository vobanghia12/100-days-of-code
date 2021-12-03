const input = document.getElementById("info-input");
const count = document.getElementById("count");
const inputMaxLength = input.maxLength; 
console.log(input.Maxlength)
function updateInputAndRemainingChars(){
    const enteredValue = input.value;
    const remainingChars = inputMaxLength - enteredValue.length;
    count.textContent = remainingChars;
    if(remainingChars <= 10)
    {
        input.classList.add("warning");
        count.classList.add("warning1");
    }
    else{
        input.classList.remove("warning");
        count.classList.remove("warning1");
    }
}
input.addEventListener("input",updateInputAndRemainingChars)