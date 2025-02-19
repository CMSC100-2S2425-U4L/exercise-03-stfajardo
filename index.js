// FAJARDO, Simplicity
// 2023-06889
// U-4L
// 02/19/2025
// Exercise 03

// Function for validation of password
function validatePassword(password1, password2){
    

    if (password1!=password2){ // Checking if the first input or password is equal to the second password
        return false;
    }

    if(password1.length<8){ // Checking if there is 8 characters
       return false;
    }
    let hasNum=false, hasUpper=false, hasLower=false;
    for(let char in password1){
        if(!isNaN(char)){ // Checking if there is at least one number
            hasNum=true;
        }
        if(char<="A" && char<="Z"){ // Checking if there is at least one uppercase letter
            hasUpper=true;
        }
        if(char<="a" && char<"z"){ // Checking if there is at least one lowercase letter
            hasLower=true;
        }
    }

    return hasNum && hasUpper && hasLower;
}

// Function for reversing the password
function reversePassword(password){
    let reversedPassword="";
    for(let i=password.length-1; i>=0; i--){
        reversedPassword+=password[i];
    }
    return reversedPassword;
}

// Function for storing the name and passwords
function storePassword(name, password1, password2){
    let newPassword = validatePassword(password1, password2)
    if(newPassword){
        newPassword=reversePassword(password1);
    }else{
        newPassword=password1;
    }

    return{ Name:name, NewPassword:newPassword};
}


// Sample Run
console.log(validatePassword("Hello1234", "Hello1234")); // true
console.log(validatePassword("hello", "Hello")); // false-not equal
console.log(validatePassword("hello", "hello")); // false-lowercase
console.log(validatePassword("HELLO", "HELLO")); // false-uppercase
console.log(validatePassword("Hellooooo", "Hellooooo")); // true

console.log(reversePassword("Hello1234"));

console.log(storePassword("Simpol", "Hello1234", "Hello1234"));
console.log(storePassword("Christel", "Hello1234", "hello1234"));
