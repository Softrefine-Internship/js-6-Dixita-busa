// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.

"use strict";
const timeout = (sec) =>
  new Promise((_, reject) =>
    setTimeout(() => reject(new Error("Request took too long")), sec)
  );

const call = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
  return await res.json();
};

const timeConstrainCall = async (url, waitingTime) =>
  Promise.race([call(url), timeout(waitingTime)]);

const url = "https://jsonplaceholder.typicode.com/posts/1";
const timeoutMs = 4000;

console.log("Timeout milliseconds:", timeoutMs);

(async function () {
  try {
    const res = await timeConstrainCall(url, timeoutMs);
    console.log("Data received:", res);
  } catch (err) {
    console.error("Final error:", err.message);
  }
})();

