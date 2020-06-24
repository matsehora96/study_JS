'use strict';

function DomElement (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
}

DomElement.prototype.createElement = function() {
    let newDiv = document.querySelector("body");
    if (this.selector.substr(0, 1) === '.') {
        newDiv.innerHTML = "<div class='element'></div>" ; 
    } else if (this.selector.substr(0, 1) === '#') {
        newDiv.innerHTML = "<div id='element'></div>" ; 
    }
    console.log(newDiv);
};

const appData = new DomElement('#div' , '30' , '30', 'black', '20');
console.log(appData);
appData.createElement();