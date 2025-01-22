// function convertToMiles(m){
//     let img= 4.54699188;
//     let mile = 1.609344;
//     return (m*mile)/img;
// }
// const result =convertToMiles(30);
// console.log(result)

// let input = +prompt('Write number');
// function checkNumber(input){
// if(input%2==0){
//     console.log('even')
// }
// else
// {
//     console.log('odd')

// }
// }
// checkNumber(input)

//REVERSE ARRAY
// function reverseArray(array){
//     let reversedArr=[];
//     for(let i= array.length-1; i>=0;i--){
//         reversedArr.push(array[i]);
//     }
//     return reversedArr;

// }
// console.log(reverseArray([3,9,0,3,5,11,43,65,99]));
//SORTARRAY
// function sortArray(arr){

//    return arr.sort((a,b)=>b-a);
// }
// console.log(sortArray([3,9,0,3,5,11,43,65,99]));

// function sumArray(arr){
//     let sum = 0;
//     for(let i=0; i<=arr.length-1;i++){
//         sum+= arr[i];
//     }

//     return sum;
// }
// console.log(sumArray([0,4,2,55,13,86,0,44,54]))

// function searchMaxNumber(arr){
//     return Math.max(...arr);
// }
// console.log(searchMaxNumber([0,9,4,2,6543,23,34256]))
// function searchMaxNumber(arr){
// let max=arr[0];
// for(let i=1;i<=arr.length;i++){
// if(arr[i]>max){
//     max=arr[i];
// }
// }
// return max;

// }
//     console.log(searchMaxNumber([0,-20,9,4,2,6543,23,34256,987364]))

// let student = [
//   { name: "alex", age: 20, grade: 100 },
//   { name: "Olga", age: 22, grade: 87 },
//   { name: "Mike", age: 19, grade: 76 },
//   { name: "Liana", age: 21, grade: 95 },
// ];

// function countHighestGrade(student) {
//   let highestGrade = student[0];
//   for(let i= 1;i< student.length; i++){
//     if(highestGrade>student[i]){
//         highestGrade=student[i];
//     }
// }
// return highestGrade.name;

// }
// console.log(countHighestGrade(student));

//FINDMAX 1
// function findMax(arr){
//     let maxValue= arr[0];
// for(let i=1;i<=arr.length; i++){
// if(arr[i]>maxValue){
//     maxValue=arr[i];
// }
// }
// return maxValue

// }
// console.log(findMax([3,7,2,10,4]))
//FINDMAX 2
// function findMax(arr){
//     let maxValue= arr[0];
// for(let i=1;i<arr.length; i++){
// maxValue= Math.max(maxValue, arr[i]);
// }
// return maxValue;

// }
// console.log(findMax([3,7,2,10,4]))

// function isPalindrome( str){
// let direct = str;
// let reversed='';
// for(let i=str.length-1; i>=0;i--){
//  reversed+=str[i];
// }

// if(direct===reversed){
//     return true;
// }
// else{
//     return false
// }
// }
// console.log(isPalindrome('radar'));
// console.log(isPalindrome('hello'));

//ПІДРАХУНОК ГОЛОСНИХ 1
// function countVowels(str) {
//   let count = 0;
//   for (let i = 0; i <= str.length; i++) {
//     switch (str[i]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         count++;
//     }
//   }
//   console.log("count", count);
// }
// countVowels("hello world");

//2
// function countVowels(str) {
//   let vowels = ['a','e','i','o','u'];
//    let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i].toLowerCase())) {
//       count++;
//     }
//   }
// return count;
// }
// console.log(countVowels("hEllo world"));

//FILTER ARRAY
// function filterArray(array){
//     let odNNumbers =[];
// for(let i=0;i<array.length;i++){
// if(array[i]%2==0){
//     odNNumbers.push(array[i]);
// }
// }
// return odNNumbers;

// }

// console.log(filterArray([1,2,3,4,5,6,7,8]))

