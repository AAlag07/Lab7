function init() {
//add your javascrip between these two lines of code
	function makealert() {
			var input = document.getElementById('entryinput').value;
			var output = document.getElementById('textoutput');
			document.getElementById('textoutput').innerText = input;
			alert('Angelo Alag: ' + input);
	}
	
	var vbutton = document.getElementById('entrybutton');
			vbutton.addEventListener('click', alertvar);
}


window.addEventListener('load', init);
