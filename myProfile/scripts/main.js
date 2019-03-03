var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pic1.jpg') 
      myImage.setAttribute ('src','images/pic3.jpg');
     else if (mySrc === 'images/pic3.jpg')
      myImage.setAttribute ('src','images/pic11.jpg');
      else if (mySrc === 'images/pic11.jpg')
      myImage.setAttribute ('src','images/pic14.jpg');
    else  
    myImage.setAttribute ('src','images/pic1.jpg');
  }

var myButton = document.getElementById('b2');
var myHeading = document.querySelector('h2');

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to my profile, ' + storedName;
  }

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to my profile, ' + myName;
  }
 
  myButton.onclick = function() {
    setUserName();
  }
