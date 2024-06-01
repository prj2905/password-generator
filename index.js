let pass1 = document.getElementById("password1");
let pass2 = document.getElementById("password2");
let num = document.getElementById("num");
let symbolsTick = document.getElementById("symbolsTick");
let numbersTick = document.getElementById("numbersTick");

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()_-+={[}],|:;<>.?/";

function generatePassword() {
    let characterSet = letters;
    if (numbersTick.checked) {
        characterSet += numbers;
    }
    if (symbolsTick.checked) {
        characterSet += symbols;
    }

    pass1.textContent = generateRandomPassword(characterSet, num.value);
    pass2.textContent = generateRandomPassword(characterSet, num.value);
}

function generateRandomPassword(characterSet, length) {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += characterSet[Math.floor(Math.random() * characterSet.length)];
    }
    return password;
}


function copyPassword(elementId) {
    let passwordText = document.getElementById(elementId).textContent;
    navigator.clipboard.writeText(passwordText)
        .then(() => {
            alert('Password copied to clipboard');
        })
        .catch(err => {
            console.error('Failed to copy password: ', err);
        });
}