//ЗАМІНА СИМВОЛІВ
// function replaceSpaces(str){
// let newStr ='';
//     for(let i=0; i<str.length;i++){
//         if(str[i]===' '){
// newStr+='-'
//         }
//         else{
//             newStr+=str[i]
//         }
//     }
//     return newStr;
// }
// console.log(replaceSpaces('oh hello '))

// function countChars(str) {.
//   let count = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     console.log(char)
//     if (count[char]) {
//       count[char]++;
//     } else {
//       count[char] = 1;
//     }
//   }
//    console.log(count)

//   return count;
// }

// console.log(countChars("hello world"));

// function sortByLength(arr) {
//     let sortedArray = [...arr]; // Копіюємо масив, щоб не змінювати оригінал
//     for (let i = 0; i < sortedArray.length - 1; i++) {
//         for (let j = i + 1; j < sortedArray.length; j++) {
//             // Порівнюємо довжини двох елементів
//             if (sortedArray[i].length > sortedArray[j].length) {
//                 // Міняємо місцями елементи, якщо перший більший за довжиною
//                 let temp = sortedArray[i];
//                 sortedArray[i] = sortedArray[j];
//                 sortedArray[j] = temp;
//             }
//         }
//     }
//     return sortedArray;
// }

// console.log(sortByLength(['apple', 'banana', 'kiwi', 'grape']));

// function sortByLength(arr){
//     return arr.sort((a,b)=>a.length-b.length)
// }

// console.log(sortByLength(['apple','banana', 'kiwi', 'grape']))

// function findDuplicates(arr){
// let seen ={};
// let duplicates=[];
// for(let i=0;i<arr.length;i++){
//     if(seen[arr[i]]){
//         duplicates.push(arr[i]);
//     }
//     else{
//         seen[arr[i]]=true;
//     }
// }
// return duplicates
// }
// console.log(findDuplicates([1, 2, 3, 4, 2, 1, 4, 7, 76, 4, 5, 7]))
// console.log(findDuplicates([1, 2, 3, 4, 5, 2, 6, 3])); // [2, 3]

// function findDuplicates(arr){

//     return arr.filter((value,index)=>arr.indexOf(value)!==index)
// }
// console.log(findDuplicates([1, 2, 3, 4, 5, 2, 6, 3])); // [2, 3]

// function add (number){
//   return  function (addedNumber){
//     return number+addedNumber
//   }
// }

// const addtwo = add(2);
// console.log( addtwo(4))

// let list = {
//     value: 1,
//      next: {
//         value: 2,
//         next: {
//             value: 3,
//             next: null
//         }
//     }
// };

// function listToArray(list){
//     let result =[];
//     let current =list;

//     while(current!==null){
//         result.push(current.value);
//         current=current.next;
//     }
//     return result;

// }

// console.log(listToArray(list))

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: null,
//     },
//   },
// };

// function reverseList(list){
//     let previousNode= null;
//     let currentNode = list;

//     while(currentNode!==null){
//         let nextNode=currentNode.next;
//         currentNode.next=previousNode;
//         previousNode=currentNode;

//          console.log(previousNode)
//         console.log(nextNode)

//         currentNode=nextNode;
//     }
//     return previousNode

// }

// let reversedList = reverseList(list);
// console.log(JSON.stringify(reversedList, null, 2));

//1
//ОБ'ЄДНАНН І ВИДАЛЕННЯ ДУБЛІКАТІВ
// function mergeUnique(arr1,arrr2){
//    return [...new Set (arr1.concat(arrr2))]

// }
// console.log(mergeUnique([1,2,3],[3,4,5]))

//2
// function mergeUnique(arr1, arr2){
//     const concatted = arr1.concat(arr2);
//     return concatted.filter((i,ind)=> concatted.indexOf(i)===ind)
// }
// console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // Виведе: [1, 2, 3, 4, 5]

//3
// function mergeUnique(arr1, arr2) {
//     // Об'єднуємо масиви
//     let concatted = arr1.concat(arr2);
//     console.log("Об'єднаний масив:", concatted);

