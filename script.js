let clickCount = 0


$(".sub").click(function(){
		clickCount = clickCount + 1;
		var pay = parseInt($('#pay').val());
		var month = parseInt($('#month').val());
		var per = parseInt($('#per').val());
		per = month * per
		pay = pay + pay*per/100
		$('#text-div').addClass('text-p')
		$('#text-div').append('<p>' + "Ваша зарплатa " + pay +".Зарплата поднялась на "+per+"%" + '</p>')
		$('#text-div').animate({height: '+=75'}, 500);
		if (clickCount == 5){
			$('#text-div').animate({height: '+=85'}, 500);
		}
		else if (clickCount == 9){
			$('#text-div').animate({height: '+=95'}, 500);
		}
		else if (clickCount == 13){
			$('#text-div').animate({height: '+=105'}, 500);
		}		
		else if (clickCount == 18){
			$('#text-div').animate({height: '+=110'}, 500);
		}				
		else if ($(window).width() < 500 && clickCount == 4){
			$('#text-div').animate({height: '+=90'}, 500);
		};
	});

