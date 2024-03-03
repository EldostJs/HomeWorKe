// lesson 1

// var age = prompt("Write your age")

// if (age < 18) {
//     var numb = (18 - age);
//     document.getElementById("myH").textContent = `Contact us after ${numb} years old`;

// }else if( age = 18) {
//     document.getElementById("myH").textContent = `Contact us number +994 12 345 67 89 to get drivers lisency`;

// }else if (age >= 18) {
//     document.getElementById("myH").textContent = `Contact us number +994 12 345 67 89 to get drivers lisency`;
// }
// console.log(age, numb);

// lesson 2 

// var age = prompt("Write your age and I will answer our age difference");
// var num;

// if (age > 22) {
//     num = age - 22;
//     // alert(num)
//     document.getElementById("myh").textContent = `You are older than me by ${num} years`;
// } else if (age < 22) {

//     num = 22 - age;
//     document.getElementById("myH").textContent = `You are younger than me by ${num} years`;
// }

// console.log(age, num);

// lesson 3 

var num = prompt(`write number`)

if (num == 2 || num == 4 || num == 6 || num == 8) {
    document.getElementById("myH").textContent = `${num} is an even number`
    
}else if(num == 1 || num == 3 || num == 5 || num == 7 || num == 9){
    document.getElementById("myH").textContent = `${num} number is odd`
}