
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

	/*============ показать описание услуги ============ */
	const servCards = document.querySelectorAll('[data-serv]');
	const servCardsDesk = document.querySelectorAll('[data-desk]');
	console.log(servCards);
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