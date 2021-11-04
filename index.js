// Your code goes here
//Note: Using the innerText (Links to an external site.) property to modify DOM element content will not work for this lab. Use textContent (Links to an external site.) or innerHTML (Links to an external site.) instead.
window.addEventListener('DOMContentLoaded', () => {
  console.log("DOM is loaded");
  // console.log("BEFORE =", document.getElementById('text').textContent);
  // code didn't like that I assigned document.getElementById('text').textContent to a variable and then reassigned that variable to the new text...
  document.getElementById('text').textContent = "This is really cool!";
  // console.log("AFTER =", document.getElementById('text').textContent);
});