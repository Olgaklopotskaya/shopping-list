const sendInput = document.querySelector("input");
// нашли инпут/ именно инпут/ не див с инпутом
const containerGroceries = document.querySelector(".items");
//сюда будем вставлять наш список покупок

sendInput.addEventListener("keydown", function(event) {
    //обработчик нажатия кнопки

    if (event.key == 'Enter') {
        //ксли в инпуте нажали Enter
        const groceriesText = sendInput.value;
        // берем текст из инпута  
        const newGroceries = document.createElement("div");
        //создаем новую строчку 
        newGroceries.textContent = groceriesText;
        //текстовое содержимое из инпута

        newGroceries.addEventListener("click", function() {
            //обработчик клик
            newGroceries.classList.toggle("done");

        })
        sendInput.value = " ";
        //пустая строка
        if (groceriesText != " ") {
            containerGroceries.append(newGroceries);
        }
        // вставляем нашу строчку,если это не пустая строка
    }

})

//тут обработчик клик по строчке 
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */