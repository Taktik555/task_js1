var header_btn = document.getElementsByClassName('header_btn');
var popup_engineer = document.getElementsByClassName('popup_engineer');
var popup_close = document.getElementsByClassName('popup_close');
header_btn[0].addEventListener('click', popup_engineer_btn);

for (var i=0; i<popup_close.length; i++){
	popup_close[i].addEventListener('click', function(){popup_close_btn(this.className)});
}
function popup_engineer_btn() {
	popup_engineer[0].style.display = 'flex';
	popup_engineer[0].addEventListener('click', function(){popup_close_btn(this.className)});
}

function popup_close_btn(popup_name) {
	var target = event.target;
	var close_but = null;
	if(target.closest('button')){
		close_but = target.closest('button').className;
	}
	if ((target.className == popup_name) || (close_but == 'popup_close')){
		popup_engineer[0].style.display = 'none';
		popup[0].style.display = 'none';
	}
}


var popup = document.getElementsByClassName('popup');
var phone_link = document.getElementsByClassName('phone_link');
for (var i=0; i<phone_link.length; i++){
	phone_link[i].addEventListener('click', popup_btn);
}
function popup_btn(){
	popup[0].style.display = 'flex';
	popup[0].addEventListener('click', function(){popup_close_btn(this.className)});
}