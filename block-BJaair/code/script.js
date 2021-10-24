function main() { // wrap everything in 'main' function

let root = document.querySelector('ul');
let button = document.querySelector('.submit');

let allNotices = JSON.parse(localStorage.getItem("notices")) || []; // store in local storage

let createUI = () => {
    root.innerHTML = '';
    allNotices.forEach((array) => {

    let li = document.createElement('li');
    let a = document.createElement('a');
    let h6 = document.createElement('h6');
    let h2 = document.createElement('h2');
    h6.innerText = array.category
    h2.innerText = array.title;
    a.append(h6, h2);
    li.append(a);
    root.append(li);
    });
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    let empty = document.querySelector(".empty");
    empty.style.display = "none"; / // 'noticeboard is empty' message
    let title = document.querySelector('.title');
    let category = document.querySelector('select');
    if (title.value.trim()){ // this is to make sure that 'title' field on the form isn't empty when 'submit' button is pushed
        allNotices.push({category: category.value, title: title.value});
        localStorage.setItem("notices", JSON.stringify(allNotices));
        createUI();
        title.value = "";
    } else {
        empty.style.display = "block"; // keeps the 'noticeboard is empty' message even if submit an empty form
    }
});
};
main();
