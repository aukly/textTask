   
   
    // $(function()
    // {
    // 	$(window).scroll(function()
    // 	{
    // 		if($(this).scrollTop() > 300)
    // 		{
    // 			$('.scrolltoTop').fadeIn();
    // 		}
    // 		else 
    // 		{
    // 			$('.scrolltoTop').fadeOut();
    // 		}
    // 	});
    // 	$('.scrolltoTop').click(function()
    // 	{
    // 		$('html, body').animate({scrollTop : 0}, 800);
    // 		$('.scrolltoTop').hover = false;
    // 		return false;
    // 	});
    
    //     baguetteBox.run('.about-page .about-page-sert .sert-img a');
    //     baguetteBox.run('.about-page .about-page-reviews .item a');
    // });

	const swiper = new Swiper('.swiper', {
		// Optional parameters
		// direction: 'vertical',
		loop: true,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  	// Responsive breakpoints
		breakpoints: {
			// when window width is >= 320px
			320: {
			navigation: {
					enabled: false
				  },
			slidesPerView: 1,
			spaceBetween: 10
			},
			// when window width is >= 640px
			640: {
			slidesPerView: 4,
			spaceBetween: 20
			}
		}
	  });
	  	// const choice = document.querySelector('.choice');
		// choice.addEventListener('click', function () {
		// 	document.querySelector('.choice svg').style.display = 'block';
		// });
		const button = document.querySelector('#goOne');
		button.addEventListener('click', function () {
			document.querySelector('#questionOne').style.borderRadius = '0 8px 8px 0';
			document.getElementById('questionOne').style.backgroundColor = '#ffffff';
			document.querySelector('#questionOne .q-name').style.color = '#000000';
			document.querySelector('#questionOne .q-title').style.color = '#000000';
			document.querySelector('#questionTwo').style.display = "block";
			document.querySelector('#answerTwo').style.display = "block";
			document.querySelector('#answerOne').style.display = "none";
		});
		const buttonOne = document.querySelector('#questionOne');
		buttonOne.addEventListener('click', function () {
			document.getElementById('questionOne').style.backgroundColor = '#000';
			document.querySelector('#questionOne .q-name').style.color = '#fff';
			document.querySelector('#questionOne .q-title').style.color = '#fff';
			document.getElementById('questionTwo').style.backgroundColor = '#fff';
			document.querySelector('#questionTwo .q-name').style.color = '#000';
			document.querySelector('#questionTwo .q-title').style.color = '#000';
			document.querySelector('#answerOne').style.display = "block";
			document.querySelector('#answerTwo').style.display = "none";
			document.querySelector('#answerThree').style.display = "none";
		});

		const button2 = document.querySelector('#goTwo');
		button2.addEventListener('click', function () {
			document.querySelector('#questionTwo').style.borderRadius = '0 8px 8px 0';
			document.getElementById('questionTwo').style.backgroundColor = '#ffffff';
			document.querySelector('#questionTwo .q-name').style.color = '#000000';
			document.querySelector('#questionTwo .q-title').style.color = '#000000';
			document.querySelector('#questionThree').style.display = "block";
			document.querySelector('#answerThree').style.display = "block";
			document.querySelector('#answerTwo').style.display = "none";
		});


		function myFunction(text)
		{
			document.getElementById(text).style.display = 'inline';
		}