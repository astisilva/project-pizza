// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(`Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`);

const costumerName = prompt(`Hello please tell me your name`);
alert(`Hello, nice to meet you ${costumerName}!`);

// Step 2 - Food choice
// Your code goes here
const foodChoice = prompt(
  `What type of food would you like to order?
 Enter a number: 
1 - Pizza 
2 - Pasta 
3 - Salad`
);

let yourFoodChoice = '';
if (foodChoice === '1') {
  yourFoodChoice = 'Pizza';
} else if (foodChoice === '2') {
  yourFoodChoice = `Pasta`;
} else if (foodChoice === '3') {
  yourFoodChoice = `Salad`;
} else {
  alert(`Invalid choice. Please enter a number between 1 and 3`);
  process.exit(1);
}

alert(`you have chosen ${yourFoodChoice} `);

// Step 3 - Subtype choice
// Your code goes here
let subType = '';
let foodsubType = [];

switch (yourFoodChoice) {
  case 'Pizza':
    subType = prompt(
      `select subtype for your pizza please enter the number  of your choice: 
      1 - Pepperoni
      2 - Vesuvio
      3 - Margarita `
    );
    foodsubType = ['Pepperoni', 'Vesuvio', 'Margarita'];
    break;

  case 'Pasta':
    subType = prompt(
      `select subtype for your pasta please enter the number  of your choice: 
      1 - Chicken
      2 - Salami
      3 - Mozzarella`
    );
    foodsubType = ['Chicken', 'Salami', 'Mozzarella'];
    break;

  case 'Salad':
    subType = prompt(`select subtype for your salad please enter the number  of your choice: 
      1 - Halloumi
      2 - Feta
      3 - Caesar`);
    foodsubType = ['Halloumi', 'Feta', 'Caesar'];
    break;

  default:
    alert(`Invalid choice, please start again and select a subtype for your food, Bye 👋`);
    process.exit(1);
}

subType = parseInt(subType); // SubType is a string so I have to convert it to a number
alert(`You have chosen ${foodsubType[subType - 1]}  ${yourFoodChoice} `);

// Step 4 - Age
// Your code goes here
const costumerAge = parseInt(prompt(`Is this food for child or an adult? Type your age:`));

let orderCost;
if (costumerAge <= 17) {
  orderCostMessage = `One child  ${
    foodsubType[subType - 1]
  } ${yourFoodChoice} will be prepared for you that will be €10. Are you sure you want to order this`;
} else if (costumerAge >= 18) {
  orderCostMessage = `One Adult ${
    foodsubType[subType - 1]
  } ${yourFoodChoice} will be prepared for you that will be €15. Are you sure you want to order this`;
} else {
  alert('Invalid age choice. Please type a number.');
}

// Step 5 - Order confirmation
// Your code goes here

const orderConfirmation = parseInt(
  prompt(`${orderCostMessage}
Enter a number to confirm: 
        1 - Yes
        2 - No`)
);

if (orderConfirmation === 1) {
  alert('Thank you for your order! Your delicious meal will be prepared. See you soon! 👋');
} else if (orderConfirmation === 2) {
  alert('No problem come back and order anytime you want');
} else {
  alert('Invalid choice. Please select 1 for Yes or 2 for No');
}
