 
//   const header = document.querySelector('header');
//   window.addEventListener('scroll', () => {
//     header.classList.toggle('is-fixed', window.scrollY > 0);
//   }, { passive: true });
 
//   const header   = document.querySelector('header');
//   const threshold = 50;               // px scrolled before shrinking

//   window.addEventListener('scroll', () => {
//     header.classList.toggle('shrink', window.scrollY > threshold);
//   }, { passive: true });


// (function () {
//     const header = document.querySelector('header');
//     let lastY    = window.scrollY;

//     window.addEventListener('scroll', () => {
//       const currentY = window.scrollY;

//       /* If user is scrolling UP (current < last), add .shrink */
//       if (currentY < lastY && currentY > 0) {
//         header.classList.add('shrink');
//       }
//       /* If user is scrolling DOWN, remove .shrink */
//       else if (currentY > lastY) {
//         header.classList.remove('shrink');
//       }

//       lastY = currentY;
//     }, { passive: true });
//   })();



  (function () {
    const header     = document.querySelector('header');
    const threshold  = 10;          // start shrinking after 10 px of scroll

    window.addEventListener('scroll', () => {
      header.classList.toggle('shrink', window.scrollY > threshold);
    }, { passive: true });
  })();