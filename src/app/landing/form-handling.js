const btn = document.querySelector('.btn');

const handleSubmit = () => {
	const formModal = document.querySelector('.form-modal');
	const form = document.querySelector('.form');

	btn.addEventListener('click', () => {
		formModal.classList.add('show-modal');

		// alert('form button clicked');
	});

	// form.addEventListener('submit', (e) => {
	//   e.preventDefault();
	//   const formData = new FormData(form);
	//   const data = Object.fromEntries(formData.entries());
	//   console.log(data);
	//   formModal.style.display = 'block';
	//   form.reset();
	// }
	// console.log('Form submitted');
};

export { handleSubmit };
