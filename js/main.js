/* Footer Menu Function */
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
  //debugger;
  event.preventDefault();
  let existClass = document.querySelectorAll('.footer-nav');
  let arrowClass = document.querySelectorAll('.col-title a');
  let classFlag = document.querySelectorAll('.col-title a.active-nav');
  let targetClass = event.target.classList;

  if (classFlag.length > 0 && targetClass.length == 1) {
    //remove classes
    for (var i = 0; i <= existClass.length; i++) {
      if (existClass[i].classList.contains('active-nav')) {
        existClass[i].classList.toggle('active-nav');
        arrowClass[i].classList.toggle('active-nav');
      } 
    }
  } else if (classFlag.length > 0) {
    for (var i = 0; i < existClass.length; i++) {
      if (existClass[i].classList.contains('active-nav')) {
        existClass[i].classList.toggle('active-nav');
        arrowClass[i].classList.toggle('active-nav');
      } 
    }
    showMenu();
  } else {
    showMenu();
  }
}


/* Submit Button Function */
function enableSendButton(){
  const $emailInput = document.getElementById('contact-email');
  const $sendButton = document.getElementById('submit');
  
  if ($emailInput.value.length != 0) {
    $sendButton.disabled = false;
  } else {
    $sendButton.disabled = true;
  }
}
