import heroBg from '../../assets/hero-bg.jpg';
import bgImage from '../../assets/bg-imgs/bg1.jpg';
import bg2 from '../../assets/bg-imgs/bg2.jpg';
import bg3 from '../../assets/bg-imgs/bg3.jpg';
import bg4 from '../../assets/bg-imgs/bg4.jpg';
import bg5 from '../../assets/bg-imgs/bg5.jpg';
import bg6 from '../../assets/bg-imgs/bg6.jpg';

const imgArr = [heroBg, bgImage, bg2, bg3, bg4, bg5, bg6];

let currentIndex = 0;

// Function to update the background image and text
const animateImgs = () => {
	const heroImgContainer = document.getElementById('hero-img-wrap');

	// Update the image dynamically
	const imgTemplate = () => `
    <img src="${
			imgArr[currentIndex % imgArr.length]
		}" class="hero-bg" alt="Dynamic background">
  `;
	heroImgContainer.innerHTML = imgTemplate();

	document.querySelector('.hero-bg').style.opacity = 0;

	// Anime.js animation timeline for background image transitions
	anime
		.timeline()
		.add({
			targets: '.hero-bg',
			opacity: 1,
			duration: 50,
			easing: 'easeInOutSine',
			// delay: 200,
		})
		.finished.then(() => {
			// Increment the index to show the next image
			currentIndex++;

			// Call the function again with a slight delay for smooth transition
			setTimeout(animateImgs, 5000);
		});
};

// Export the function to start animation
export { animateImgs };
