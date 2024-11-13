import '../src/scss/main.scss';

import { runAlert } from './app/alert';
import { loadNavbarContent } from './app/navbar';
import { loadDomImages } from './app/imgAssets';
import { toggleServiceContainer } from './app/app';
import { loadFooterAssets } from './app/footer';
loadNavbarContent();
loadDomImages();
toggleServiceContainer();
loadFooterAssets();
