/*
JavaScript source code
*/

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var ran = Math.floor(Math.random()*11);
  var id = setInterval(frame, ran);
  function frame() {
    if (pos == 450) {
      clearInterval(id);
	  
    } else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }

  var elem2 = document.getElementById("animate2");
  var pos2 = 0;
  var ran2 = Math.floor(Math.random()*11);
  var id2 = setInterval(frame2, ran2);
  function frame2() {
  	  if (pos2 == 450) {
	  	  clearInterval(id2);
	  } else {
	  	  pos2++;
		  elem2.style.left = pos2 + 'px';
	  }
  }
}