let slider__list= document.getElementById('slider__list');
let slider__arrow= document.getElementsByClassName('slider__arrow');
let slider__item= [
	{
		name: "Слайд 3"
	}, {
		name: "Слайд 1"
	},{
		name: "Слайд 2"
	}
];

// Создаём элементы
slider__item= slider__item.map((e, i)=>{
	let div = document.createElement('div');
	div.className= "slider__item";
	div.innerHTML= `<div class="slider__box">
										<div class="slider__name"> ${ e.name } </div>
									</div>`;
	return div;
});

let fragment = document.createDocumentFragment();
slider__item.map((e, i)=>{
	fragment.append(slider__item[i]);
});
slider__list.append(fragment);

// Прокрутка слайдов
let intervalID= setInterval(()=>{
	slider__list.classList.remove('show');
	setTimeout(()=>{
		slider__list.classList.add('show');
		slider__list.append(slider__item[0]);
		slider__item.push( slider__item.shift() );
	}, 100);
}, 5000);

// Кнопки
for(let i= 0, l= slider__arrow.length; l > i; i++){
	slider__arrow[i].addEventListener('click', function(e){
		clearInterval(intervalID);
		slider__list.classList.remove('show');
		setTimeout(()=>{
			slider__list.classList.add('show');
			if(e.target.getAttribute('data-id') == 'next'){
				slider__list.prepend( slider__item[slider__item.length - 1] );
				slider__item.unshift( slider__item.pop() );
			} else {
				slider__list.append(slider__item[0]);
				slider__item.push( slider__item.shift() );
			}
		}, 100)
	});
}