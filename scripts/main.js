/**
 * Created by wattuns64 on 4/11/17.
 */

(function() {
    var txtInput = document.getElementById('text-input'), // Text input variable
        btn = document.getElementById('add'),             // Button variable
        todo = document.getElementById('todo');           // List container

    btn.onclick = function () {                             // When button is clicked
        var txt = document.createTextNode(txtInput.value),  // takes the value of the input field and
            p = document.createElement('p');                // appends it to the list container
                                                            // and then clears the input text value to blank
        p.appendChild(txt);
        todo.appendChild(p);

        txtInput.value = '';

    }

    todo.addEventListener('click', function (a) {        // When list item is clicked, it removes itself
        a.target.remove();
    })
    

}())