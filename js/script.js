// menu -mobile

jQuery(document).ready(function () {
  jQuery('.burger').click(function () {
    jQuery('.burger,.mobile-menu,.header__content').toggleClass('active');
    jQuery('html,body').toggleClass('lock');
  })
})

function changeText() {
  return document.querySelector("#button").innerHTML = "Добавлено";
}

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


// спрятать-показать sidebar-menu в категориях

if (jQuery(window).width() > 480) {
  // Тут код для больших разрешений,
  //с шириной окна с сайтом больше 768 писелей
} else {
  // Тут код для маленьких экранов
  jQuery(".cat-item").hide();

  jQuery(".sidebar__title").click(
    function () {
      jQuery(".cat-item").toggle('slow')
    }
  );

}
