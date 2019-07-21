$("#form_1").submit(function(e) {
  e.preventDefault();

  var newD = document.createElement("div");
  var newI = document.createElement("img");
  
  var input_value = document.getElementById("link_input").value;
  var captionThing = document.getElementById("caption").value;
  
  newD.className = ("newD");

  newI.src = input_value;
  newI.width = "100px";
  newI.height= "100px";

  link_input.value="";
  caption.value="";
 
  secondfunction(newD, newI, input_value, captionThing);
});

  function secondfunction(newD, newI, input_value, captionThing) {
    
    newD.classList.add("post");
    
    var theX = document.createElement("img");
    theX.src = "theX.png"
    theX.className = "randomname1"
    newD.appendChild(theX);

    
    
    
    
    var x = document.createElement("img");
    x.src = input_value;
    newD.appendChild(x);

    var omgg = document.createElement("p");
    omgg.innerHTML = captionThing; 

  
    newD.appendChild(omgg);

    document.getElementById("container").appendChild(newD);
    var remove= document.createElement('div');
    remove.innerHTML='x';
    remove.classList.add('takeaway');
    remove.style.right='5px';
    remove.style.top='5px';

      //remove the pic dude
  
    newD.addEventListener('click',function(){
    var newD_id= String(Math.random())
    newD.id= newD_id;
    document.getElementById(newD_id).remove()
    
    });
 

    } 