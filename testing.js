// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
// //   var password = generatePassword();
//   var passwordText = document.querySelector("#password"); //this is targeted for the body section where it places the password inside the dotted box.
  
//   const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
// //   const randomNumber = number[Math.floor(Math.random() * numbers.length)];
  
//   const capitalLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// //   const randomCapLetters = capitalLetters[Math.floor(Math.random() * capitalLetters.length)];

//   const lowCaseLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//   const toLowerCase = lowCaseLetters.map(lowCaseletters => lowCaseletters.toLowerCase());
// //   const lowerLetters = lowCaseLetters[Math.floor(Math.random() * lowCaseLetters.length)];


//   console.log(toLowerCase);

// const specialCharaters = ["!", "@", "%", "#", "^", "&", "*", ")", "("]
// //   const randomSpecial = specialCharaters[Math.floor(Math.random()*specialCharaters)];


// //all possible combinations added here:
// const random0 = [numbers, capitalLetters, toLowerCase, specialCharaters];
// const random1 = [numbers, capitalLetters, toLowerCase];
// const random2 = [numbers, capitalLetters];
// const random4 = [numbers, specialCharaters];
// const random5 = [numbers, toLowerCase];
// const random6 = [numbers];
//         //captial letters array
//   const random7 = [capitalLetters, toLowerCase, specialCharaters]
//   const random8 = [capitalLetters, toLowerCase];
//   const random9 = [capitalLetters, specialCharaters];
//   const random10 = [capitalLetters];
//         //lowercase array
//   const random11 = [toLowerCase, specialCharaters];
//   const random12 = [toLowerCase];
//         //special character array 
//   const random13 = [specialCharaters];

// //four arrays combined into one. 
// const masterArray  = [...numbers, ...capitalLetters, ... toLowerCase, ... specialCharaters];


//   alert("Welcome to Kurtis's Password Generator! Password cannot less than 7 characters or no more than 128 characters.");
//   let dnumConfirm = confirm("Do you want numbers in your password?");
//   let capConfirm = confirm("Do you want capital letters in your password?");
//   let lowConfirm = confirm("Do you want lowercase letters in your password?");
//   let specialConfirm = confirm("Do you want special characters in your password?");
//   let userInput = prompt("How many capital letters would you like?");

// if((userInput < 8) || (userInput > 128)) {
//     alert("You must enter password more than 8 and less than 128 characters.");
//     writePassword();
// }  
 
// if(dnumConfirm && capConfirm && lowConfirm && specialConfirm) {
    
//     let randomPassword = "";
//     for(var i =0; i = userInput.length; i++) {
//          randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//          console.log(randomPassword);
//          return randomPassword;
//     }
//     // const numAndValue = randomNumber * parseInt(dnumConfirm);
//     // const capAndValue = randomCapLetters * parseInt(capConfirm);
//     // const lowAndValue = lowerLetters * parseInt(lowConfirm);
//     // const specialAndValue = randomSpecial * parseInt(specialConfirm);
    

//     // return (numAndValue + capAndValue + lowAndValue + specialAndValue);

//   } else if(dnumConfirm && capConfirm && lowConfirm && !specialCharaters) {
    
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
//     //   const numAndValue = randomNumber * parseInt(dnumConfirm);
//     //   const capAndValue = randomCapLetters * parseInt(capConfirm);
//     //   const lowAndValue = lowerLetters * parseInt(lowConfirm);

//     //   return (numAndValue + capAndValue + lowAndValue);
    

  
//   } else if(dnumConfirm && capConfirm && !lowConfirm && !specialCharaters) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
//         // const numAndValue = randomNumber * parseInt(dnumConfirm);
//         // const capAndValue = randomCapLetters * parseInt(capConfirm);

//         // return (numAndValue + capAndValue + lowAndValue);
       

//   } else if(dnumConfirm && !capConfirm && !lowConfirm && !specialCharaters) {
//     //   const numAndValue = randomNumber * parseInt(dnumConfirm);

//       let randomPassword = "";
//       for(var i =0; i = userInput.length; i++) {
//            randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//            return randomPassword;
//       }

//     //   return numAndValue

// //   } else if (!dnumConfirm && capConfirm && lowConfirm && specialConfirm) {
// //       const capAndValue = randomCapLetters * parseInt(capConfirm);
// //       const lowAndValue = lowerLetters * parseInt(lowConfirm);
// //       const specialAndValue = randomSpecial * parseInt(specialConfirm);

//     //   return (capAndValue + lowAndValue + specialAndValue);

//   } else if (!dnumConfirm && !capConfirm && lowConfirm && specialConfirm) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
//     //   const lowAndValue = lowerLetters * parseInt(lowConfirm);
//     //   const specialAndValue = randomSpecial * parseInt(specialConfirm);

//     //   return (lowAndValue + specialAndValue);

//   } else if (!dnumConfirm && capConfirm && lowConfirm && !specialConfirm) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//     }
//     //   const capAndValue = randomCapLetters * parseInt(capConfirm);
//     //   const lowAndValue = lowerLetters * parseInt(lowConfirm);

//     //   return(capConfirm + lowConfirm);

//   } else if (!dnumConfirm && capConfirm && !lowConfirm && !specialConfirm) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
    
//     // const capAndValue = randomCapLetters * parseInt(capConfirm);
      
//     //   return(capAndValue);

//   } else if(!dnumConfirm && !capConfirm && lowConfirm && !specialConfirm) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
//     //   const lowAndValue = lowerLetters * parseInt(lowConfirm);

//     //   return lowAndValue;

//   } else if (!dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
//     //   const specialAndValue = randomSpecial * parseInt(specialConfirm);

//     //   return  specialAndValue;

