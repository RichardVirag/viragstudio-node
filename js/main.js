AOS.init();

window.onscroll = function () {
  if (document.body.scrollTop !== 0) {
    document.querySelector('header').setAttribute('scrolled', '')
  } else {
    document.querySelector('header').removeAttribute('scrolled')
  }
}

document.querySelector('a.menu').addEventListener("click", () => {
  document.querySelector('nav').setAttribute('active', '')
});

document.querySelector('a.menu-close').addEventListener("click", () => {
  document.querySelector('nav').removeAttribute('active')
});
