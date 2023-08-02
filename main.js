// var parallax = document.querySelector(".banner");

// // Parallax Effect for DIV 1
// window.addEventListener("scroll", function () {
//   let offset = window.scrollY;
//   parallax.style.backgroundPositionY = offset * 0.7 + "px";
//   // DIV 1 background will move slower than other elements on scroll.
// });


// $(window).scroll(function () {
//     $("banner").css("background-position","50% " + ($(this).scrollTop() / 2) + "px");
// });

// const parallax = () => {
//   const { scrollY } = window;
//   background.style.top = (scrollY * -.4) + 'px';
// }
// window.addEventListener('scroll', parallax);

window.addEventListener('scroll', throttle(parallax, 14));

function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
};

function parallax() {
  var scrolled = window.scrollY;
  var parallax = document.querySelector(".banner");
  // You can adjust the 0.4 to change the speed
	var coords = (scrolled * .2) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};