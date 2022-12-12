document.addEventListener("DOMContentLoaded", function(){  
	/**  анимация, когда секции в зоне видимости */
	if(window.innerWidth > 1200){
		let targets = document.querySelectorAll(".anim-box")

		function check_in_viewport(element){
			let rect = element.getBoundingClientRect()
			const VERTICAL_SETPOINT = 100;
			let targetPosition = {
				top: window.pageYOffset + rect.top + VERTICAL_SETPOINT,
				bottom: window.pageYOffset + rect.bottom - VERTICAL_SETPOINT,
			}
			let windowPosition = {
				top: window.pageYOffset,
				bottom: window.pageYOffset + document.documentElement.clientHeight
			}
			return (
				targetPosition.bottom > windowPosition.top &&
				targetPosition.top < windowPosition.bottom
			)
		}

		window.addEventListener('scroll', (e)=>{
			for(let target of targets){
				let is_in_viewport = check_in_viewport(target)
				if (is_in_viewport == target.classList.contains('in-view'))
					continue
				if (is_in_viewport){
					target.classList.add('in-view')
				}else{
					target.classList.remove('in-view')
				}
					
			}
		});
	}
		

	// active class of menu items onscroll
	window.addEventListener('scroll', () => {
		let scrollDistance = window.scrollY;

		if (window.innerWidth > 1023) {
			document.querySelectorAll('.section').forEach((el, i) => {
				if (el.offsetTop - document.querySelector('.header-top').clientHeight <= scrollDistance) {
					document.querySelectorAll('#header-menu a').forEach((el) => {
						if (el.classList.contains('active')) {
							el.classList.remove('active');
						}
					});
					const thisId = "#" + el.getAttribute('id');
					

					document.querySelectorAll('#header-menu a').forEach((elem, i) => {
						const linkHref = elem.getAttribute('href');
						if(thisId == linkHref ){
							elem.classList.add('active');
						}
					});
				}
			});
		}
	});
		/*  fybvbhjdfybt ымп  vivus.js*/
	const headerSvg1 = document.querySelector('#header-svg');
	const serviceSvg = document.querySelector('#service-svg');

	if(headerSvg1){
		new Vivus(
			'header-svg',
			{
				type: 'delayed',
				duration: 200,
			}
			);
		}
	if(serviceSvg){
		new Vivus(
			'service-svg',
			{
				type: 'delayed',
				duration: 200,
			}
			);
		}
	

	// MENU
	const menuToggle = document.querySelector('.menu-toggle');
	const mobMenu = document.querySelector('#header-menu');
	const overlayBlock = document.querySelector('#overlay');
	const bodyEl = document.body;
	if (menuToggle) {
		menuToggle.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				
				this.classList.remove('active');
				mobMenu.classList.remove('active');
				overlayBlock.classList.remove('active');
				bodyEl.classList.remove('noscroll');

			} else {
				this.classList.add('active');
				mobMenu.classList.add('active');
				overlayBlock.classList.add('active');
				bodyEl.classList.add('noscroll');
			}
		});
		window.addEventListener('resize', function () {
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');
			mobMenu.classList.remove('active');
			
		});
		mobMenu.addEventListener('click', function () {
			this.classList.remove('active');
			menuToggle.classList.remove('active');
			overlayBlock.classList.remove('active');
			bodyEl.classList.remove('noscroll');

		});
	}
     
	/*класс в зависимости от количества карточек*/
	void function MyFunction(){
		const container = document.querySelector('.price-cards');
		if(container){
			const nmbrOfElements = container.querySelectorAll('.price-cards__item').length;
		
			switch (true) {
				case (nmbrOfElements === 5):
					container.classList.add(`price-cards-grid`)
					break;
			
				case (nmbrOfElements % 3 === 0):   
					container.classList.add(`price-cards-three`)
					break;
					
				default:
					// container.classList.add(``)
					break;
			}
		}
		}();
	/*============ показать описание услуги ============ */
	const servCards = document.querySelectorAll('[data-serv]');
	const servCardsDesk = document.querySelectorAll('[data-desk]');
	
	if(servCards.length > 0){
		for(let item of servCards){
			const cardIcon = item.querySelector('.circle-icon');
			const cardDesk = item.querySelector('[data-desk]');
			const cardDeskClose = cardDesk.querySelector('.icon-close');
			cardIcon.addEventListener('click',function(){
				cardDesk.classList.add('active');
			});
		
 			cardDeskClose.addEventListener('click',function(){
				cardDesk.classList.remove('active');
			});
		}
	}

	/*slider our projects */
	$('.our-projects-carousel').owlCarousel({
		items:1,
		margin:20,
		smartSpeed: 600,
		nav:true,
		dots: false,
		navText: ["<div class='slider-prev'></div>", "<div class='slider-next'></div>"],
		responsive: {
			424:{
				stagePadding:30,
			},
			
			768: {
				items: 2,
				margin:40,
			}
		}
	});
	/*slider review */
	$('.our-review-carousel').owlCarousel({
		items:1,
		margin:20,
		smartSpeed: 600,
		nav:true,
		dots: false,
		navText: ["<div class='slider-prev'></div>", "<div class='slider-next'></div>"],
		responsive: {
			424:{
				stagePadding:100,
			},
			768: {
				items: 3,
				margin:30,
			},
			1024:{
				items: 4,
				margin:40,
			}

		}
	});

	/*slider sertificate */
	$('.our-sertificate-carousel').owlCarousel({
		items:1,
		margin:20,
		smartSpeed: 600,
		nav:true,
		dots: false,
		navText: ["<div class='slider-prev'></div>", "<div class='slider-next'></div>"],
		responsive: {
			424:{
				stagePadding:100,
			},
			768: {
				items: 3,
				margin:30,
			},
			1024:{
				items: 4,
				margin:40,
			}

		}
	});
	/*================ forms ================= */
	const formItems = document.querySelectorAll('.form-input')

    for(let item of formItems) {
        const thisParent = item.closest('.form-item')
        const thisPlaceholder = thisParent.querySelector('.fake-placeholder')
        item.addEventListener('focus', function() {
            thisPlaceholder.classList.add('active')
        })
        item.addEventListener('blur', function() {
            if(item.value.length > 0) {
                thisPlaceholder.classList.add('active')
            }
            else {
                thisPlaceholder.classList.remove('active')
            }
        })
    }

	     /* =============== modal с атрибутом frame-modal ===============*/ 
    const modalFramesOpen = document.querySelectorAll('[frame-btn]');
    const modalFrames = document.querySelectorAll('[frame-modal]');
    if( modalFrames.length > 0){
      const modalFramesClose = document.querySelectorAll('[frame-close]');

      for(let item of modalFramesOpen){
        item.addEventListener('click', function(e){
          for(let item of  modalFrames){
            item.classList.remove('visible');
            
            bodyEl.classList.remove('lock');
			
			
          }
          e.preventDefault();
          const itemAttr = item.getAttribute('frame-btn');

          for(let frame of modalFrames){
            const frameAttr =frame.getAttribute('frame-modal');	
            if(frameAttr == itemAttr){
              frame.classList.add('visible');
              bodyEl.classList.add('lock');
			 
            }
          }
        });
      }
      /*=============== закрыть модалки с атрибутом frame-modal по клику на крестик===============*/
      for(let item of modalFramesClose){
        item.addEventListener('click', function(e){
          e.preventDefault();
          item.closest('[frame-modal]').classList.remove('visible');
          bodyEl.classList.remove('lock');
		  
		  
        });
      }
 	/*=============== закрыть модалки по клику вне ===============*/
	for(let frame of modalFrames){
		frame.addEventListener('click', function(e){
			if(e.target === e.currentTarget){
				this.classList.remove(`visible`)
				bodyEl.classList.remove('lock');
			}
		});
	}

    }
});