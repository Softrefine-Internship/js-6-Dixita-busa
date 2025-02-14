//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

"use strict";
const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
  "https://jsonplaceholder.typicode.com/users/5"
];

for (let i = 0; i < urls.length; i++) {
  fetch(urls[i]).then((res) => {
    res.json().then((data) => {
      console.log(data);
    });
  });
}
