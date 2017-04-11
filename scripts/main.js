/**
 * Created by wattuns64 on 4/11/17.
 */
(function() {
    var textInput = document.getElementById('text-input'),
        addBtn = document.getElementById('add'),
        todo = document.getElementById('todo');

    todo.addEventListener('click', function(e) {
        e.target.classList.toggle('line-through');
    })

    addBtn.onclick = function() {
        var listItem = document.createElement('p'),
            task = document.createTextNode(textInput.value);

        if ( textInput.value === '' ) {
            alert('Please enter in a todo list item');
        }

        listItem.appendChild(task);

        todo.appendChild(listItem);

        textInput.value = '';
    }


}())