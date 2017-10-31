/*
JavaScript source code
*/

//function to validate entries
function validateEntries() {
	
	//declare the variables
	var first = document.contactForm.firstname.value;
	var last = document.contactForm.lastname.value;
	var email = document.contactForm.email.value;
	var type = document.contactForm.type.value;
	var comment = document.contactForm.comment.value;

	//validate the entries
	if (first == "" || first == null)
	{
		alert("Please enter your first name.");
		firstname.Focus();
		return false;
	}
	else if (last == "" || last == null)
	{
		alert("Please enter your last name.");
		lastname.Focus();
		return false;
	}
	else if (email == "" || email == null)
	{
		alert("Please enter your email.");
		email.Focus();
		return false;
	}
	else if (type == "" || type == null)
	{
		alert("Please enter a comment type.");
		type.Focus();
		return false;
	}
	else if (comment == "" || comment == null)
	{
		alert("Please enter a comment so that we may best serve you.");
		comment.Focus();
		return false;
	}
}//end of validateEntries()

function clearEntries() {
	document.getElementById(contactForm).reset();
}//end of clearEntries()
