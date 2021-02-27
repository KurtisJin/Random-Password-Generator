// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
var password = generatePassword();
console.log(password);
var passwordText = document.querySelector("#password"); //this is targeted for the body section where it places the password inside the dotted box.
  
passwordText.value = password;

}

function generatePassword() { //created a function for generating password
 
    //made arrays for the computer to pick randomly from.
    const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const capitalLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowCaseLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const toLowerCase = lowCaseLetters.map(lowCaseletters => lowCaseletters.toLowerCase());
    // console.log(toLowerCase);
    const specialCharaters = ["!", "@", "%", "#", "^", "&", "*", ")", "("];
    
    //all possible combinations added here:
    const random0 = [numbers, capitalLetters, toLowerCase, specialCharaters].flat();
    const random1 = [numbers, capitalLetters, toLowerCase].flat();
    const random2 = [numbers, capitalLetters].flat();
    const random3 = [numbers, specialCharaters].flat();
    const random4 = [numbers, toLowerCase].flat();
    const random5 = [numbers].flat();
    
    console.dir(random5);
            //captial letters array
    const random6 = [capitalLetters, toLowerCase, specialCharaters].flat();
    const random7 = [capitalLetters, toLowerCase].flat();
    const random8 = [capitalLetters, specialCharaters].flat();
    const random9 = [capitalLetters].flat();
            //lowercase array
    const random10 = [toLowerCase, specialCharaters].flat();
    const random11 = [toLowerCase].flat();
            //special character array 
    const random12 = [specialCharaters].flat();
    
    //four arrays combined into one. 
    // const masterArray  = [...numbers, ...capitalLetters, ... toLowerCase, ... specialCharaters];
    
    //prompts for the confirms
    alert("Welcome to Kurtis's Password Generator! Password cannot less than 7 characters or no more than 128 characters.");
    let dnumConfirm = confirm("Do you want numbers in your password?");
    let capConfirm = confirm("Do you want capital letters in your password?");
    let lowConfirm = confirm("Do you want lowercase letters in your password?");
    let specialConfirm = confirm("Do you want special characters in your password?");

    // let capConfirm = false;
    // let lowConfirm = false;
    // let specialConfirm = false;
    let userInput = prompt("How many capital letters would you like?");
    

    //if and else statement for the combination of possible outcomes from the prompts
    if((userInput < 8) || (userInput > 128)) {
        alert("You must enter password more than 8 and less than 128 characters.");
        writePassword();
    }  
    
    let randomPassword = "";

    if(dnumConfirm && capConfirm && lowConfirm && specialConfirm) { //true or false value from the prompts. 
        
        for(var i =0; i < userInput; i++) { //since math.random is counted less than 1 value, it needs to pick 1 character at a time.
             randomPassword += random0[Math.floor(Math.random() * random0.length)]; //from the possible combination, it will use math.floor to round down and pick one charater at a time from the combination array. 
             console.log(randomPassword);
    
        }
    
    } else if(dnumConfirm && capConfirm && lowConfirm && !specialConfirm) {
    
        
        for(var i =0; i < userInput; i++) { 
            randomPassword += random1[Math.floor(Math.random() * random1.length)];

        }

    } else if(dnumConfirm && capConfirm && !lowConfirm && !specialConfirm) {
        
        
        for(var i =0; i < userInput; i++) {
            
            randomPassword += random2[Math.floor(Math.random() * random2.length)];
            console.log(randomPassword);
           
        }


    } else if(dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random3[Math.floor(Math.random() * random3.length)];

        }
    
    } else if(dnumConfirm && !capConfirm && !lowConfirm && !specialConfirm) {
        
        
        console.log(userInput);
        for(var i =0; i < userInput; i++) {
            randomPassword += random5[Math.floor(Math.random() * random5.length)];
            console.log(randomPassword);
    
        }

    } else if(dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
        randomPassword += random3[Math.floor(Math.random() * random3.length)];
        }
    
    } else if (!dnumConfirm && capConfirm && lowConfirm && specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random6[Math.floor(Math.random() * random6.length)];

        }

    } else if (!dnumConfirm && capConfirm && lowConfirm && !specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random7[Math.floor(Math.random() * random7.length)];

    }

    } else if (!dnumConfirm && !capConfirm && lowConfirm && specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
        randomPassword += random10[Math.floor(Math.random() * random10.length)];
    }

    } else if (!dnumConfirm && capConfirm && !lowConfirm && !specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random9[Math.floor(Math.random() * random9.length)];

        }

    } else if (!dnumConfirm && capConfirm && !lowConfirm && specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random8[Math.floor(Math.random() * random8.length)];
    
        }
    
    } else if(!dnumConfirm && !capConfirm && lowConfirm && !specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random11[Math.floor(Math.random() * random11.length)];

        }


    } else if (!dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random12[Math.floor(Math.random() * random12.length)];

        }


    } else if(dnumConfirm && !capConfirm && lowConfirm && !specialConfirm) {
        
        for(var i =0; i < userInput; i++) {
            randomPassword += random4[Math.floor(Math.random() * random4.length)];

        }

    } 
return randomPassword;

}

// Add event listener to generate button. My note: the below "generateBtn" is linked to the variable assignment code. And the assignment code is targeted to the 
// to the button section in html
generateBtn.addEventListener("click", writePassword);


