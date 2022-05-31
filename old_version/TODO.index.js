$("#form1").submit(function(e) {
    // Your code here!
    e.preventDefault();
    var todo_input = document.getElementById("todo-input");
    var todo_text = todo_input.value;
    addNewItem(todo_text)
    todo_input.value="";
});
function addNewItem(todo_text){
    // Your code here!
    var todo_card = document.createElement("div");
    todo_card.classList.add("todo_card");
    var todo_text_elem = document.createElement("p");
    todo_text_elem.innerHTML = todo_text;
    todo_card.appendChild(todo_text_elem);
    document.getElementById("container").appendChild(todo_card);
    todo_card.addEventListener("click", function(){
        // Your code here!
        var todo_card_id = String(Math.random())
        todo_card.id = todo_card_id
        document.getElementById(todo_card_id).remove()
      });



}


