import '../src/scss/main.scss';

import { animateText } from './app/landing/anime-text';
import { animateImgs } from './app/landing/animate-imgs';
import { loadNavbarContent } from './app/navbar';
import { loadDomImages } from './app/imgAssets';
import { toggleServiceContainer } from './app/app';
import { loadFooterAssets } from './app/footer';
import { handleSubmit } from './app/landing/form-handling';

// function invokations
animateText();
animateImgs();
loadNavbarContent();
loadDomImages();
toggleServiceContainer();
loadFooterAssets();
handleSubmit();
