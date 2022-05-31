$("#form2").submit(function(e){
	e.preventDefault();
	var nameValue= document.getElementById('andrew').value;
	var imageValue= document.getElementById('profilePic').value;
	var bioValue= document.getElementById('caption2').value;
	var submitValue= document.getElementById('save').value;

	document.getElementById('nameInfo').innerHTML= document.getElementById('andrew').value;
	document.getElementById('andrewimg').src= document.getElementById('profilePic').value;
	document.getElementById('bio').innerHTML= document.getElementById('caption2').value;

	document.getElementById('andrew').value="";
	document.getElementById('profilePic').value="";
	document.getElementById('caption2').value="";

console.log("i ran")
});
