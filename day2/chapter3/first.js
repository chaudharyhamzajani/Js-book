// // exercis 3.1
// let shoppingList = ["milk" , "bread" , "apple"];
// console.log(shoppingList.length);
// shoppingList.splice(1,1,"bananas");
// console.log(shoppingList);

// // erercise 3.2
// let newShoppingList = new Array ;
// newShoppingList.splice(0 , 0 ,"milk", "bread" , "apple");
// console.log(newShoppingList);

// newShoppingList.splice(1 , 1 ,"bannan", "eggs");
// console.log(newShoppingList);

// let lastElement =  console.log(newShoppingList.pop()); 
// console.log(lastElement);
// console.log(newShoppingList);

// newShoppingList.sort();
// console.log(newShoppingList);

// console.log(newShoppingList.indexOf("milk"));
// console.log(newShoppingList);

// newShoppingList.splice(1,0,"carrots" , "lettuce");
// console.log(newShoppingList);

// let newList = ["juice" , "pop"];
// let fullList = newShoppingList.concat(...newList , ...newList);
// console.log(fullList);
// console.log(fullList.indexOf("pop"));


// // exercise 3.3
// let anyNum = [1 , 2 , 3];
// let empty = [];
// empty = [[1 , 2 , 3],[1 , 2 , 3],[1 , 2 , 3]];
// console.log(empty[0][1]);


// // exercise 3.4
// let myCar = {
//     make  : "toyota",
//     model : 2021,
//     price : 4000000,
//     conditionIsUse : true,
//     color : "black",
//     };
// let colorProperty = 'color';
// myCar[colorProperty] = 'red';
// let forSaleProperty = 'forSale';
// myCar[forSaleProperty] = true;
// console.log(myCar);


// // exercise 3.5
// let people = {
//     frinds:[],
//     obj1 : {
//         friend1Name : "ali",
//         idValue : 10,
//     },
//     obj2 : {
//         friend2Name : "zubair",
//         idValue : 20,
//     },
//     obj3 : {
//         friend3Name : "zeshan",
//         idValue : 30,
//     },    
// };
// console.log(people.frinds.concat(people.obj1 , people.obj2 , people.obj3));



//                                                       // Self-check quiz
// const num = [1 , 3 , 5 , 6 , 8 , 9 , 15];
// // 1.
// // num = [1 , 2 , 3 , 4 ];          //so you can't update
// // 2.
// console.log(num.length);  
// // 3.
// // define output
// const myArr1 = [ 1 , 3 , 5 , 6 , 8 , 9 , 15];
// console.log(myArr1.indexOf(0));           //ans : -1
// console.log(myArr1.indexOf(3));           //ans : 1
// // 4.
// // replace second element with 4
// myArr1.splice(1,1,4);
// console.log(myArr1);
// // 5.
// // define output
// const myArr2 = [];
// myArr2[10] = 'test'
// console.log(myArr2);          
// console.log(myArr2[2]);      //undefine
// // 6.
// // define output
// const myArr3 = [ 3,6,8,9,3,55,553,434];
// myArr3.sort();
// myArr3.length = 0;
// console.log(myArr3[0]);      //ans : 0

