
//create add list item function
function newItem() {
    //select html/node ID and assign to variable
    let list = $('#list');

    //create li variable and have it be an <li> element, append to list variable
    let li = $('<li></li>');
    list.append(li); 

    //input variable -> value of input id/form -> append to li var
    let inputValue = $('#input').val();
    li.append(inputValue);
    
      
    //variable for click event strike-thru
    let crossOut = li.on('dblclick', function() {
    li.toggleClass('strike');
});

//add X button to li elements
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

//add delete/remove functionality to X button
    crossOutButton.on('click', removeItem); 

    function removeItem() {
        li.addClass('delete');
    }
}

$('ol').sortable();
