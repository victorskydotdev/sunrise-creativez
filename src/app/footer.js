import footerAstImg from '../assets/asterisk-primary.png';
import footerLogo from '../assets/brand-icon.png';

const asteriskWrap = document.querySelector('.footer-asterisk-one');
const footerBrandWrap = document.querySelector('.footer-brand-logo');

const loadFooterAssets = () => {
	const asteriskTemp = `
    <img class="img" src=${footerAstImg} alt="asterisk" />
  `;
	const logoTemp = `
    <img class="img" src=${footerLogo} alt="asterisk" />
  `;

	if (asteriskWrap && footerBrandWrap) {
		asteriskWrap.innerHTML += asteriskTemp;
		footerBrandWrap.innerHTML += logoTemp;
	}
};

export { loadFooterAssets };
