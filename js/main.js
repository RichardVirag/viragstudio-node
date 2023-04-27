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

shover = function(index, imgName) {
  if (document.querySelectorAll('.s-hover')[index].hasAttribute('active')) {
    return;
  }

  [...document.querySelectorAll('.s-hover')].forEach(el => {
    el.removeAttribute('active');
  })
  document.querySelectorAll('.s-hover')[index].setAttribute('active', '');

  document.querySelector('img.s-hover-img').style.opacity = 0;
  setTimeout(() => {
    document.querySelector('img.s-hover-img').setAttribute('src', `media/img/${imgName}-index.png`);
    document.querySelector('img.s-hover-img').style.opacity = 1;
  }, 200)
}