//     // Створюємо об'єкт для перевірки унікальності
//     let seen = {};
//     let unique = [];

//     // Перебираємо об'єднаний масив
//     for (let i = 0; i < concatted.length; i++) {
//       if (!seen[concatted[i]]) {
//         // Якщо елемент ще не зустрічався, додаємо його до унікальних
//         unique.push(concatted[i]);
//         seen[concatted[i]] = true; // Помічаємо, що цей елемент уже був
//       }
//     }

//     return unique;
//   }

//   console.log(mergeUnique([1, 2, 3], [3, 4, 5])); // Виведе: [1, 2, 3, 4, 5]

// const products = [
//     { id: 1, name: 'Apple' },
//     { id: 2, name: 'Banana' },
//     { id: 3, name: 'Cherry' },
//     { id: 4, name: 'Date' },
// ];
// function filterByName(arr, substr){
//     return arr.filter(item=> item.name.toLowerCase().includes(substr.toLowerCase()))
// }
// // console.log(filterByNameName('an'));
// // const products = ['Apple', 'Banana', 'Grapes', 'Pineapple', 'Peach'];
// const filteredProducts = filterByName(products, 'a');

// console.log(filteredProducts);

// let products = document.getElementById("enteredProduct");
// let ul = document.getElementsByTagName("li");
// function filterList() {
//   let filteredText = products.value.toLowerCase();
//   for (let i = 0; i < ul.length; i++) {
//     let listItem = ul[i].textContent.toLowerCase();

//     if (listItem.includes(filteredText)) {
//       ul[i].style.display = "block";
//     } else {
//       ul[i].style.display = "none";
//     }
//   }
// }

// products.addEventListener("input", filterList);

// let inputText = document.getElementById('enterText');
// let btn =document.querySelector('.btn-add');
// let ul = document.getElementById('ul');

// btn.addEventListener('click',function(){
//     let inputValue = inputText.value;
//                   let newLi = document.createElement('li');
//   let btnDelete  =document.createElement('button');

//     if(inputValue!==''){
//         newLi.textContent =inputValue;

//         btnDelete.textContent ='Delete'

//         ul.appendChild(newLi)
//         newLi.appendChild(btnDelete)
//     }
//     btnDelete.addEventListener('click',function(){
//      ul.removeChild(newLi)

//     });
//     inputText.value=''
// })

// let a =2;
// let b=1;
// let result = a+b<4 ? 'Lower': 'Higher';
// console.log(result)

// let num =prompt('eneterr')
// // for(let i=1;i<=num;i++){
// //     if(num[i]>1 && num)
// // }
// for(let i =2;i<=num;i++){
//     for(let j =2;j<i;j++){
//         if(i%j==0) {
//             console.log('simple')
//         }
//         else{
//             console.log('not')
//         }
//     }
// }

//Парні
// for(let i=0;i<=100; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }
// let i =0;
// while(i<=100){
//     if(i%2===0){
//         console.log(i)
//     }
//     i++
// }

//СУМА чисел
// let sum = 0;
// for(let i=0;i<=20;i++){
//     sum+=i;
// }
// console.log(sum)

//ЗВоротній цикл
// for(let i=10;i>0;i--){
//     console.log(i)
// }

//Факторіал
// function factorial(n){
//     let result =1;
//     for(let i=1;i<=n;i++){
//         result*=i;
//     }
//     return result;
// }
// console.log(factorial(5))

//ТАблиця множення на 7
// let num =7;
// for(let i= 1;i<=10;i++){
//     let multiple = num*i
//     console.log(`${num} x ${i} = ${multiple}`)
// }

//MAXVALUE 1
// const arr =[45, 7, 89, 23, 12, 67, 5];
// function returnMax(arr){
// let maxV = arr.sort((a,b)=>(b-a));
// return maxV[0];
// }
// console.log(returnMax(arr))

//MAXVALUE 2

