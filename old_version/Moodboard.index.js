$("#form_id").submit(function(e) {
    e.preventDefault();

  // Your Code Here!
  console.log("form submitted")
  var input_value = document.getElementById("link_input").value;
  var x = document.createElement("IMG");
  x.src = input_value;
  document.getElementById("container").appendChild(x);
  link_input = ""
});
