'use strict';

function DomElement (selector, height, width, bg, fontSize, inputText) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.inputText = inputText;
}

DomElement.prototype.createElement = function() {
    let newDiv = document.createElement("div");
    if (this.selector.substr(0, 1) === '.') {
        newDiv.className = this.selector.substr(1);
        newDiv.style.height = this.height + "px";
        newDiv.style.width = this.width + "px";
        newDiv.style.background = this.bg;
        newDiv.style.fontSize = this.fontSize + "px";
        newDiv.innerHTML = this.inputText;
        document.body.appendChild(newDiv);
    } else if (this.selector.substr(0, 1) === '#') {
        newDiv.id = this.selector.substr(1);
        newDiv.style.height = this.height + "px";
        newDiv.style.width = this.width + "px";
        newDiv.style.background = this.bg;
        newDiv.style.fontSize = this.fontSize + "px";
        newDiv.innerHTML = this.inputText;
        document.body.appendChild(newDiv);
    }
};

const elemFirst = new DomElement('#element' , '50' , '400', 'green', '20', 'Привет, я Глаша');
const elemSecond = new DomElement('.element' , '100' , '500', 'red', '40', 'Привет, я Миша');

elemFirst.createElement();
elemSecond.createElement();