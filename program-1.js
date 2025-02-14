// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

"use strict";
function delayedCallback(callback) {
  setTimeout(callback, 2000);
}

function myCallback() {
  console.log("Callback invokes after a delay of 2 second");
}

delayedCallback(myCallback);
