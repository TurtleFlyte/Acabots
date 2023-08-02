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
	var coords = (scrolled * .2) + 'px'
  parallax.style.transform = 'translateY(' + coords + ')';
};