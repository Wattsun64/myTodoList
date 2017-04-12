/**
 * Created by wattuns64 on 4/11/17.
 */

(function() {
    var txtInput = document.getElementById('text-input'),
        btn = document.getElementById('add'),
        todo = document.getElementById('todo');

    btn.onclick = function () {
        var txt = document.createTextNode(txtInput.value),
            p = document.createElement('p');

        p.appendChild(txt);
        todo.appendChild(p);

        txtInput.value = '';

    }

    todo.addEventListener('click', function (a) {
        a.target.remove();
    })



}())