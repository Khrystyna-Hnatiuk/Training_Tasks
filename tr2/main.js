// Розвернути рядок
// Напиши функцію, яка приймає рядок як аргумент і повертає його у зворотному порядку.
// Приклад:

// javascript
// Копіювати
// Редагувати
// reverseString("hello"); // "olleh"

//TASK 1
// function reverseString(str){
//     if(str===''){
//         return str;
//     }
//     return reverseString(str.substr(1)) + str.charAt(0)
// }
// console.log(reverseString("hello")); // "olleh"

//TASK2
// function filterEvenNumbers(numbers) {
//   if (!Array.isArray(numbers)) {
//     return [];
//   }
//   if (numbers.length === 0) {
//     return;
//   }

//   return numbers.filter((item) => item % 2 === 0);
// }
// console.log(filterEvenNumbers([1, 2, 3, 4, 5])); // [2, 4]
// console.log(filterEvenNumbers()); // [2, 4]

//TASK3 ПОРАХУВАТИ ГОЛОСНІ
// function countVowels(str){
// let count=0;
// let vowels = ['e','y','u','i','o','a'];
// for(let i=0;i<str.length;i++){
//     if(vowels.includes(str[i].toLowerCase())){count++}
// }
// return count

// }
// console.log(countVowels('how are you'))
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "e":
//       case "y":
//       case "u":
//       case "i":
//       case "o":
//       case "a":

//         count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("how are you"));

//TASK 5
// function factorial(num){
//     if(num<=1){
//         return num;
//     }
//     return num* factorial(num-1)
// }
// console.log(factorial(5))

//TASK 6
// function fibbonacci(num){
//     if(num<=1){
//         return num;
//     }
//     return fibbonacci(num-2)+fibbonacci(num-1)
// }
// console.log(fibbonacci(10))

//TASK 7
// function findMax(num){
//     let maxValue= num.sort((a,b)=>b-a);
//     return maxValue[0]
// }
// function findMax(num) {
//   let maxValue = num[0];

//   for (let elem of num) {
//     if (elem > maxValue) {
//       maxValue = elem;
//     }
//   }
//   return maxValue;
// }
// function findMax(num){
//     return Math.max(...num)
// }
// console.log(findMax([3, 5, 7, 2, 8]));

//TASK 8
// function isPrime(n) {
//   if(isNaN(n)|| n<=1){console.log('-');return}
//     let isPrime = true;

//     for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       isPrime = false;
//       break;
//     }
//   }  
  

//   if(isPrime){
//     console.log(`${n} prime`)
//   }
//   else{
//     console.log(`${n} not prime`);
//   }
// }
// isPrime(9);
// isPrime(1);
// isPrime(17);

//TASK 9
// function countDown(n){
//   for(let i=n;i>=0;i--){
//     console.log(i)
//   }
// }
// countDown(5)




//РЕКУРСІЯ

//TASK 1
// function sumArray(arr){
//   if(arr.length===0){
//     return 0;
//   }
//   return arr[0] + sumArray(arr.slice(1))
// }
// console.log(sumArray([1,3,5,7]))

//1+ sumArray[3,5,7]      1+15
//3 +sumArray[5,7]  3+12 =15
//5 +sumArray[7]  5+7=12
//7 +sumArray[]  0+7=7
//''=0  


//TASK 2
// function findMax(arr){
// if(arr.length===1){return arr[0];}

// let curren= arr[0];
// let maxInRest = findMax(arr.slice(1));
//  if(curren>maxInRest){
//     return curren;
//  }
//  else{
//     return maxInRest
//  }
// }

// console.log(findMax([1,3,5,7,9,0]))


//TASK3
// function containsElemInArray(array, element){

//     if(array.includes(element)){return true}
//     else{
//      return   false
//     }
// }
// console.log(containsElemInArray([1,2,3],0))
// function containsElemInArray(array, element){


//    if(array.length ===0){
//     return  false;
//    }
//  if(array[0]===element){return true}
//  return containsElemInArray(array.slice(1),element)
// }
// console.log(containsElemInArray([1,2,3],0))
// console.log(containsElemInArray([1,2,3],1))

//TASK 4
// function power(num,exp){
// if(exp===0){return 1}
// if(num===0){return num}

// if(num>0){
//     return num*power(num,exp-1)
// }
//     return 1/power(num,-exp);
// }
// console.log(power(2,3))
// console.log(power(1,3))
// console.log(power(0,3))
// console.log(power(3,0))
// console.log(power(3,-2))


//TASK 5 5. Реверс рядка
// function reverseString(str){
//     if(str===''){
//         return str;
//     }
//     return reverseString(str.slice(1))+str[0]; 

// }
// console.log(reverseString('hello'))


//TASK 6
// function isPalindrome(str){
//     if(str.length<=1){
//         return true;
//     }
//    if(str[0]===str[str.length-1]){
//     return isPalindrome(str.slice(1, str.length-1))
//    }
// return false;
// }
// // console.log(isPalindrome('hello'))
// console.log(isPalindrome('radar'))
// console.log(isPalindrome('heello'))



//TASK 7
// function sumDigits(num){
//     if(num===0){return 0}
//     return  num%10 + sumDigits(Math.floor(num/10))
// }
// console.log(sumDigits(123)); // 6 (1 + 2 + 3)


//TASK 8. Пошук індексу елемента в масиві

// function findIndex(arr,elem,index=0){
// if(arr.length===0){return -1};
// if(arr[0]===elem){
//     return index;
// }
// return findIndex(arr.slice(1),elem,index+1)
// }

// console.log(findIndex([1, 2, 3, 4], 3)); // 2
// console.log(findIndex([3], 3)); // 2


//TASK 9
// function  countElements(arr){
//     if(arr.length===0){return 0}
//     return 1 + countElements(arr.slice(1))
// }

// console.log(countElements([1, 2, 3, 4])); // 4
// console.log(countElements([])); // 4
 

//TASK 10
// function createArray(n){
//     if(n===0){return []}
//     return createArray(n-1).concat(n)
// }
// console.log(createArray(5))





//OTHER TASKS

//TASK 1
// function getUniqueElements(arr) {
//     return [...new Set (arr)]
//   }
//   console.log(getUniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// function getUniqueElements(arr){
// return arr.filter((item,ind)=>arr.indexOf(item)===ind)
// }
//   console.log(getUniqueElements([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]


