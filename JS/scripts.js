

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
    
      
    
   let crossOut = li.on('dblclick', function() {
    li.toggleClass('strike');
});
let crossOutButton = $(crossOutButton); 
li.append(crossOutButton);

}



$('ol').sortable();
