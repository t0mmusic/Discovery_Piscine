function addItem() {
    let inputItem = prompt("Please enter a todo item.", "");
    
    if (inputItem == null) {
        console.log("Hooray!");
    }
    else
    {
        var newItem = document.createElement("li");
        newItem.classList.add("task");
        newItem.addEventListener("click", removeElem);
        var newContent = document.createTextNode(inputItem);
        newItem.appendChild(newContent);
        var currDiv = document.getElementById("todo");
        currDiv.prepend(newItem);
        console.log(inputItem);

    }

}

function removeElem() {
    let isConform = confirm("Remove this from the list?");
    if (isConform)
        this.remove();
}