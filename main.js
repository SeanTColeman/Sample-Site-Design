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

    let arrayLength = navItems.length;
    for (var i = 0; i < navItems.length; i++) {
      navItems[i].style.opacity = 0;
    }

    toggleNavStatus = false;
  }


}
