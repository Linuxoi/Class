let clickCount = 0
var pay = parseInt($('#pay').val());
var month = parseInt($('#month').val());
var per = parseInt($('#per').val());

$(".sub").click(function(){
		clickCount = clickCount + 1;
		per = month * per
		pay = pay + pay*per/100
		$('#text-div').addClass('text-p')
		$('#text-div').append('<p>' + "Ваша зарплатa " + pay +".Зарплата поднялась на "+per+"%" + '</p>')
		$('#text-div').animate({height: '+=60'}, 500);
		if (clickCount == 9){
			$('#text-div').animate({height: '+=75'}, 500);
		}
		else if (clickCount == 18){
			$('#text-div').animate({height: '+=90'}, 500);
		};
	});

