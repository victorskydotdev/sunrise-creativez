import brandImg from '../assets/brand.png';
const navbarContainer = document.querySelector('.header-nav');

const loadNavbarContent = () => {
	const navTemplate = `
    <nav class="nav-container">
				<div class="brand-logo">
					<a href="/" >
						<img src="${brandImg}" alt="">
					</a>
				</div>

				<div class="wrap">
					<ul class="nav-links">
						<li class="link"><a href="#">Home</a></li>
						<li class="link"><a href="#">About</a></li>
						<li class="link"><a href="#">Services</a></li>
					</ul>

					<div class="btn-wrap">
						<button class="link">
							<a href="#" class="link-btn">Contact</a>
						</button>
						
					</div>
				</div>

				<div class="hamburger">
					<div class="block"></div>
					<!-- <i class="fa-solid fa-bars"></i> -->
				</div>
			</nav>
      `;

	if (navbarContainer) {
		navbarContainer.innerHTML += navTemplate;
	}
};

export { loadNavbarContent };
