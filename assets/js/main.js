AOS.init();

window.onscroll = function () {
  if ( window.pageYOffset !== 0) {
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
  if (!document.querySelector('#years')) {
    return;
  }

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
  if (!document.querySelector('#lines')) {
    return;
  }

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
  if (!document.querySelector('#clients')) {
    return;
  }

  document.querySelector('#clients').innerHTML = `+${clients}`;
  setTimeout(() => {
    clients++;

    if (clients <= 26) {
      counterClients()
    }
  }, 100);
}
counterClients();

function validateForm() {
  let invalid = false;
  let arrInput = ['name', 'mail', 'phone', 'message'];
  const validRegexMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validRegexProne = /\(\d{2,}\) \d{4,}\-\d{4}/g;

  arrInput.forEach((key) => {
    let input = document.querySelector(`#${key}`);
    input.classList.remove('invalid');

    if (!input.value) {
      input.classList.add('invalid');
      invalid = true;
      return;
    }

    if ((input.id == 'mail' && !input.value.match(validRegexMail)) ||
      (input.id == 'phone' && !input.value.match(validRegexProne))) {
      input.classList.add('invalid');
      invalid = true;
      return;
    }
  });

  let serviceData = new FormData(document.querySelector("form#contactForm"));

  Array.from(document.getElementsByClassName('service')).forEach((input) => {
    input.classList.remove('invalid');

    if (!serviceData.has('service')) {
      input.classList.add('invalid');
      invalid = true;
    }
  });

  if (invalid) {
    return false;
  }
  
  
  const accountSid = 'ACa1d50ecd5cac6ad0393ca2e7831d99e0';
  const authToken = '8d4b3cfe0b4a76b141228f73621bd5c1';
  const client = require('twilio')(accountSid, authToken);

  console.log('teste');

  client.messages
    .create({
        body: 'Teste',
        from: '+13613095255',
        to: '+5511995701084'
    })
    .then(() => {
      console.log('then');
    })
    .done(() => {
      console.log('done');
    });

    return false;
}

const $input = document.querySelector('[data-js="input"]')
$input.addEventListener('input', handleInput, false)

function handleInput (e) {
  e.target.value = phoneMask(e.target.value);
}

function phoneMask (phone) {
  if (phone.length <= 14) {
    return phone.replace(/\D/g, '')
      .replace(/^(\d)/, '($1')
      .replace(/^(\(\d{2})(\d)/, '$1) $2')
      .replace(/(\d{4})(\d{1,5})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  }
  return phone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{5})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
}
