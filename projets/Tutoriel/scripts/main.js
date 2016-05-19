var image = document.querySelector('img');

image.onclick = function() {
	"use strict";
    var source = image.getAttribute('src');
    if(source === 'images/firefox-icon.png') {
      image.setAttribute ('src','images/lampOn.jpg');
    } else {
      image.setAttribute ('src','images/firefox-icon.png');
    }
}

var myButton = document.querySelector('button');
var myTitle = document.querySelector('h1');

function nameUser()
{
    var myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myTitle.textContent = 'Mozilla est cool, ' + myName;
    
    if(!localStorage.getItem('nom')) 
    {
        nameUser();
    } 
    else 
    {
      var nameRecord = localStorage.getItem('nom');
      myTitle.textContent = 'Mozilla est cool, ' + nameRecord;
    }
   
}

    myButton.onclick = function() 
    {
        nameUser();
    }
