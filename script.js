const sendInput = document.querySelector(".input-wrapper");


sendInput.addEventListener("keydown", function(event) {
    const GroceriesText = sendInput.value;

    const newGroceries = document.createElement("div");
    newGroceries.classList.add("new");
    newGroceries.textContent = GroceriesText;


    const groceries = document.createElement("div");
    sendInput.before(groceries);


    if (event.key == 'Enter') {
        groceries.prepend(newGroceries);
    }
    sendInput.value = " ";
})

const newGroceries = document.querySelectorAll('div');

for (let div of newGroceries) {
    div.addEventListener('click', function() {
        div.classList.toggle('done');

    })
}




/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */