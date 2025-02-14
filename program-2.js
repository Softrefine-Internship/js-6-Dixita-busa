// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.

"use strict";
function fetchData(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData("https://restcountries.com/v3.1/name/india")
  .then((data) => console.log(data[0].name.common))
  .catch(console.error);
