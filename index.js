"use strict";

const nameList = document.getElementById("names-list");
const youngUserList = document.getElementById("young-characters-list");
const functionList = document.getElementById("function-list");
const userUnderAgeList = document.getElementById("age-filter-list");
const errorHandlingList = document.getElementById("error-handling-list");
const errorMessage = document.getElementById("error-messages");
const brokenArrayList = document.getElementById("broken-array-list");
const brokenArrayErrors = document.getElementById("broken-array-errors");


// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];


displayNames();
displayYoungUsers();
reusableFunctionToDisplayNames(users);
// displayNamesUnderAge(users, 30);

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"

function displayNames() {
  console.log("-----------------------------");
  console.log("Part 1")
  let nameItem;
  
  users.forEach(x => {

    nameItem = document.createElement("li");

    nameItem.classList.add("output");

    console.log(x.name);

    nameItem.textContent = x.name;  
    nameList.appendChild(nameItem);
  });
}


// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"

function displayYoungUsers() {
  console.log("-----------------------------");
  console.log("Part 2");
  
  let youngUser;

  users.filter(x => x.age < 40).
    forEach(x => {

      console.log(x.name);

      youngUser = document.createElement("li");

      youngUser.classList.add("output");

      youngUser.textContent = x.name + " is age " + x.age;
      youngUserList.appendChild(youngUser);
    });
}

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"

function reusableFunctionToDisplayNames(users) {
  let name;

  users.forEach((x) => {

    name = document.createElement("li");

    name.classList.add("output");

    name.textContent = x.name;
    functionList.appendChild(name);
  });
}

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"

function displayNamesUnderAge(listOfNames,age) {
  let name;

  listOfNames.
    filter(x => x.age < age).
    forEach((x) => {

    usernameNullException(x, errorMessage, errorHandlingList);

    if(x.name) {
      name = document.createElement("li");

      name.classList.add("output");

      name.textContent = x.name + " is age " + x.age;
      userUnderAgeList.appendChild(name);
    }
  });
}

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"

function usernameNullException(user, errorMessageElement, handledEl) {
  if(!user.name) {
    const errorMsg = `User id: ${user.id}, Has a null "name" field`;
    console.log(errorMsg);
    
    const errorEl = document.createElement("p");

    errorEl.classList.add("error-message");

    errorEl.textContent = errorMsg;

    errorMessageElement.appendChild(errorEl);
  } else {

    const userItem = document.createElement("li");

    userItem.classList.add("success");

    userItem.textContent = user.name;

    handledEl.appendChild(userItem);
  }
}

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

const brokenUsers = [
  { id: 1, age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

displayNamesUnderAge(brokenUsers, 30);