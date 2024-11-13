const toggleSunriseBtn = document.querySelector('.toggle-sunrise-btn');
const toggleCreativezBtn = document.querySelector('.toggle-creativez-btn');

const serviceOne = document.querySelector('.service-box-one');
const serviceTwo = document.querySelector('.service-box-two');

window.addEventListener('DOMContentLoaded', () => {
	if (toggleSunriseBtn) {
		toggleSunriseBtn.classList.add('background');
		toggleCreativezBtn.style.background = 'transparent';
	}
});

const toggleServiceContainer = () => {
	if (toggleSunriseBtn) {
		toggleSunriseBtn.addEventListener('click', () => {
			toggleSunriseBtn.classList.add('background');
			toggleSunriseBtn.style.color = '#fff';
			toggleCreativezBtn.style.background = 'transparent';
			toggleCreativezBtn.style.color = '#3e3e3e';

			serviceOne.style.display = 'grid';
			serviceTwo.style.display = 'none';
		});
	}

	if (toggleCreativezBtn) {
		toggleCreativezBtn.addEventListener('click', () => {
			toggleSunriseBtn.classList.remove('background');
			toggleSunriseBtn.style.background = 'transparent';
			toggleSunriseBtn.style.color = '#3e3e3e';
			toggleCreativezBtn.style.background = '#500d5e';
			toggleCreativezBtn.style.color = '#fff';

			serviceOne.style.display = 'none';
			serviceTwo.style.display = 'grid';
			serviceTwo.classList.add('scale-out');
		});
	}
};

export { toggleServiceContainer };