//   } else if(dnumConfirm && !capConfirm && lowConfirm && !specialConfirm) {
//         let randomPassword = "";
//         for(var i =0; i = userInput.length; i++) {
//             randomPassword += userInput[Math.floor(Math.random() * masterArray.length)];
//             return randomPassword;
//         }
//     //   const numAndValue = randomNumber * parseInt(dnumConfirm);
//     //   const lowAndValue = lowerLetters * parseInt(lowConfirm); 

//     //   return (numAndValue+ lowAndValue);
// }  
// //   } else {
// //       alert("You have decided not to use any of the presents letters numbers and special characters. Aborting Program")
// //   }


// passwordText.value = password;

// }


// // Add event listener to generate button. My note: the below "generateBtn" is linked to the variable assignment code. And the assignment code is targeted to the 
// // to the button section in html
// generateBtn.addEventListener("click", writePassword);


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
//   var password = generatePassword();
  var passwordText = document.querySelector("#password"); //this is targeted for the body section where it places the password inside the dotted box.
  
  const numbers = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];

  
  const capitalLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


  const lowCaseLetters = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const toLowerCase = lowCaseLetters.map(lowCaseletters => lowCaseletters.toLowerCase())

  console.log(toLowerCase);

const specialCharaters = ["!", "@", "%", "#", "^", "&", "*", ")", "("]



//all possible combinations added here:
const random0 = [numbers, capitalLetters, toLowerCase, specialCharaters];
const random1 = [numbers, capitalLetters, toLowerCase];
const random2 = [numbers, capitalLetters];
const random3 = [numbers, specialCharaters];
const random4 = [numbers, toLowerCase];
const random5 = [numbers];
        //captial letters array
  const random6 = [capitalLetters, toLowerCase, specialCharaters]
  const random7 = [capitalLetters, toLowerCase];
  const random8 = [capitalLetters, specialCharaters];
  const random9 = [capitalLetters];
        //lowercase array
  const random10 = [toLowerCase, specialCharaters];
  const random11 = [toLowerCase];
        //special character array 
  const random12 = [specialCharaters];

//four arrays combined into one. 
// const masterArray  = [...numbers, ...capitalLetters, ... toLowerCase, ... specialCharaters];


  alert("Welcome to Kurtis's Password Generator! Password cannot less than 7 characters or no more than 128 characters.");
  let dnumConfirm = confirm("Do you want numbers in your password?");
  let capConfirm = confirm("Do you want capital letters in your password?");
  let lowConfirm = confirm("Do you want lowercase letters in your password?");
  let specialConfirm = confirm("Do you want special characters in your password?");
  let userInput = prompt("How many capital letters would you like?");

if((userInput < 8) || (userInput > 128)) {
    alert("You must enter password more than 8 and less than 128 characters.");
    writePassword();
}  
 
if(dnumConfirm && capConfirm && lowConfirm && specialConfirm) {
    
    let randomPassword = "";
    for(var i =0; i = userInput.length; i++) {
         randomPassword += userInput[Math.floor(Math.random() * random0.length)];
         console.log(randomPassword);
         return randomPassword;
    }

  } else if(dnumConfirm && capConfirm && lowConfirm && !specialConfirm) {
    
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random1.length)];
            return randomPassword;
        }

  
  } else if(dnumConfirm && capConfirm && !lowConfirm && !specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random2.length)];
            return randomPassword;
        }


  } else if(dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random3.length)];
            return randomPassword;
        }
    
  } else if(dnumConfirm && !capConfirm && !lowConfirm && !specialConfirm) {

      let randomPassword = "";
      for(var i =0; i = userInput.length; i++) {
           randomPassword += userInput[Math.floor(Math.random() * random5.length)];
           return randomPassword;
      }

  } else if(dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
    let randomPassword = "";
    for(var i =0; i = userInput.length; i++) {
        randomPassword += userInput[Math.floor(Math.random() * random3.length)];
        return randomPassword;
      }
    
  } else if (!dnumConfirm && capConfirm && lowConfirm && specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
          randomPassword += userInput[Math.floor(Math.random() * random6.length)];
          return randomPassword;
        }


  } else if (!dnumConfirm && capConfirm && lowConfirm && !specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random7.length)];
            return randomPassword;
    }


} else if (!dnumConfirm && !capConfirm && lowConfirm && specialConfirm) {
    let randomPassword = "";
    for(var i =0; i = userInput.length; i++) {
        randomPassword += userInput[Math.floor(Math.random() * random10.length)];
        return randomPassword;
    }

} else if (!dnumConfirm && capConfirm && !lowConfirm && !specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random9.length)];
            return randomPassword;
        }

 } else if (!dnumConfirm && capConfirm && !lowConfirm && specialConfirm) {
          let randomPassword = "";
          for(var i =0; i = userInput.length; i++) {
              randomPassword += userInput[Math.floor(Math.random() * random8.length)];
              return randomPassword;
        }
   
} else if(!dnumConfirm && !capConfirm && lowConfirm && !specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random11.length)];
            return randomPassword;
        }


  } else if (!dnumConfirm && !capConfirm && !lowConfirm && specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random12.length)];
            return randomPassword;
        }


  } else if(dnumConfirm && !capConfirm && lowConfirm && !specialConfirm) {
        let randomPassword = "";
        for(var i =0; i = userInput.length; i++) {
            randomPassword += userInput[Math.floor(Math.random() * random4.length)];
            return randomPassword;
        }

} 

passwordText.value = password;

}


// Add event listener to generate button. My note: the below "generateBtn" is linked to the variable assignment code. And the assignment code is targeted to the 
// to the button section in html
generateBtn.addEventListener("click", writePassword);


