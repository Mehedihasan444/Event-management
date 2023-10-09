<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);


- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined

<details><summary><b>B</b></br> <p>
<i>Here we defined greeting variable. Then we set an object inside another variable named greetign and printing the result. This code will find the error like greetign is not defined. This could be a spelling mistake.</i>
</p> </summary>

</details>

###### 2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");


- A: NaN
- B: TypeError
- C: "12"
- D: 3

<details><summary><b>C</b> </br> <p>
<i>Here we transferred one number and one string to make the sum. But there is no console.log to print the answer. On the other hand the answer will be "12" just we made the sum of one number and one string.</i>
</p></summary>

</details>

###### 3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);


- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError

<details><summary><b>A</b> </br> <p>
<i>In This problem we declared an array named food and inserted 4 foods in it. then we declared another variable name info which is an object and we inserted the food[0] index of food in that object. In the next line we changed the value of info with another pic. Then we printed the value of food. All the things we did will not change anything inside of food variable. So, this will print the same array we declared.</i>
</p></summary>

</details>

###### 4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());


- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError

<details><summary><b>B</b> </br> <p>
<i>In This problem we declared a function named sayHi and added a parameter 'name'. then we called that function from a console.log without any name or parameter in it and then we returning two things one is 'Hi there' and another is name parameter dynamically. In this case the first part 'Hi there' will be printed in the console and the second part 'name' variable will be printed as undefined. Because we didn't inserted any name for this parameter.</i>
</p></summary>
</details>

###### 5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);


- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>C</b> </br> <p>
<i>In This problem we declared an array of 4 numbers and a count variable. then we apply the forEach loop in the array to get each element in the array and also we are checking if num is 'true' then we area adding 1 with the count variable. the simulation will be like:

Each Num: 0</br>
</br>  
Each Num: 1</br> 
Num,count: 1 1</br> 
</br> 
Each Num: 2</br> 
Num,count: 2 2</br> 
</br> 
Each Num: 3</br> 
Num,count: 3 3</br> 
</br> 
Answer of main count: 3</br> 
 
 In this case 0 is not counting as a number because it gives the result 'false'. So, in the case of 0 this code is not increasing the value of count by 1.</i>
</p></summary>