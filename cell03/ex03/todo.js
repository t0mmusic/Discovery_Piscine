
var itemArray = [];
loadCookie();

function loadCookie() {
    var arr = JSON.parse(localStorage.getItem("items"));
    for (var i = 0; i < arr.length; i++)
    {
        addToList(arr[i]);
    }
}

function addToArray (inputItem) {
    itemArray.push(inputItem);
    localStorage.setItem("items", JSON.stringify(itemArray));
}

function addToList(inputItem) {
    var newItem = document.createElement("li");
    newItem.classList.add("task");
    newItem.addEventListener("click", removeElem);
    var newContent = document.createTextNode(inputItem);
    newItem.appendChild(newContent);
    var currDiv = document.getElementById("ft_list");
    currDiv.prepend(newItem);
    addToArray(inputItem);
}


function addItem() {

    let inputItem = prompt("Please enter a todo item.", "");
    
    if (!inputItem == "" || inputItem) {
        addToList(inputItem);
    }
}

function removeElem() {
    let isConform = confirm("Remove this from the list?");
    if (isConform)
    {
        this.remove();
        var list = document.getElementsByTagName("li");
        itemArray.length = 0;
        for (var i = 0; i < list.length; i++)
        {
            itemArray.unshift(list[i].textContent);
        }
        localStorage.setItem("items", JSON.stringify(itemArray));
    }
}