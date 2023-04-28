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

let years = 0;
function counterYears() {
  document.querySelector('#years').innerHTML = `+${years}`;
  setTimeout(() => {
    years++;

    if (years <= 7) {
      counterYears()
    }
  }, 200);
}
counterYears();

let lines = 0;
function counterLines() {
  document.querySelector('#lines').innerHTML = `+${lines}`;
  setTimeout(() => {
    lines += 200;

    if (lines <= 100000) {
      counterLines()
    }
  }, .5);
}
counterLines();

let clients = 0;
function counterClients() {
  document.querySelector('#clients').innerHTML = `+${clients}`;
  setTimeout(() => {
    clients++;

    if (clients <= 26) {
      counterClients()
    }
  }, 100);
}
counterClients();
