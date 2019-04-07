// Default DevCorner JavaScript Setting

const imgCarousel = new Siema({
  duration: 600,
  easing: 'ease-out',
  // easing: 'cubic-bezier(0.11,0.73,0.57,1.53)'
  loop: true
});
document.querySelector('.prev').addEventListener('click', () => imgCarousel.prev());
document.querySelector('.next').addEventListener('click', () => imgCarousel.next());


// Usage

// new Siema({
//   selector: '.siema',
//   duration: 200,
//   easing: 'ease-out',
//   perPage: 1,
//   startIndex: 0,
//   draggable: true,
//   multipleDrag: true,
//   threshold: 20,
//   loop: false,
//   rtl: false,
//   onInit: () => {},
//   onChange: () => {},
// });
