// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

const costumerName = prompt(`Hello please tell me your name`);
alert(`Hello ${costumerName}`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What type of food would you like to order?
 Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad`
);

let yourFoodChoice;

if (foodChoice === '1') {
  yourFoodChoice = alert(`you chose pizza`);
} else if (foodChoice === '2') {
  yourFoodChoice = alert(`you chose pasta`);
} else if (foodChoice === '3') {
  yourFoodChoice = alert(`you chose Salad`);
} else {
  alert(`Please enter a number between 1 and 3`);
}

// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
