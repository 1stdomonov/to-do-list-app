

//create add list item function
function newItem() {

    let list = $('#list');
    

    let li = $('<li></li>');
    list.append(li);

    let inputValue = $('#input').val();
    li.append(inputValue);

}