// const arr =[45, 7, 89, 23, 12, 67, 5];
// function returnMax(arr){
//     let maxV =arr[0];
//     for(let i=0;i<arr.length;i++){
//         if(maxV<arr[i]){
// maxV=arr[i]
//         }
//     }
//     return maxV
// }
// console.log(returnMax(arr))

//MAXVALUE 3
// const arr =[45, 7, 89, 23, 12, 67, 5];

// function maxValue(arr){
//     return Math.max(...arr);
// }
// console.log(maxValue(arr))

//Перевернутий рядок
// function reverseString(str){
//     let reversedString=''
// for(let i = str.length-1;i>=0;i--){
//     console.log(str[i])
//     reversedString+=str[i];
// }
// return reversedString
// }

// console.log(reverseString("hello"))

//Фільтрація масиву
// const arr =[10, 15, 20, 25, 30, 35, 40,1,9]
// function filterArray(arr){
//     let wellDone = [];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%5===0){
// wellDone.push(arr[i]);
//     }
// }
// return wellDone;
// }
// console.log(filterArray(arr));
// const arr =[10, 15,12, 20, 25, 30, 35, 40,1,9]
// function filterArray(arr){
//     return arr.filter((item =>item%5===0))
// }

// console.log(filterArray(arr));

//Заміна символів
// function changeChars(str){{
//     let newStr=''
//     for(let i=0;i<str.length;i++){
//         if(str[i]=== ' '){
// newStr+='-';
//         }
//         else{
//             newStr+=str[i]
//         }
//     }
//     return newStr;
// }}

// console.log(changeChars("javascript is awesome"))

// function changeChars(str){
// return str.split(' ').join('-')
// }
// console.log(changeChars("javascript is awesome"))

// let str ='javascript is awesome"'
// let splitted = str.split(' ')
// console.log(splitted)
// let joined = splitted.join('-');
// console.log(joined)

// function toSnakeCase(str){
// return str.split(' ').join('_')
// }
// console.log(toSnakeCase("JavaScript is Awesome")); // "javascript_is_awesome"
// console.log(toSnakeCase("This is a Test"));        // "this_is_a_test"

//Підрахунок кількості слів в рядку
// function countWords(str){
//     let count =0;
//     let splitted= str.split(' ');
//     console.log(splitted)
//     for(let  i= 0;i<splitted.length;i++){

//         if(splitted[i]!==''){
//             count++;
//         }
//     }
//     return count
// }

// console.log(countWords("JavaScript is awesome!")); // 3
// console.log(countWords("   Spaces   should  be ignored ")); // 5

//2 Варіант
// function countWords(str){
// let splitted= str.split(' ').filter(item=>item!=='');
// // console.log(splitted.length)
// return splitted.length;
// }

// console.log(countWords("JavaScript is awesome!")); // 3
// console.log(countWords("   Spaces   should  be ignored ")); // 5

//Palindrome
// function isPalindrome(str){
//     let reversed =''

//     for(let j=str.length-1;j>=0;j--){
// reversed+=str[j]
//     }
// return reversed===str;
// }
//Palindrome 2
// function isPalindrome(str){
//     return str === str.split('').reverse().join('')
// }
// console.log(isPalindrome('hello'))
// console.log(isPalindrome('radar'))

//Заміна елементів в масиві

