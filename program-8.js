// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

"use strict";
async function getDataWithTimeout(url, timeout) {
  const controller = new AbortController();
  const { signal } = controller;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, { signal });
    clearTimeout(timeoutId);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out.");
    } else {
      throw error;
    }
  }
}

const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeoutMs = 4000; 
console.log("Timeout milliseconds: " + timeoutMs);

getDataWithTimeout(url, timeoutMs)
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.log("Final error:", error.message);
  });
