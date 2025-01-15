// Wrap every letter in a span
const textWrapper = document.querySelector('.ml10 .letters');
const texts = [
	'Broadcaster',
	'Master of Ceremony',
	'Show Host',
	'Red Carpet Host',
];
let textIndex = 0;

const setText = (text) => {
	textWrapper.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");
};

const animateText = () => {
	// Set the current text and reset opacity
	setText(texts[textIndex]);
	document.querySelector('.ml10').style.opacity = '1'; // Ensure text is visible

	// Animate the current text
	anime
		.timeline()
		.add({
			targets: '.ml10 .letter',
			rotateY: [-90, 0],
			duration: 1300,
			delay: (el, i) => 90 * i,
		})
		.add({
			targets: '.ml10',
			opacity: 1,
			duration: 1000,
			easing: 'easeOutExpo',
			delay: 1000,
		})
		.finished.then(() => {
			// Wait until the current animation finishes before starting the next
			textIndex = (textIndex + 1) % texts.length; // Move to the next text
			setTimeout(animateText, 5000); // Add a slight delay for smooth transitions
		});
};

export { animateText };
