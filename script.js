'use strict';

//Initilize DOM component
const buttonShowModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const buttonCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModalAnother = document.querySelector('.close-button');

//Function for open Modal
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// Function for close Modal
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Add event handler for various component
buttonShowModal.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
buttonCloseModalAnother.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log('Its working');
    closeModal();
  } else {
    console.log('Please press Escape for close the Modal');
  }
});
