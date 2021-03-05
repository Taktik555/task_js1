window.onload = function() {
	const header_btn = document.querySelector('.header_btn');
	const phone_link = document.getElementsByClassName('phone_link');
	const popup_engineer = document.querySelector('.popup_engineer');
	const popup = document.querySelector('.popup');
	const popup_close = document.querySelector('.popup_close');


	popup_engineer.addEventListener('click', function(){hide_form(this, popup_close)});
	popup.addEventListener('click', function(){hide_form(this, popup_close)});


	header_btn.addEventListener('click', function(){
		popup_engineer.style.display = 'block';
	});
	
	for (let i = 0; i < phone_link.length; i++) {
		phone_link[i].addEventListener('click', function() {
			popup.style.display = 'block';
		});
	}
};

function hide_form(area, popup_close) {
	let target = event.target;
	let target_hide = null;
	if (target.closest('button')){
		target_hide = target.closest('button').className;
	}
	if ((target.className == area.className) || (target_hide == popup_close.className)) {
		area.style.display = 'none';
	}
}