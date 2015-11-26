$(document).ready(function(){

	$('body').prepend('<div id="container"></div>');
	$('body').prepend('<button id="clear">Clear</button>');

	var genDivs = function(size){
		$('#container').append('<table cellspacing="0" cellpadding="0"></table>')
		for (var i = 1; i <= size; i++){
			$('table').append('<tr></tr>');
				for (var j =1; j <= size; j++){
					$('tr').last().append('<td></td>');
					$('td').last().append('<div class="cell"></div>')
				}
		$('table').css({'width': '100%', 'height': '100%', 'border': 'none'});
		$('.cell').css({'width': '100%', 'height': '100%'});
		}
		$('.cell').hover(function(){
			$(this).css({'background-color': '#303030'});
	});
 
	}

	var buttonPress = function(){
		$('table').remove();
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