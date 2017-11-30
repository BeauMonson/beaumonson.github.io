/*
JavaScript source code
*/

function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var ran = Math.floor(Math.random()*11);
  var id = setInterval(frame, ran);
  function frame() {
    if (pos == 900) {
      clearInterval(id);
	  clearInterval(id2);
    } else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
  
  var ran2 = Math.floor(Math.random()*10);

  while (ran == ran2){
  	  ran2 = Math.floor(math.random()*10);
  }

  var elem2 = document.getElementById("animate2");
  var pos2 = 0;
  var id2 = setInterval(frame2, ran2);
  function frame2() {
  	  if (pos2 == 900) {
	  	  clearInterval(id2);
		  clearInterval(id);
	  } else {
	  	  pos2++;
		  elem2.style.left = pos2 + 'px';
	  }
  }

	document.getElementByClassName("light").style.display = none;
	document.getElementByClassName("light2").style.display = inline;
}