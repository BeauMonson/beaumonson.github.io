/*
JavaScript source code
*/

//function to validate entries
function validateEntries() {
	
	//declare the variables
	var a = document.contactForm.firstName.value;
	var b = document.contactForm.lastName.value;
	var c = document.contactForm.email.value;
	var d = document.contactForm.type.value;
	var e = document.contactForm.comment.value;
	

	//validate the entries
	if (a == "" || a == null)
	{
		alert("Please enter your first name.");
		return false;
	}
	else if (b == "" || b == null)
	{
		alert("Please enter your last name.");
		return false;
	}
	else if (c == "" || c == null)
	{
		alert("Please enter your email.");
		return false;
	}
	else if (d == "" || d == null)
	{
		alert("Please enter a comment type.");
		return false;
	}
	else if (e == "" || e == null)
	{
		alert("Please enter a comment so that we may best serve you.");
		return false;
	}
}//end of validateEntries()

#date {
	var d = new Date();
	document.getElementById("date") = d.toDateString();
}
