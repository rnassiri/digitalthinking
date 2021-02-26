/*
CIS166AA - JavaScript
      Chapter 5
      Chapter case project

      Displaying properties of the navigator and screen object.
      
      Author: Ramiss Nassiri
      Date:   11/06/2018

	  Filename: security.js
*/

// Submit button gathers all the information needed for the query
function submitButton() {    
    // Gathers all the information needed for the navigator object.
    document.getElementById("webbrowser").innerText = "" + navigator.appName;
    document.getElementById("version").innerText = "" + navigator.appVersion;
    document.getElementById("network").innerText = "" + navigator.onLine;
    document.getElementById("operatingsystem").innerText = "" + navigator.platform;
    document.getElementById("useragent").innerText = "" + navigator.userAgent;

    // Gathers all the information needed for the screen object.
    document.getElementById("availableheight").innerText = "" + screen.availHeight;
    document.getElementById("availablewidth").innerText = "" + screen.availWidth;
    document.getElementById("colordepth").innerText = "" + screen.colorDepth;
    document.getElementById("height").innerText = "" + screen.height;    
    document.getElementById("pixeldepth").innerText = "" + screen.pixelDepth;
    document.getElementById("width").innerText = "" + screen.width;    
}

// Add event listeners to the button to show properties.
function createEventListeners() {
    var buttonClick = document.getElementById("button");
    if (buttonClick.addEventListener) {
        buttonClick.addEventListener("click", submitButton, false);
    } else if (buttonClick.attachEvent) {
        buttonClick.attachEvent("onclick", submitButton);
    }
}

// Create event listeners needed for when page is done loading.
if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}