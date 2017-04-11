/**
 * Created by wattuns64 on 4/11/17.
 */
(function() {
    var textInput = document.getElementById('text-input'),  // Input where users will enter text
        addBtn = document.getElementById('add'),            // Button when clicked will add text value
        todo = document.getElementById('todo');             // The list container for all list items

    todo.addEventListener('click', function(e) {    // Add event listener to parent div
        e.target.classList.toggle('line-through');  // this will dish out click commands to all list-items
    })

    addBtn.onclick = function() {                   // When user clicks button, it will add input text value
        var listItem = document.createElement('p'),
            task = document.createTextNode(textInput.value);

        if ( textInput.value === '' ) {
            alert('Please enter in a todo list item');  // If user does not add any text and clicks 'Add'
        }                                               // They will be alerted that text is needed

        listItem.appendChild(task);                     // Appending text value to new p element

        todo.appendChild(listItem);                     // Appending p element to parent div

        textInput.value = '';                           // Resetting text value to nothing
    }


}())