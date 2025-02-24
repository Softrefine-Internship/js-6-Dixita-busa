// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

"use strict";
const arr = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
  "https://jsonplaceholder.typicode.com/users/5"
];

function getAllData(arr) {
  const promiseArray = arr.map(url => 
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
  );

  return Promise.all(promiseArray)
    .then(data => {
      data.forEach(item => console.log(item.id));
      return data; 
    })
    .catch(error => console.error("Error fetching data:", error));
}

getAllData(arr);
