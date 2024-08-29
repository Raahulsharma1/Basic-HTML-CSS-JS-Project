// const inputField = document.getElementById("Password");
// const outputField = document.getElementById("output");

// inputField.addEventListener('input', function() {
//     let password = inputField.value;

//     if (password === '') {
//         outputField.innerText = '';
//         outputField.style.color = '';
//         outputField.style.display = 'none'; // Hides the output field when input is empty
//     } else {
//         outputField.style.display = 'block'; // Shows the output field when input is not empty

//         if (password.length < 8) {
//             outputField.innerText = "Password is short!";
//             outputField.style.color = 'red';
//         } else {
//             if (password.search(/[a-z]/) === -1) {
//                 outputField.innerText = "Lowercase is missing";
//                 outputField.style.color = 'red';
//             } else if (password.search(/[A-Z]/) === -1) {
//                 outputField.innerText = "Uppercase is missing";
//                 outputField.style.color = 'red';
//             } else if (password.search(/[0-9]/) === -1) {
//                 outputField.innerText = "Numbers are missing";
//                 outputField.style.color = 'red';
//             } else if (password.search(/[!\@\#\$\%\^\&\*\(\)[\]\?\.\<\>]/) === -1) {
//                 outputField.innerText = "Special symbol is missing";
//                 outputField.style.color = 'red';
//             } else {
//                 outputField.innerText = "Password is strong";
//                 outputField.style.color = 'green';
//             }
//         }
//     }
// });


// Another way to do this same thing!

const inputField = document.getElementById("Password");
const outputField = document.getElementById("output");

inputField.addEventListener('input', () => {
    const password = inputField.value;

    if (!password) {
        outputField.style.display = 'none';
        return;
    }

    outputField.style.display = 'block';

    const conditions = [
        { regex: /.{8,}/, message: "Password is short!" },
        { regex: /[a-z]/, message: "Lowercase is missing" },
        { regex: /[A-Z]/, message: "Uppercase is missing" },
        { regex: /[0-9]/, message: "Numbers are missing" },
        { regex: /[!\@\#\$\%\^\&\*\(\)[\]\?\.\<\>]/, message: "Special symbol is missing" }
    ];

    const failedCondition = conditions.find(condition => !condition.regex.test(password));

    if (failedCondition) {
        outputField.innerText = failedCondition.message;
        outputField.style.color = 'red';
    } else {
        outputField.innerText = "Password is strong";
        outputField.style.color = 'green';
    }
});
