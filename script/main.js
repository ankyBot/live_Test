//basic dom manipulation
/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
let button = document.querySelector('html')
button.onclick = function() {
    alert('can you see me');
}*/

//image switcher code
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc==='img/cat.jpg'){
        myImage.setAttribute ('src','img/cat-2.jpg');
    }
    else{
        myImage.setAttribute ('src','img/cat.jpg');
    }
}

//personalized welcome message code
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

 function setUserName() {
    let myName = prompt('Please Enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'JS is cool, ' + myName;   
}

//initialization code
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'js is cool, ' + storedName;
}

//setUserName fun call by onclick event
myButton.onclick = function() {
  setUserName();
}