function init(){
//add your javascrip between these two lines of code
	function alertvar(){
			var input = document.getElementById('entryinput').value;
			var output = document.getElementById('textoutput');
			output.innerHTML = input;
			alert('Angelo Alag: ' + input);
	}
	
	var vbutton = document.getElementById('entrybutton');
			button.addEventListener('click', alertvar);
}


window.addEventListener('load', init);
