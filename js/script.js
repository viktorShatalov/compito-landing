// menu -mobile

jQuery(document).ready(function () {
  jQuery('.burger').click(function () {
    jQuery('.burger,.header-menu').toggleClass('active');
    jQuery('html,body').toggleClass('lock');
  })
})

// dropdawnMenu

jQuery(document).ready(function () {
  jQuery('.menu-items li a').on('click', function (e) {
    e.preventDefault();
  });

  jQuery('.menu-items li').hover(function () {
    clearTimeout($.data(this, 'timer'));
    jQuery('ul', this).stop(true, true).slideDown(400);
  }, function () {
    $.data(this, 'timer', setTimeout($.proxy(function () {
      jQuery('ul', this).stop(true, true).slideUp(400);
    }, this), 100));
  });

});

// scroll-menu

const $page = jQuery('html, body');
jQuery('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: jQuery($.attr(this, 'href')).offset().top
  }, 900);
  return false;
});

// modal

function modal() {

  const openModalButtons = document.querySelectorAll('[data-modal-target]');
  const closeModalButtons = document.querySelectorAll('[data-close-button]');
  const overlay = document.getElementById('overlay');

  openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
  })

  overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
      closeModal(modal)
    })
  })

  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.modal')
      closeModal(modal)
    })
  })

  function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
  }

  function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }
}
modal();

// slider

jQuery(document).ready(function () {
  jQuery('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    lazyLoad: "progressive",
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2200,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});

// slider 2

jQuery(document).ready(function () {
  jQuery('.ligth_slider-for').slick({
    arrows: true,
    dots: false,
    infinite: true,
    lazyLoad: "progressive",
    asNavFor: '.ligth_slider-nav',
  });
});


jQuery(document).ready(function () {
  jQuery('.ligth_slider-nav').slick({
    arrows: false,
    dots: false,
    infinite: true,
    lazyLoad: "progressive",
    asNavFor: '.ligth_slider-for',
    centerMode: true,
    slidesToShow: 5,
  });
});