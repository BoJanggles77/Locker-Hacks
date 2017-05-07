if (!localStorage.gridData) {
	var data = {};
	for (var i = 0; i < 20; i++) {
		var dataEl = {
			name: '',
			location: "Fremont Locker #" + i.toString(),
			available: true
		};
		data[i] = JSON.stringify(dataEl);
		localStorage.setItem("gridData", JSON.stringify(data));
	}
}

for (var i = 0; i < 20; i++) {
	var element = document.getElementById(i.toString());
	var data = JSON.parse(localStorage.getItem("gridData"));
	var dataEl = JSON.parse(data[i]);
	if (!dataEl.available) {
		element.style.backgroundColor = 'red';
	} else {
		element.style.backgroundColor = 'green';
	}
}

function toggleView(){
	var x = document.getElementById('snoop');
	if(x.style.display=== 'none'){
		x.style.display = 'block';
	}
	else{
		x.style.display = 'none';
	}
}

function changeBackground(color) {
   document.body.style.background = color;
}

function reappearRent(){
	var x = document.getElementById("option1");
	x.style.display = "inline";
}

function reappearCheckout(){
	var x = document.getElementById("option2");
	x.style.display = "inline";
}

function appearTable(){
	var x = document.getElementById("locker");
	x.style.display = "table";
}

function disappearTable(){
	var x = document.getElementById("locker");
	x.style.display = "none";
}

var button = document.getElementById('click');
button.addEventListener("click", function() {
	toggleView();
	disappearTable();
	changeBackground("#C3C2CA");
	bool = true;
	
});

var button1 = document.getElementById("option1");
button1.addEventListener("click", function(){
	appearTable();
	changeBackground("#93F096");
	bool = false;
});

var button2 = document.getElementById("option2");
button2.addEventListener("click", function(){
	appearTable();
	changeBackground("#FF7070");
	bool = true;
});

function changeColor(e){
	var name = document.getElementById('textbox').value;
    var x = e.srcElement;
    console.log(x);
    if (x.id !== 'locker') {
		var data = JSON.parse(localStorage.getItem("gridData"));
		var dataEl = JSON.parse(data[parseInt(x.id)]);
    	var nameDisplay = document.querySelector("[id='" + x.id + "'] span");
    	console.log(dataEl.available);
    	console.log(x.style.backgroundColor);
    	if (bool === true &&  x.style.backgroundColor === 'red' && name === dataEl.name) {
	    	x.style.backgroundColor = 'green';
	    	dataEl.available = true;
	    	dataEl.name = '';
	    	nameDisplay.innerHTML = '';
	    } else if (bool === false &&  x.style.backgroundColor == 'green') {
	    	x.style.backgroundColor = 'red';
	    	dataEl.available = false;
	    	dataEl.name = name;
	    	nameDisplay.innerHTML = name;
	    }
	    data[parseInt(x.id)] = JSON.stringify(dataEl);
	    localStorage.setItem("gridData", JSON.stringify(data));
    }
}

var locker = document.getElementById("locker");
locker.addEventListener("click",changeColor);

var bool = true;
