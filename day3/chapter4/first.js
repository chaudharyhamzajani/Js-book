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


//4.4 exercise
// In this exercise, we'll create a Magic 8-Ball random answer generator
// let getValue = Math.random();


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