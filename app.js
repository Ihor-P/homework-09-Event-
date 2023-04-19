// Використовуючи шаблон https://codepen.io/jurj-shewchuk/pen/PowbPEw (підключити bootstrap)
// реалізувати динамічне додавання/видалення елементів форми
// - при кліку на add створюється ще одне поле під останнім
// - при кліку на remove видаляється поточне поле

function deleteHtml() {
    let inputGroup = document.querySelector(".input-group");
    inputGroup.remove();
}
deleteHtml();

let blockInputs = document.querySelector(".block-inputs");
blockInputs.classList = "block-inputs";

function addLine() {
    let inputGroup = document.createElement("div");
    inputGroup.classList = "input-group mb-3";
    blockInputs.appendChild(inputGroup);

    let input = document.createElement("input");
    input.type = "text";
    input.classList = "form-control";
    input.placeholder = "Info";

    inputGroup.appendChild(input);

    let btnRemoveDiv = document.createElement("div");
    btnRemoveDiv.classList = "input-group-append";
    inputGroup.appendChild(btnRemoveDiv);

    let remove = document.createElement("button");
    remove.classList = "btn btn-outline-secondary";
    remove.type = "button";
    remove.innerHTML = "Remove";
    btnRemoveDiv.appendChild(remove);

    function removeInputGroup() {
        inputGroup.remove();
    }

    remove.addEventListener("click", removeInputGroup);
}
addLine();

let add = document.querySelector(".btn-light");

add.addEventListener("click", addLine);
