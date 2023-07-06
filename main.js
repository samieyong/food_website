const slides = document.querySelectorAll('.slide__show img');
const gallery = document.querySelectorAll('.gallery');
const navBar = document.querySelector('nav');

// ///////Navigation Section//////////
navBar.addEventListener('click', () => {
   navBar.classList.toggle('change');
});

// ////////Header Slide Show////////
let count = 0;
setInterval(() => {
   count++;
   let slide = document.querySelector('.slide__show img.change');
   slide.classList.remove('change');
   if (count < 6) {
      slide.nextElementSibling.classList.add('change');
   } else {
      slides[0].classList.add('change');
      count = 0;
   }
}, 3000);

// /////////Gallery Hover State//////////
gallery.forEach((bg) => {
   bg.addEventListener('mouseover', function () {
      this.classList.add('show');
   });
});
gallery.forEach((bg) => {
   bg.addEventListener('mouseout', function () {
      this.classList.remove('show');
   });
});
