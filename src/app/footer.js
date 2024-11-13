import footerAstImg from '../assets/asterisk-primary.png';

const asteriskWrap = document.querySelector('.footer-asterisk-one');

const loadFooterAssets = () => {
	const asteriskTemp = `
    <img class="img" src=${footerAstImg} alt="asterisk" />
  `;

	if (asteriskWrap) {
		asteriskWrap.innerHTML += asteriskTemp;
	}
};

export { loadFooterAssets };
