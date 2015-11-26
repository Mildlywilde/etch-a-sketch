$(document).ready(function(){

	$('body').prepend('<div id="container"></div>');
	$('body').prepend('<button id="clear">Clear</button>');

	var genDivs = function(size){
		for (var i = 1; i <= size; i++){
			$('#container').append('<div class="row"></div>');
				for (var j =1; j <= size; j++){
					$('.row').last().append('<div class="cell"></div>');
				}
		$('.cell').css({'width': '50px', 'height': '50px'});
		$('.row').css({'width': '50px', 'display': 'block', 'float': 'left'});	
		}
		$('.cell').hover(function(){
			$(this).css({'background-color': '#303030'});
	});
 
	}

	var buttonPress = function(){
		$('.row').remove();
		var pixels = 0 + prompt('how big we talkin?');
		genDivs(pixels);
	}

	genDivs(16)

	$('#clear').on('click', function(){
		buttonPress()
	})

	
	
	$('#container').css({'display': 'block', 
						'border': '3px solid black', 
						'margin-left': 'auto',
						'margin-right': 'auto',
						'width': '800px',
						'height': '800px'});
	$('button').css({'display': 'block',
						'margin-left': 'auto',
						'margin-right': 'auto',
						'margin-bottom': '50px'})

}); 