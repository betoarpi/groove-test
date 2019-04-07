function showMenu(){
  event.preventDefault();

  let attribute = event.target.getAttribute('href');
  let showMenu = "";

  switch (attribute) {
    case "#products":
      showMenu = document.getElementById('products');
      showMenu.classList.toggle('active-nav');
      event.target.classList.toggle('active-nav');
      break;
    case "#company":
      showMenu = document.getElementById('company');
      showMenu.classList.toggle('active-nav');
      event.target.classList.toggle('active-nav');
      break;
      case "#compare":
      showMenu = document.getElementById('compare');
      showMenu.classList.toggle('active-nav');
      event.target.classList.toggle('active-nav');
      break;
      case "#help":
      showMenu = document.getElementById('help');
      showMenu.classList.toggle('active-nav');
      event.target.classList.toggle('active-nav');
      break;
  }
}

function removeClass(){
  let existClass = document.querySelectorAll('.footer-nav');
  let arrowClass = document.querySelectorAll('.col-title a');
  let classFlag = document.querySelectorAll('active-nav');

  if (classFlag.length > 0) {
    for (var i = 0; i < existClass.length; i++) {
      if (existClass[i].classList.contains('active-nav')) {
        existClass[i].classList.toggle('active-nav');
        arrowClass[i].classList.toggle('active-nav');
      } 
    }
  } else {
    showMenu();
  }
}