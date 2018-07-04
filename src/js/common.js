$(document).ready(function(){
	$('.header_wrap .menu_btn').click(function(e){
		if($(this).hasClass('close') == true){
			$('.main_menu_wrap').fadeOut(50);
			$('.header_wrap').stop(true,false).animate({ 'width':'90px' }, 600, 'easeOutQuint');
			$('.header_wrap').removeClass('open').css('background','none');

			$(this).removeClass('close');
		} else {
			$('.main_menu_wrap').fadeIn();
			$('.header_wrap').addClass('open').css('background','#fff');
			$('.header_wrap').stop(true,false).animate({ 'width':'100%' }, 600, 'easeOutQuint');

			$(this).addClass('close');
		}
		e.preventDefault();
	});

	$('.m_header_wrap .menu_btn').click(function(e){
		if($(this).hasClass('close') == true){
			$('.m_header_wrap .main_menu_wrap').fadeOut(100);
			$('.m_header_wrap').removeClass('open');

			$(this).removeClass('close');
		} else {
			$('.m_header_wrap').addClass('open');
			$('.m_header_wrap .main_menu_wrap').fadeIn();
			$('.m_header_wrap .menu-title').next('ul').not('open').hide();
			$('.m_header_wrap .menu-title').next('ul.open').show();

			$(this).addClass('close');
		}
		e.preventDefault();
	});

	$('.m_header_wrap .menu-title').click(function(){
		$(this).next('ul').slideToggle();
		$('.m_header_wrap .menu-title').not(this).next('ul').slideUp();
	});






});