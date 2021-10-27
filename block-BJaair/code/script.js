function main() { // wrap everything in 'main' function

let root = document.querySelector('ul');
let button = document.querySelector('.submit');

let allNotices = JSON.parse(localStorage.getItem("notices")) || []; // store in local storage

// We want to replace the h2/h6 with an input element
function handleEdit(event, info, id, label) {
    let elm = event.target; // h2/h6 element
    let input = document.createElement("input");
    input.value = info;
    input.addEventListener('keyup', (e)=> { // 'e' is event object
        if (e.keyCode === 13) {
        let updatedValue = e.target.value;
        allNotices[id][label] = updatedValue;
        createUI();
        localStorage.setItem("notices", JSON.stringify(allNotices));
        }
    })
    input.addEventListener('blur', (e)=> { // 'e' is event object
        let updatedValue = e.target.value;
        allNotices[id][label] = updatedValue;
        createUI();
        localStorage.setItem("notices", JSON.stringify(allNotices));
    })
    let parent = event.target.parentElement // need access to 'li' as parent in order to replace
    parent.replaceChild(input, elm);

}

let createUI = () => {
    root.innerHTML = '';
    allNotices.forEach((array, index) => {

    let li = document.createElement('li');
    let a = document.createElement('a');
    let h6 = document.createElement('h6');
    let h2 = document.createElement('h2');
    h6.innerText = array.category;
    // h6.setAttribute("contenteditable", "true"); // Can also do this but won't have dbl click
    h6.addEventListener('dblclick', (event)=> handleEdit(event, array.category, index, 'category'));
    h2.innerText = array.title;
    // h2.setAttribute("contenteditable", "true"); // Can also do this but won't have dbl click
    h2.addEventListener('dblclick', (event)=> handleEdit(event, array.title, index, 'title'));
    a.append(h6, h2);
    li.append(a);
    root.append(li);
    });
    let empty = document.querySelector(".empty");
    if(allNotices.length > 0){
        empty.style.display = "none";
    } else {
        empty.style.display = "block";
    }

}

button.addEventListener('click', (event) => {
    let title = document.querySelector('.title');
    let category = document.querySelector('select');
    if (title.value.trim()){ // this is to make sure that 'title' field on the form isn't empty when 'submit' button is pushed
        allNotices.unshift({category: category.value, title: title.value});
        localStorage.setItem("notices", JSON.stringify(allNotices));
        createUI();

        title.value = "";
    }
});

// title.addEventListener('dblclick', function (e) {
//     title.classList.toggle('large');
//   });

createUI() // call it again at the end so that it loads from local storage before executing the rest of the code when the page first loads.
};
main();
