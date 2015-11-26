$(document).ready(function(){

	$('body').prepend('<div id="container"></div>')
	$('#container').prepend('<button>Click me!</button>')

	var genDivs = function(size){
		for (var i = 1; i < size; i++){
			$('#container').append('<div class="row"></div>');
				for (var j =1; j < size; j++){
					$('.row').last().append('<div class="cell"></div>')
				}
			
		} 
	}
	


	genDivs(16)

	$('.cell').css({'width': '50px', 'height': '50px', 'background-color': 'blue'})
	$('.row').css({'width': '50px', 'display': 'block', 'float': 'left'})
}); 