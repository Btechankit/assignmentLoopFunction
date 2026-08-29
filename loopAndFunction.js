// 1--------------
// for(let i=1;i<=10;i++){
// console.log(i);
// }

// 2----------
// let i=0
// while(i<=20){
//     console.log(i)
//     i+=2
// }

// for (let i=0;i<=20;i+=2){
//     console.log(i);
// }

// 3-------
// for (let i=1;i<=20;i+=2){
//     console.log(i);
// }

// 4---------------
// for(let i=10;i>=1;i--){
// console.log(i);
// }

// 5-------------
// let total=0
// for(let i=10;i>=1;i--){
//     total=total+i
// }
// console.log(total);

// 6------------
// let i=1;
// while(i<=10){
//     console.log(2,`*`,i,`=`,2*i);
//     i++
// }

// 7-----------
// let i=1;
// while(i<=10){
//     console.log(i);
//     i++
// }

// 8--------
// let i =0;
// let total=0
// while(i<=20){
//     if (i%2==0){
//         total=total+i
//     }
//     i++
// }
// console.log(total)

// 9-----------------
// let i=1;
// while(i<=10){
//     if(i==6){
//         break;
//     }
//      console.log(i)
//     i++
// }

// 10----------------
// let i=1;
// while(i<=10){
//     if(i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// }


// 11---------
// function greetUser(name){
//     console.log(`Hello`,name);
// }
// greetUser("Ankit");


// 12----------------
// function sumTwoNum(num1,num2){
//     console.log(num1+num2);
// }
// sumTwoNum(3,5)

// 13-------------------
// function checkNum(num){
//     if(num%2==0){
//         console.log("The number is even ")
//     }
//     else{
//         console.log("The number is odd")
//     }
// }
// checkNum(8767)

// 14-----------------
// function squareNum(num){
//     console.log(`The number Square is :`,num*num)
// }
// squareNum(7)

// 15-----------------
// function checkLargest(num1,num2){
//     if(num1>num2){
//         console.log(`First number is greatest`)
//     }
//     else if (num1<num2){
//         console.log(`The second number is greatest`)
//     }
//     else {
//         console.log("The number are equals")
//     }
// }
// checkLargest(24,21)

// 16-----------------------
// function calculateTotal(price,quality){
//     console.log(`Price =`,price)
//     console.log(`Quantity =`,quality)
//     console.log(`Total =`,price*quality)
// }
// calculateTotal(506,2)

// 17----------------------------
// function printNumber(n){
//     for(let i=1;i<=n;i++){
//         console.log(i)
//     }
// }
// printNumber(98)

// 18--------------------------
// function printTable(num){
//     let i=1;
//     while(i<=10){
//         console.log(num,`*`,i,`=`,num*i);
//         i++;
//     }
// }
// printTable(5)

// 19-----------------
let total=0;
function sumNumbers(n){
    let i=1;
    while(i<=n){
        total=total+i
        i++
    }
    console.log(total);
}
sumNumbers(5)