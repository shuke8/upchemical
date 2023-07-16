// Burger menus
document.addEventListener('DOMContentLoaded', function () {
  // open
  const burger = document.querySelectorAll('.navbar-burger')
  const menu = document.querySelectorAll('.navbar-menu')

  if (burger.length && menu.length) {
    for (var i = 0; i < burger.length; i++) {
      burger[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }

  // close
  const close = document.querySelectorAll('.navbar-close')
  const backdrop = document.querySelectorAll('.navbar-backdrop')

  if (close.length) {
    for (var i = 0; i < close.length; i++) {
      close[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }

  if (backdrop.length) {
    for (var i = 0; i < backdrop.length; i++) {
      backdrop[i].addEventListener('click', function () {
        for (var j = 0; j < menu.length; j++) {
          menu[j].classList.toggle('hidden')
        }
      })
    }
  }
})

//popup
$('.open-popup-link').magnificPopup({
  type: 'inline',
  midClick: true,
  mainClass: 'mfp-fade',
})

// product
// Get all the image selector buttons
const imageSelectorButtons = document.querySelectorAll('.tab')

// Add a click event listener to each image selector button
imageSelectorButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Remove the "ring-indigo-500" class from the currently selected button
    const currentSelectedButton = document.querySelector(
      '[aria-selected="true"]'
    )
    currentSelectedButton.classList.remove('ring-indigo-500')

    // Add the "ring-transparent" class to the currently selected button
    currentSelectedButton
      .querySelector('.ring')
      .classList.add('ring-transparent')

    // Add the "ring-indigo-500" class to the clicked button
    button.classList.add('ring-indigo-500')

    // Remove the "ring-transparent" class from the clicked button
    button.querySelector('.ring').classList.remove('ring-transparent')

    // Get the ID of the clicked button's associated panel
    const panelId = button.getAttribute('aria-controls')

    // Hide all the image panels
    const imagePanels = document.querySelectorAll('[role="tabpanel"]')
    imagePanels.forEach((panel) => {
      panel.setAttribute('hidden', true)
      panel.setAttribute('aria-hidden', true)
      panel.setAttribute('tabindex', -1)
    })

    // Show the clicked button's associated panel
    const clickedPanel = document.getElementById(panelId)
    clickedPanel.removeAttribute('hidden')
    clickedPanel.removeAttribute('aria-hidden')
    clickedPanel.setAttribute('tabindex', 0)
    clickedPanel.focus()
  })
})

// product

//popup

// carousel
document.addEventListener('DOMContentLoaded', function () {
  $('.slick-carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    dots: true,
    prevArrow: null, // Remove previous arrow
    nextArrow: null, // Remove next arrow
    customPaging: function (slider, i) {
      return (
        '<button class="w-4 h-4 rounded-full mx-1 focus:outline-none transition-colors duration-300 ' +
        (i === slider.currentSlide ? 'bg-gray-900' : 'bg-gray-400') +
        '"></button>'
      )
    },
  })
})
// carousel

const btn = document.querySelector('#btn')

let timerId
let i = 0

btn.addEventListener('click', () => {
  timerId = setTimeout(logger, 1000)
})

function logger() {
  if (i === 3) {
    clearInterval(timerId)
  }
  console.log('ishladi')
  i++
}
