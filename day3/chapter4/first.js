// //4.1 exercise
// let leave = true;
// console.log(leave);
// if(leave == true){
// console.log(`i am on leave`);
// };
// if(leave !==true){
//     console.log(`i am present`);
// };


// //4.2 exercise
// let age = prompt("what is your age");
// youserAge = new Number(age) ;         //convert string to number
// if(youserAge >= 21){
//     console.log(`confirm entry to a venue and the ability to purchase alcohol`);
// }
// else if(youserAge >= 19){
//     console.log(`confirm entry to a venue but deny the purchase or alcohol`);
// }
// else{
//     console.log(`deny entry`);
// };


// //4.3 exercise
// let id = 1;
// if(id == true ? console.log(`plese welcom`) : console.log(`sorry sir wrong id`));   //use ternary operator


// //4.4 exercise
// // In this exercise, we'll create a Magic 8-Ball random answer generator
// //in this we get a number from user b/w 0-5 and generate a random value 
// //and print the result on the basis of random value.if user can't give 
// //value its print try again.
// let getValue = Math.random()*6;
// Math.round(2).getValue
// let finalOutput = prompt();
// switch (finalOutput) {
//     case "0":
//         result = `you won the car`;
//         break;
//     case finalOutput = "1":
//         console.log(`you won the bike`);
//         break;
//     case finalOutput = "2":
//         console.log(`you won the dimond ring`);
//         break;
//     case finalOutput = "3":
//         console.log(`you won the AC`);
//         break;
//     case finalOutput = "4":
//         console.log(`you won the LED`);
//         break;
//     case finalOutput = "5":
//         console.log( `you won the Mobile`);
//         break;

//     default:
//        console.log(`try again`);
//         break;             
// }
// let finalResult = console.log(`:- you select number  ${finalOutput}`);


// //4.5 exercise
// let price = prompt(`select the value from 0 to 10`);
// totalPrice = new Number(price);
// let mySelection = totalPrice
// console.log(mySelection);
// switch (price ) {
//     case "1":
//         console.log(`your total price is 100 rupees`);
//         break;
//     case "2":
//         console.log(`your total price is 200 rupees`);
//         break;
//     case "3":
//         console.log(`your total price is 300 rupees`);
//         break;
//     case "4":
//         console.log(`your total price is 400 rupees`);
//         break;
//     case "5":
//         console.log(`your total price is 500 rupees`);
//         break;
//     case "6":
//         console.log(`your total price is 600 rupees`);
//         break;
//     case "7":
//         console.log(`your total price is 700 rupees`);
//         break;
//     case "8":
//         console.log(`your total price is 800 rupees`);
//         break;
//     case "9":
//         console.log(`your total price is 900 rupees`);
//         break;


//     default:
//         console.log(`you select incorrect number`);
//         break;
// }




// // self quize
// //1. What will be outputted to the console in this instance?
// const q = '1';
// switch (q) {
//     case '1':
//         answer = "one";
//         break;
//     case 1:
//         answer = 1;
//         break;
//     case 2:
//         answer = "this is the one";
//         break;
//     default:
//         answer = "not working";
// }
// console.log(answer);


// // 2. What will be outputted to the console in this instance?
// const q = '1';
// switch (q) {
//     case '1':
//         answer = "one";
//     case 1:
//         answer = 1;
//     case 2:
//         answer = "this is the one";             //can't understand
//         break;
// default:
//         answer = "not working";
// }
// console.log(answer);        //ans is case 2


// // 3. What will be outputted to the console in this instance?
// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolder ="login";    //use ternery operator
// console.log(userOkay);    //ans is login


// // 4. What will be outputted to the console in this instance?
// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
// htmlOutput = "Welcome, that is a user";
// } else {
// htmlOutput = "Denied, not a user ";
// }
// console.log(htmlOutput + ": " + userInput);      //welcom + john


// // 5. What will be outputted to the console in this instance?
// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
// output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
// output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
// output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {
// output = "Dinner time";
// } else if (myTime >= 22) {
// output = "Time to go to sleep";
// } else {
// output = "You should be sleeping";
// }
// console.log(output);     //ans is wake up, it's morning


// // 6. What will be outputted to the console in this instance?
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);         //ans is :true
// console.log(a > b && b > a);         //ans is :false
// console.log(d > b || b > a);         //ans is :true
// console.log(d > b && b > a);         //ans is :true


// // 7. What will be outputted to the console in this instance?
// let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` :
// `${val} was LESS or Equal to 100`;
// console.log(message);      //100 was LESS or Equal to 100
// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);        //100 is even



// project
//Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a random
// selection of either Rock, Paper, or Scissors (alternatively, you could create a version
// using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
// Scissors will beat out Paper. You can use JavaScript to create your own version of
// this game, applying the logic with an if statement.
let userInput = 0;
let mechineInput = 0;
function playGame (){ 
    const options = ["Rock" , "Paper" , "Scissors"];          //create array
    const playerChoiceIndex = Math.floor(Math.random()*3);    //generate random selection for players
    const computerChoiceIndex = Math.floor(Math.random()*3);
    const playerChoice =  options[playerChoiceIndex];
    const computerChoice =  options[computerChoiceIndex];
    let resultMessage = ` Player chose ${playerChoice} . Computer chose ${computerChoice}. `;
    //create variable that hold the response message
    if(playerChoice == computerChoice){
        resultMessage += ` It's a tie! `;
    }else{
        //apply game logic
        if((playerChoice === "Rock" && computerChoice === "Scissors") 
            || (playerChoice === "Paper" && computerChoice === "Rock")
        || (playerChoice === "Scissors" && computerChoice === "Paper")
     ){
        resultMessage += " :-- Player win"
     } else{
        resultMessage += " :-- Computer win";
     }
    };
    //output the result message
    document.getElementById("result").innerText = resultMessage;
    };
