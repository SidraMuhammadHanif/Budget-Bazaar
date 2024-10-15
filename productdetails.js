// Image Gallery Functionality
const imageList = document.querySelectorAll('.image-list img');
const mainImage = document.querySelector('.main-image img');

imageList.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;
  });
});

// Quantity increment/decrement functionality
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantityInput = document.querySelector('.quantity input');

decreaseBtn.addEventListener('click', () => {
  if (quantityInput.value > 1) {
    quantityInput.value--;
  }
});

increaseBtn.addEventListener('click', () => {
  quantityInput.value++;
});

// Size selection functionality
const sizeButtons = document.querySelectorAll('.sizes button');
sizeButtons.forEach(button => {
  button.addEventListener('click', () => {
    sizeButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
