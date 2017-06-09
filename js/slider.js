$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider-1 .slides-1").children(".slide-1"); // Получаем массив всех слайдов
	var width = $(".slider-1 .slides-1").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	i--; // уменьшаем кол-во слайдов на один ( для проверки в будущем )

	$(".slider-1 .slides-1").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	$("body .slider-1 .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * i) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider-1 .slides-1").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
		}
	});


	$("body .slider-1 .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущего слайда
			$(".slider-1 .slides-1").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
		}
	});

});


$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider-2 .slides-2").children(".slide-2"); // Получаем массив всех слайдов
	var width = $(".slider-2 .slides-2").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	i--; // уменьшаем кол-во слайдов на один ( для проверки в будущем )

	$(".slider-2 .slides-2").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	$("body .slider-2 .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * i) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider-2 .slides-2").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
		}
	});


	$("body .slider-2 .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущего слайда
			$(".slider-2 .slides-2").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
		}
	});

});


$(document).ready(function() { // Ждём загрузки страницы
						   
	var slides = $(".slider-3 .slides-3").children(".slide-3"); // Получаем массив всех слайдов
	var width = $(".slider-3 .slides-3").width(); // Получаем ширину видимой области
	var i = slides.length; // Получаем количество слайдов
	var offset = i * width; // Задаем начальное смещение и ширину всех слайдов
	i--; // уменьшаем кол-во слайдов на один ( для проверки в будущем )

	$(".slider-3 .slides-3").css('width',offset); // Задаем блоку со слайдами ширину всех слайдов
	
	offset = 0; // Обнуляем смещение, так как показывается начала 1 слайд
	$("body .slider-3 .next").click(function(){	// Событие клика на кнопку "следующий слайд"
		if (offset < width * i) {	// Проверяем, дошли ли мы до конца
			offset += width; // Увеличиваем смещение до следующего слайда
			$(".slider-3 .slides-3").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к следующему
		}
	});


	$("body .slider-3 .prev").click(function(){	// Событие клика на кнопку "предыдущий слайд"
		if (offset > 0) { // Проверяем, дошли ли мы до конца
			offset -= width; // Уменьшаем смещение до предыдущего слайда
			$(".slider-3 .slides-3").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); // Смещаем блок со слайдами к предыдущему
		}
	});

});