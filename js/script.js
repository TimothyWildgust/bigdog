const myFunction = () => {
  $('.navbar').toggleClass('responsive');
}

$(function() {
  $(document).scroll(function() {
    let navbar = $('.js-navbar');
    navbar.toggleClass('navbar--scrolled', $(this).scrollTop() > navbar.height());
  });
});

$(function() {
  $('.footer__image_cont').matchHeight({
    byRow: true
  });
});


$(function() {
  $('.understand__block').matchHeight();
});

$(function() {
  $('.understand__desc').matchHeight();
});

$(function() {
  $('.trusted__wrap').matchHeight();
});
$(function() {
  $('.slider__block').matchHeight({
    byRow: false
  });
});


// slider
let slideIndex = 1;

function next(n) {
  slides(slideIndex = n);
}

function slides(n) {
  let i;
  let sliderBlock = $('.slider__block');
  let dots = $('.slider__dots');

  if (n > sliderBlock.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = sliderBlock.length
  }

  for (i = 0; i < sliderBlock.length; i++) {
    sliderBlock[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' slider__dots--active', '');
  }

  sliderBlock[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' slider__dots--active';
}

slides(slideIndex);
