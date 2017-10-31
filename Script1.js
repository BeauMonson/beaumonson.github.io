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
		document.contactForm.lastName.value = b;
		document.contactForm.email.value = c;
		document.contactForm.type.value = d;
		document.contactForm.comment.value = e;
		return false;
	}
	else if (b == "" || b == null)
	{
		alert("Please enter your last name.");
		document.contactForm.firstName.value = a;
		document.contactForm.email.value = c;
		document.contactForm.type.value = d;
		document.contactForm.comment.value = e;
		return false;
	}
	else if (c == "" || c == null)
	{
		alert("Please enter your email.");
		document.contactForm.firstName.value = a;
		document.contactForm.lastName.value = b;
		document.contactForm.type.value = d;
		document.contactForm.comment.value = e;
		return false;
	}
	else if (d == "" || d == null)
	{
		alert("Please enter a comment type.");
		document.contactForm.firstName.value = a;
		document.contactForm.lastName.value = b;
		document.contactForm.email.value = c;
		document.contactForm.comment.value = e;
		return false;
	}
	else if (e == "" || e == null)
	{
		alert("Please enter a comment so that we may best serve you.");
		document.contactForm.firstName.value = a;
		document.contactForm.lastName.value = b;
		document.contactForm.email.value = c;
		document.contactForm.type.value = d;
		return false;
	}
}//end of validateEntries()
