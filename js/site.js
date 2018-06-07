"use strict";
TB.App.documentReady(function(){
	var cYear=TB.EL('#copyright_year'),
		date=new Date(),year = date.getFullYear(),
		mobileIcon=TB.EL('#mobile_nav_icon'),
		mobileNav=TB.EL('#mobile_nav'),
		pageContent=TB.EL('#page_content');
	cYear.val(year);
	window.onload = function(){
		setTimeout(function(){
			pageContent.addClass("load");
		},250);
	}
	mobileIcon.on('click',function(){
		if(mobileIcon.hasClass('open')){
			mobileIcon.removeClass('open');
			mobileNav.style('maxHeight','0');
		}else{
			mobileIcon.addClass('open');
			mobileNav.style('maxHeight','600px');
		}
	});
});