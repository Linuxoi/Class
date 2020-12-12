$(".sub").click(function(){
		var pay = parseInt($('#pay').val());
		var month = parseInt($('#month').val());
		var per = parseInt($('#per').val());
		per = month * per
		pay = pay + pay*per/100
		$('#text-div').addClass('text-p')
		$('#text-div').append('<p>' + "Ваша зарплатa " + pay +".Зарплата поднялась на "+per+"%" + '</p>')
		$('#text-div').animate({height: '+=60'}, 500);
	});

