// let sum=0;
// let number=153;
// let temp=number;
// while(number>0){
//     let remainder=number%10;
//     sum+=remainder*remainder*remainder;
//     number=(number/10);
// }

// if(sum==temp){
//     console.log(`${number} is a Armstrong number`)
// }else{
//     console.log(`${number} is not a Armstrong number`)
// }




// let total=0;
// let num=153;
// let x=num;
// while(num>0){
//     rem=num%10;
//     cube=rem*rem*rem;
//     total=total+cube;
//     num=Math.floor(num/10);
// }
// if(total==x){
//     console.log(`${x} is a Armstrong Number`)
// }
// else
//   console.log(`${x} is not Armstrong Number`)

// let total=0;
// let num=153;
// let x=num;
// while(num>0){
//     rem=num%10;
//     total+=rem*rem*rem;
//     // total+=cube;
//    num =Math.floor(num/10);
// }
// if(total==x){
//     console.log(`${x}Armstrong number`)
// }
// else{
//     console.log(`${x}not Armstrong number`)
// }


let sum=0;
let num=153;
let x=num;

while(num>0){
    rem=num%10;
    sum+=rem*rem*rem;
    num=Math.floor(num/10);
}
if(sum==x){
    console.log(`${x} is a Armstrong number`);
}
else{
    console.log(`${x} is Not a Armstrong number`);
}

