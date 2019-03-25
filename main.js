let toggleNavStatus = false;

function toggleNav() {
  let toggleBtn = document.querySelector(".nav-toggle-btn");
  let menu = document.querySelector('nav ul');
  let navItems = document.querySelectorAll('.main-nav ul li');
  let nav = document.querySelector('.main-nav');


  if (toggleNavStatus === false) {
    nav.style.height = '290px';
    menu.style.visibility = 'visible';

    // let arrayLength = navItems.length;
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 1;
    }

    toggleNavStatus = true;
  }
  else if (toggleNavStatus === true) {
    nav.style.height = '60px';
    menu.style.visibility = 'hidden';

    for (var i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 0;
    }

    toggleNavStatus = false;
  }
}

let toggleInfoStatus = false;

function toggleInfo() {
  let infoBlock = document.querySelector('.info-block');
  let infoBlockItems = document.querySelectorAll('info-block ul li');
  let infoBlockUl = document.querySelector('.info-block ul');
  let infoBlockBtn = document.querySelector('.info-block-btn');

  if (toggleInfoStatus === false) {
    infoBlock.style.height = '170px';
    infoBlockUl.style.visibility = 'visible';
    infoBlockBtn.style.transform = 'rotate(180deg)';

    // for (let i = 0; i < infoBlockItems.length; i++) {
    //   infoBlockItems[i].style.opacity = 1;
    // }

    toggleInfoStatus = true;

  } else if (toggleInfoStatus === true) {
    infoBlock.style.height = '40px';
    infoBlockUl.style.visibility = 'hidden';
    infoBlockBtn.style.transform = 'rotate(0deg)';

    // for (let i = 0; i < infoBlockItems.length; i++) {
    //   infoBlockItems[i].style.opacity = 1;
    // }

    toggleInfoStatus = false;
  }
}
