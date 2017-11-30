/*
JavaScript source code
*/

function myMove(light, light2) {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var ran = Math.floor(Math.random()*11);
  var id = setInterval(frame, ran);
  function frame() {
    if (pos == 910) {
      clearInterval(id);
	  clearInterval(id2);

	  document.getElementById("instructions").innerHTML = "THE BLUE CAR WINS!! Click the green light to race again.";
    } else {
      pos++; 
      elem.style.left = pos + 'px'; 
    }
  }
  
  var ran2 = Math.floor(Math.random()*11);

  while (ran == ran2){
  	  ran2 = Math.floor(math.random()*11);
  }

  var elem2 = document.getElementById("animate2");
  var pos2 = 0;
  var id2 = setInterval(frame2, ran2);
  function frame2() {
  	  if (pos2 == 910) {
	  	clearInterval(id2);
		clearInterval(id);

		document.getElementById("instructions").innerHTML = "THE GREEN CAR WINS!! Click the green light to race again.";
	  } else {
	  	pos2++;
		elem2.style.left = pos2 + 'px';
	  }
  }

  document.getElementById(light).style.display = 'none';
  document.getElementById(light2).style.display = 'block';
}

function Reset(light, light2) 
{
		document.getElementById(light).style.display = 'block';
		document.getElementById(light2).style.display = 'none';

		document.getElementById("animate").style.left = 0;
		document.getElementById("animate2").style.left = 0;
}