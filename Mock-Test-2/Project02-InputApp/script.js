let input = document.getElementById("textInput");
let submitButton = document.getElementById("submitButton");
let list = document.getElementById("list");
submitButton.addEventListener("click", function () {
  let text = input.value;
  if (text.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = text;
    list.appendChild(listItem);
    input.value = "";
  }

});
