const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.top-header-mobile');

const sidebarToggleBtn = document.querySelector('.menu-icon-wrapper');


sidebarToggleBtn.onclick = function () {
  menuIcon.classList.toggle('menu-icon-active');
  sidebar.classList.toggle('top-header-mobile-active');
}




const applyCall = document.querySelector('.apply-call');
const callBlock = document.querySelector('.call__block');

applyCall.onclick = function() {
  applyCall.classList.toggle('apply-call-active')
  callBlock.classList.toggle('call__block-active')
}

const subListM = document.querySelector('.sub-list-mobile');
const mainListM = document.querySelector('.main-list-mobile');

mainListM.onclick = function() {
  mainListM.classList.toggle('main-list-mobile-active');
  subListM.classList.toggle('sub-list-mobile-active');
}




$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});