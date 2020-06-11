window.onload = () => { //Весь скрипт выполняется после полной загрузки страницы
	const x = 300; //Количество пикселей, после которого кнопка становится видимой
	var btn = document.getElementById("topButton");	
	var prevScrollValue = 0; //Предыдущая величина прокрутки
	var currentScrollValue = 0; //Текущая величина прокрутки
	var IntervalId = 0; //Объявляем ID интервала для дальнейшей работы

	//Добавляем событие прокрутки страницы, при котором будет выполняться функция
	window.addEventListener('scroll', () => {
		currentScrollValue = scrollY;// Переменной присваивается текущее значение прокрутки страницы
		//Когда предыдущее значение прокрутки меньше константы и текущее больше, класс добавляется
		//Кодгда предыдущее значение больше константы и текущее меньше, класс убирается
		if (prevScrollValue < x && currentScrollValue >= x) {
			btn.classList.add('topButtonShowed') //Добавляем класс, содержащий свойства стиля видимости кнопки
		}
		if (prevScrollValue > x && currentScrollValue <= x) {
			btn.classList.remove('topButtonShowed')//Убираем класс
		}
		prevScrollValue = currentScrollValue; //В конце цикла, текущее значение становится предыдущим
		
		//Проверка ниже нужна для отключения прокрутки 
		if (scrollY == 0){
			clearInterval(IntervalId); //Останавливаем setInterval
		}
	}); 

	//Добавляем ожидание клика на кнопку. При нажатии, выполняется функция
	btn.addEventListener('click', () => {
		if (window.scrollY > 0) {
			/*setInterval позволяет выполнить функцию или код, указанный первым аргументом с раз в величину в мс, 
			указанной во втором аргументе. 
						
			С помощью этой конструкции документ скроллится вверх тем быстрее, чем ниже он находится. 
			Но вначале сохраняем ID setinterval, чтобы потом остановить его выполнение, по ID*/
			IntervalId = setInterval(() => scrollBy(0, -100 * scrollY / document.body.clientHeight - 70), 1000/60);	
			/*scrollBy производит прокрутку страницы на определенной к-во пикселей по X (в пером аргументе) 
			и по Y (во втором)*/		
		}
	})
}

/*setinterval(функция, интервал в мс), scrollBy(пикс по X, пикс по Y), scrollY-текущее положение, 
clientHeight - высота всего док-та в пикс.*/