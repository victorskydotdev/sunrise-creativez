import heroBg from '../assets/hero-bg.jpg';
import asteriskPrimaryImg from '../assets/asterisk-primary.png';
import quoteImg from '../assets/quote.svg';
import modAsteriskImg from '../assets/mod-asterisk.png';
// import
// end of img imports

// dom element variables
const heroPositionImg = document.getElementById('first-positioned-ast');
const heroImgContainer = document.querySelector('.hero-img-wrap');
const cardIconWrap = document.querySelectorAll('.icon-wrap');
const quoteWrap = document.querySelector('.positioned-quote-img');
const modAsteriskWrap = document.querySelector('.asterisk-two');

// about page variables
const aboutBgWrap = document.querySelector('.about-img-wrap');

const loadDomImages = () => {
	const firstAstimg = `
    <img src="${asteriskPrimaryImg}" class="img" alt="asterisk illustation">
  `;

	const heroImgTemplate = `
	  <img src="${heroBg}" class="hero-bg" alt="sunrise at smfest">
	`;

	const quoteImgTemplate = `
    <img src="${quoteImg}" class="quote" alt="quote">
  `;

	const modAsteTemplate = `
    <img src="${modAsteriskImg}" class="mod-asterisk" alt="asterisk">
  `;

	if (heroPositionImg) {
		heroPositionImg.innerHTML += firstAstimg;
	}

	if (heroImgContainer) {
		heroImgContainer.innerHTML += heroImgTemplate;
	}

	cardIconWrap.forEach((card) => {
		if (card) {
			card.innerHTML += firstAstimg;
		}
	});

	if (quoteWrap) {
		quoteWrap.innerHTML += quoteImgTemplate;
	}

	if (aboutBgWrap) {
		aboutBgWrap.innerHTML = heroImgTemplate;
	}

	if (modAsteriskWrap) {
		modAsteriskWrap.innerHTML += modAsteTemplate;
	}
};

export { loadDomImages };
