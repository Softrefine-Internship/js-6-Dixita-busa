//  Write a JavaScript function that takes an array of URLs and downloads the contents of each URL in parallel using Promises.

"use strict";
const urls = [
  "https://jsonplaceholder.typicode.com/users/1",
  "https://jsonplaceholder.typicode.com/users/2",
  "https://jsonplaceholder.typicode.com/users/3",
  "https://jsonplaceholder.typicode.com/users/4",
  "https://jsonplaceholder.typicode.com/users/5"
];

async function fetchAllUrls(urls) {
  try {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(res => res.json()));
    console.log(data);
  } catch (error) {
    console.error("Error fetching URLs:", error);
  }
}

fetchAllUrls(urls);