QUESTION 1
Mutating arrays method change the array itself instead of returning a new array with the new changes. They
//change the object after the method has been used.
Examples; Array.pop(), Array.splice(), Array.push(), Array.unshift(), Array.shift().
//Non-mutating methods do not change the object after the method has been used.
Examples; Array.slice(), Array.concat(), Array.map(), Array.filter, spread

QUESTION2
const languages=['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
//a) Add 'Kotlin' to the end of the array
languages.push('Kotlin')
console.log(languages)

//Add 'Java' after ruby
languages.splice(2, 0, 'Java');
console.log(languages)

//c).Remove the first item in the array.
languages.shift();
console.log(languages)

//d) Add 'Scala' and 'Swift' to the beginning of the array.
languages.unshift('Scala', 'Swift');
console.log(languages)

//e) Replace 'PHP' with 'Go' and 'Rust'
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages)

QUESTION 3
let fruit=['apple', 'mango', 'banana'];
function changeFruit(fruit){
    fruit[2]="orange";
    return fruit;
}
console.log(changeFruit(fruit));

QUESTION 4
function max(arr){
    return Math.max(...arr)
}
console.log('The maximum number is ' +max([1,7,5,24]))

QUESTION 5
function valTimesIndex(arr){
    let result=[]
    for(let i=0; i<arr.length; i++){
        result.push(arr[i]*i);
    }
    return result;
}
console.log(valTimesIndex([2,3,5,4]))