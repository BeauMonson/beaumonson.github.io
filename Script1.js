/*
JavaScript source code
*/

/*function to validate entries using JavaScript; commented out for assignment 8.
	Does not keep other entries in the fields even if only one is misssing.
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
}//end of validateEntries()*/

var myMenu = document.getElementById("myMenu");
var sticky = myMenu.offsetTop;

function scrollFunction() 
{
  if (window.pageYOffset >= sticky) 
  {
    myMenu.classList.add("sticky")
  }
  else 
  {
    myMenu.classList.remove("sticky");
  }
}

function menuFunction() 
{
    var x = document.getElementById("myMenu");
    if (x.className === "menu") 
	{
        x.className += " responsive";
    } 
	else 
	{
        x.className = "menu";
    }
}