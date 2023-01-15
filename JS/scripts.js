

//create add list item function
function newItem(){

    let list = $('#list');
    list.append('<li>list something</li>');

    let li = $('<li>list something</li>');
    list.append(li);

    let inputValue = $('#input').val();
    li.append(inputValue);


}