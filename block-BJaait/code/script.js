// wrap all code in 'main' function so it cannot be edited by users in console

function main() {

    // Select elements
let form = document.querySelector("form");
let input = document.querySelector("input");
let root = document.querySelector("ul");
let items = document.querySelectorAll("li");

// To Store
let list = JSON.parse(localStorage.getItem("list-items")) || [];

// Error Message
function errorMessage() {
  let error = document.querySelector("#error");
  if (input.value === "") {
    error.innerHTML = "Error: Please enter an item";
    error.style.color = "red";``
    return false;
  } else {
    return true;
  }
}

// Creating List UI
let createUI = function () {
  let fragment = new DocumentFragment();
  root.innerHTML = ""; // Won't add previous list item when adding new one
  list.forEach((listItem, index) => {
    let li = document.createElement("li");
    li.innerText = ` ${index + 1} - ${listItem.item}`;
    li.setAttribute("draggable", "true");
    let span = document.createElement("span");
    span.classList.add("delete");
    span.innerText = "X";
    span.style.color = "red";
    span.style.paddingRight = "1rem";
    span.style.cursor = "pointer";
    span.setAttribute("data-id", index); // put ID number on each one so you can DELETE it if needed through Event Listener below
    span.addEventListener("click", (event) => {
        let id = event.target.dataset.id;
       list.splice(id, 1);
       createUI();
      });
    li.append(span);
    fragment.appendChild(li);
    localStorage.setItem("list-items", JSON.stringify(list));
  });
  root.append(fragment);
  //   Drag and Drop Event Listeners
  items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.addEventListener("dragstart", handleDragStart, false);
    item.addEventListener("dragover", handleDragOver, false);
    item.addEventListener("dragenter", handleDragEnter, false);
    item.addEventListener("dragleave", handleDragLeave, false);
    item.addEventListener("drop", handleDrop, false);
    item.addEventListener("dragend", handleDragEnd, false);
  });
};

// Creating list on submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value !== "") {
    let input = document.querySelector("input");
    list.push({item: input.value});
    createUI();
    input.value = "";
  } else {
    errorMessage();
  }
});

// Clear error message when you start typing again
input.addEventListener("keyup", () => {
  error.style.display = "none";
});

// Drag and Drop Events
function handleDragStart(e) {
  this.style.opacity = "0.4";
  dragSrcEl = this;
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/html", this.innerHTML);
}

function handleDragEnd(e) {
  this.style.opacity = "1";
  items.forEach(function (item) {
    item.classList.remove("over");
  });
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  return false;
}

function handleDragEnter(e) {
  this.classList.add("over");
}

function handleDragLeave(e) {
  this.classList.remove("over");
}

function handleDrop(e) {
  e.stopPropagation();
  if (dragSrcEl !== this) {
    dragSrcEl.innerHTML = this.innerHTML;
    this.innerHTML = e.dataTransfer.getData("text/html");
  }
  return false;
}

// Final call of UI
createUI();
};

main();
