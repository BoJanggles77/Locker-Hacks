function toggleView(){
	var x = document.getElementById('snoop');
	if(x.style.display=== 'none'){
		x.style.display = 'block';
	}
	else{
		x.style.display = 'none';
	}
}

function reappearRent(){
	var x = document.getElementById("option1");
	x.style.display = "inline";
}

function disappearRent(){
	var x = document.getElementById("option1");
	x.style.display = "none";
	
}

function reappearCheckout(){
	var x = document.getElementById("option2");
	x.style.display = "inline";
}

function disappearCheckOut(){
	var x = document.getElementById("option2");
	x.style.display = "none";
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
	reappearRent();
	reappearCheckout();
	disappearTable();
});

var button1 = document.getElementById("option1");
button1.addEventListener("click", function(){
	disappearRent();
	disappearCheckOut();
	appearTable();
});

var button2 = document.getElementById("option2");
button2.addEventListener("click", function(){
	disappearRent();
	disappearCheckOut();
	appearTable();
});

function changeColor(e){
    var x = e.srcElement;
    console.log(x);
    if (x.id !== 'locker') {
    	if (x.style.backgroundColor === 'red') {
	    	x.style.backgroundColor = 'green';
	    } else {
	    	x.style.backgroundColor = 'red';
	    }
    }
}

var locker = document.getElementById("locker");
locker.addEventListener("click",changeColor);
