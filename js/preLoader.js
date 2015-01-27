
$(function(){

/***********************************************
	
	Function:	Pre Load Images
	Author: 	Adam Lawrence
	Contact: 	adam@adamlawrencedesign.com	
	
*************************************************/

	function preload(imageArray)
	{
		var images = [];
		
		window.onload = function()
		{
			for (var i = 0; i < imageArray.length; i++)
			{
				images[i] = new Image();
				images[i].src = imageArray[i];
			}
		};
	}
	
	var imageArray = [
				'img/1.jpg',
				'img/2.jpg',
				'img/3.jpg',
				'img/4.jpg',
				'img/5.jpg',
				'img/6.jpg',
				'img/7.jpg',
				'img/8.jpg',
				];
	
	preload(imageArray);
	
});