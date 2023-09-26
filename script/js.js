var enterButton = document.getElementById("enter");
var Input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
    return Input.value.length;
}

function listlength() {
    return item.length;
}
function createlistElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(Input.value));
    ul.appendChild(li);
    Input.value = " ";

    function crossOut() {
        li.classlist.toggle("done");
    }

    li.addEventListener("click", crossOut);

    var dbtn = document.createElement("button");
    dbtn.appendChild(document.createTextNode("X"));
    li.appendChild(dbtn);


    function deleteListItem() {
        li.classList.add("delete");
    }
    dbtn.addEventListener("click", deleteListItem);






}

function addlistAfterclick() {
    if (inputLength() > 0) {
        createlistElement()
    }
}

enterButton.addEventListener("click", addlistAfterclick)