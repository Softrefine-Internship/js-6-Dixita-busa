// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.

"use strict";
async function fetchWithRetry(url, retries = 3, delay = 1000) {
  for (let i = 1; i <= retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
      return await response.json(); 
    } catch (error) {
      console.warn(`Attempt ${i} failed: ${error.message}`);
      if (i < retries) await new Promise(res => setTimeout(res, delay)); 
    }
  }
  throw new Error(`All ${retries} attempts failed.`);
}

fetchWithRetry("https://jsonplaceholder.typicode.com/users/1", 3, 2000)
  .then(data => console.log("Data received:", data))
  .catch(err => console.error("Final error:", err.message));

