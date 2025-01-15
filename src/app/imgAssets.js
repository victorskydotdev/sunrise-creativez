import smfestJosh2funny from '../assets/bg-imgs/smfest-josh2funny.jpg';
import img2 from '../assets/bg-imgs/img2.jpg';
import img3 from '../assets/bg-imgs/img3.jpg';
import asteriskPrimaryImg from '../assets/asterisk-primary.png';
import quoteImg from '../assets/quote.svg';
import modAsteriskImg from '../assets/mod-asterisk.png';

const loadDomImages = () => {
	// loading stats section images
	const statsThumbnail = document.querySelector('.stats-thumbnail');
	const loadSmfestJosh2funny = () => {
		return `
			<img src="${smfestJosh2funny}" class="img" alt="smfest josh2funny">

			<img src="${img2}" class="img" alt="smfest josh2funny">

			<img src="${img3}" class="img" alt="smfest josh2funny">
		`;
	};

	statsThumbnail.innerHTML = loadSmfestJosh2funny();

	const cardIconWrap = document.querySelectorAll('.icon-wrap');
	const quoteWrap = document.querySelector('.positioned-quote-img');
	const modAsteriskWrap = document.querySelector('.asterisk-two');

	// about page variables
	const aboutBgWrap = document.querySelector('.about-img-wrap');

	const firstAstimg = `
    <img src="${asteriskPrimaryImg}" class="img" alt="asterisk illustation">
  `;

	const quoteImgTemplate = `
    <img src="${quoteImg}" class="quote" alt="quote">
  `;

	const modAsteTemplate = `
    <img src="${modAsteriskImg}" class="mod-asterisk" alt="asterisk">
  `;

	cardIconWrap.forEach((card) => {
		if (card) {
			card.innerHTML += firstAstimg;
		}
	});

	if (quoteWrap) {
		quoteWrap.innerHTML += quoteImgTemplate;
	}

	if (modAsteriskWrap) {
		modAsteriskWrap.innerHTML += modAsteTemplate;
	}
};

export { loadDomImages };
