$(document).ready(function(){ //Когда док-т готов
	$('.next').on('click', function(){ //По клику по кнопке "вперед" переключаемся на сл. изображение		
		var currentImg = $('.active');	//Получаем текущее изобр-е	
		var nextImg = currentImg.next(); //Получаем следующее изобр-е	
		var nextName = $('.active').next().attr('alt'); //Получаем атрибут alt следующего изобр-е
		var nextLink= $('.active').next().attr('name'); //Получаем атрибут name следующего изобр-е

		if(nextImg.length){  //Проверяем сущ. ли следующее изображение (его длина>0)
			//Удаляем у текущего изображения класс active и убираем его под другие элементы
			currentImg.removeClass('active').css('z-index: -10'); 
			//Абсолютно наоборот поступаем со сл. изображением
			nextImg.addClass('active').css('z-index', 10) 
			//Изменяем ссылку на якорь
			$('#carLink').attr('href', 'catalog.html#' + nextLink);
			//Изменяем имя 
			$('#carName').text(nextName);

		}
	});

	//Все аналогично кнопке "вперед", только назад.
	$('.prev').on('click', function(){ //По клику переключаемся на пред. изображение
		var currentImg = $('.active');
		var prevImg = currentImg.prev();
		var prevName = $('.active').prev().attr('alt');
		var prevLink= $('.active').prev().attr('name');

		if(prevImg.length){  
			currentImg.removeClass('active').css('z-index: -10'); 
			prevImg.addClass('active').css('z-index', 10)
			$('#carLink').attr('href', 'catalog.html#' + prevLink);
			$('#carName').text(prevName);			
		}
	});
});
