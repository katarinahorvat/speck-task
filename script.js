let addButton = document.getElementById('btn');
let outputContainer = document.getElementById('outputContainer');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', function() {
    var output = document.createElement('p');
    output.classList.add('grid-item');
    output.innerText = inputField.value;
    outputContainer.appendChild(output);
    inputField.value = "";
})

function removeFunction() {
    const list = document.getElementById("outputContainer");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
  }

