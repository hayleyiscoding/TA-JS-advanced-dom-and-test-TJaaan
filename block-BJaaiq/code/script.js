let root = document.querySelector("ul");

let max = 5; // display max 5 quotes to start with - note thT the eventListener will not trigger unless there are enough quotes to fill the height of the window or the individual element. So you may need to increase the font size in CSS of quotes or increase max quotes.
let index = 0; // index of quote you will start with

function addQuotes(){
    for(let i = 0; i < max; i++) {
        let li = document.createElement("li");
        let blockquote = document.createElement("blockquote");
        let cite = document.createElement("cite");
        blockquote.innerText = quotes[index].quoteText; // get from quotes object
        cite.innerText = quotes[index].quoteAuthor; // get from quotes object
        li.append(blockquote, cite);
        root.append(li);
        index++; // need to increment the index
    }
}

root.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    // if (scrollTop + clientHeight >= scrollHeight && index < quotes.length) {
    //     addQuotes();
    // }
    // use the above "if statement" if you want quotes to scroll down whole window. But use alternative code below if you want it to scroll within an element - make sure you add the appropriate CSS on the UL element - you have to fix the width and height and also use 'overflow: auto'
    if(root.scrollTop + root.clientHeight >= root.scrollHeight){
        addQuotes()
    }
});


// To find the property numbers above (e.g. scrollheight), you can put document.documentElement.scrollTop or scrollHeight or clientHeight into console.


window.addEventListener('DOMContentLoaded', () => {
    alert(`The content of the DOM has loaded`);
    addQuotes();
});

// DOMContentLoaded is a "DOM lifecycle event".