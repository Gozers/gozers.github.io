var button1 = document.querySelector("button[name='button1']");
var button2 = document.querySelector("button[name='button2']");
var button3 = document.querySelector("button[name='button3']");

var paragraph1 = document.querySelector("p[name='p1']");
paragraph1.style.whiteSpace = "pre";
var arr = ['','',''];

function setParagraph() {
  var text = "";
  var i;
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
	  text += arr[i] + "\n";
	}
  }
  paragraph1.textContent = text;
}

button1.onclick = function() {
  arr[0]= 'Button 1.';
  setParagraph();
}

button2.onclick = function() {
  arr[1]= 'Button 2.';
  setParagraph();
}

button3.onclick = function() {
  arr[2]= 'Button 3.';
  setParagraph();
}
