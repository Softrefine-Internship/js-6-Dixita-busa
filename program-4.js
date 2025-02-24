// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await

"use strict";
const arr = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
  "https://jsonplaceholder.typicode.com/users/5"
];

async function asyncFunctions(arr) {
  for (let i = 0; i < arr.length; i++) {
    try {
      const res = await fetch(arr[i]);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(`Error fetching ${arr[i]}:`, error);
    }
  }
}

asyncFunctions(arr);
