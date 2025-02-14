// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

const arr = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
    "https://jsonplaceholder.typicode.com/users/4",
    "https://jsonplaceholder.typicode.com/users/5"
  ];
  
  function getAllData(arr) {
    promiseArray = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      promiseArray.push(fetch(arr[i]).then((res) => res.json()));
    }
    Promise.all(promiseArray).then((value) => {
      for (let i = 0; i < value.length; i++) {
          const element = value[i].id;
          console.log(element);       
      }
    });
  }
  
  getAllData(arr);
  