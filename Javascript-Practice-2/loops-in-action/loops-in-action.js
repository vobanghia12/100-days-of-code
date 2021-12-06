//First Example
const sumButton = document.querySelector("#calculator button");
const highLightButton = document.querySelector("#highlight-links button");
const displayUserDataButtonElement = document.querySelector("#user-data button");

function calculateSum(){
    const userNumber = document.getElementById("user-number");
    const enteredNumber = userNumber.value;
    let sumUpToNumber = 0;
    for(let i = 0; i <= enteredNumber; i++)
        sumUpToNumber += i;
    const displayCalculatedSum = document.getElementById('calculated-sum');
    displayCalculatedSum.style.display = "block";
    displayCalculatedSum.textContent = sumUpToNumber;

}

function hightLightText(){
    const anchorTexts = document.querySelectorAll("#highlight-links a");
    for(const ele of anchorTexts)
        ele.classList.add("highlight");
}

sumButton.addEventListener('click',calculateSum);
highLightButton.addEventListener('click',hightLightText);

//Display
const dummyUserData = {
    firstName: 'Max',
    lastName: 'Schwarzmuller',
    age: 32,
};
function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');
    outputDataElement.innerHTML = "";
    for(const key in dummyUserData){
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ' : ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}
displayUserDataButtonElement.addEventListener('click',displayUserData)

//Statistics // Roll the Dice
const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice(){
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls(){
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enterNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll ' +numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement)
        hasRolledTargetNumber = rolledNumber == enterNumber; 
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enterNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener('click',deriveNumberOfDiceRolls);
   