// function replaceBelowAverage(arr) {
//   let sum = 0;
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   let average = sum / arr.length;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < average) {
//       newArr.push(0);
//     } else {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(replaceBelowAverage([10, 20, 30, 40, 50])); // [0, 0, 30, 40, 50]
// console.log(replaceBelowAverage([1, 3, 5, 7])); // [0, 0, 5, 7]


//обєднання унікальних значень 1

// function mergeUnique(arr1,arr2){
//     return [...new Set(arr1.concat(arr2))]
// }
// console.log(mergeUnique([1, 2, 3], [2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(mergeUnique([10, 20], [30, 20, 40]));  // [10, 20, 30, 40]

//обєднання унікальних значень 2
// function mergeUnique(arr1,arr2){
//    let concatted= arr1.concat(arr2);
//    return concatted.filter((elem,index)=> concatted.indexOf(elem)==index)
// }
// console.log(mergeUnique([1, 2, 3], [2, 3, 4, 5])); // [1, 2, 3, 4, 5]
// console.log(mergeUnique([10, 20], [30, 20, 40]));  // [10, 20, 30, 40]



// Глибока фільтрація об'єктів:


// const products = [
//     { name: "Phone", price: 500 },
//     { name: "Laptop", price: 1000 },
//     { name: "Tablet", price: 300 },
// ];
// function filterByPrice(obj,num){
//     return obj.filter((item)=>item.price>=num)
// }
// console.log(filterByPrice(products, 400)); 
// console.log(filterByPrice(products, 1000)); 
// console.log(filterByPrice(products, 200)); 

// // [{ name: "Phone", price: 500 }, { name: "Laptop", price: 1000 }]
// const products = [
//     { name: "Phone", price: 500 },
//     { name: "Laptop", price: 1000 },
//     { name: "Tablet", price: 300 },
// ];
// function filterByName(obj,substr){
//     return obj.filter((item)=>item.name.toLowerCase().includes(substr.toLowerCase()))
// }
// console.log(filterByName(products, 'phone')); 
// console.log(filterByName(products, 'la')); 
// console.log(filterByName(products, 'ta')); 
// console.log(filterByName(products, 'e')); 


// // [{ name: "Phone", price: 500 }, { name: "Laptop", price: 1000 }]





//РЕКУРСІЯ КІЛЬКІСТЬ СЛІВ
// function countWords(str){
// let splitted= str.split(' ').filter(item=>item!=='');
// return splitted.length;
// }


// function countWords(str){
// if(str===''){
//     return 0;

// }  
// return 1+countWords(str.slice(1))
// }
// console.log(countWords("hello")); // 5
// console.log(countWords("")); // 0
// console.log(countWords("JavaScript")); // 10



// Перестановки рядка:


function getPermutations(str){

    let result=[];
    if(str.length===1){
        console.log(`Повертаємо ${str}`)
        return [str];
    }
else{
    //abc
    for(let i=0;i<str.length;i++){
        let currentChar = str[i];// a b c
        console.log('current char:', currentChar)
        let remained = str.slice(0, i)+str.slice(i+1);
        console.log('решта',remained);


        let remPerm = getPermutations(remained);
        console.log(`перестановки для ${remained} :${remPerm}`)
        // result.push(currentChar+remained);
        for(let p of remPerm){
result.push(currentChar+p);
// console.log('current+p:', `${currentChar} + ${p}`);
// console.log(` ${p} of ${remPerm}`)
        }
    }
    console.log(`Всі перестановки для ${str}:  ${result}`)
    return result;
}
    
}
getPermutations('abc')
// console.log(getPermutations('abc'))





//РЕКУРСІЯ 
// function countDown(num){
//     if(num===0){
//         return 1;
//     }
//     console.log(num)
//       countDown(num-1)
// }

// countDown(10)


// function fact(n){
//     if(n===1){
//         return 1;
//     }
//     return n*fact(n-1)
// }
// console.log(fact(10))

// function fibbonacci(n){
//     if(n<=1){return n}
//     return fibbonacci(n-1)+fibbonacci(n-2)
// }
// console.log(fibbonacci(10))



// function reverseString(str){
//     if(str==''){
//         return '';
//     }
//     return reverseString(str.substr(1))+ str.charAt(0);
// }

// console.log(reverseString('hello'))





// function reverse(str)
// {
//     if(str===''){
//         return str;
//     }
// return reverse( str.substr(1)) +str.charAt(0);


// }
// console.log(reverse('hello'))

// function sumArray(arr) {
// if(arr.length===0 ){
//     return 0;
// }
// return  arr[0]+sumArray(arr.slice(1)) ;

// }
// console.log(sumArray([1,4,6,8,4]));  
