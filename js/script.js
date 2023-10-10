const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}

/******************************FORMULAIRE SIGN UP**************************************/

/*champs à remplir*/

let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
let mdp = document.getElementById("mdp");
let message = document.getElementById("message");

/*selectionner la case à cocher et le texte à côté*/
let cocher = document.getElementById('formCheck-1');
let age = document.querySelector('label[for="formCheck-1"]');

/*afficher le message invisible pour le mdp*/
let messageErreur = document.querySelector(".text-danger");

function verifierFormulaire() {
    if (prenom.value === "") {
      prenom.style.borderColor = "red";
    } else {
      prenom.style.borderColor = "green";
    }

    if (nom.value === "") {
      nom.style.borderColor = "red";
    } else {
      nom.style.borderColor = "green";
    }
    
    /*condition : si email.value contient "@"*/
    if (email.value === "" || !email.value.includes("@")) {
      email.style.borderColor = "red";
    } else if (email.value.includes("@")) {
      email.style.borderColor = "green";
    }

    /*condition : mdp > 8 caractères sinon affichage de "text-danger invisible"*/
    if (mdp.value === "" || mdp.value.length < 8) {
      mdp.style.borderColor = "red";
      messageErreur.classList.remove("invisible");
    } else if (mdp.value.length >= 8) {
      mdp.style.borderColor = "green";
      messageErreur.classList.add("invisible");
    }

    if (message.value === "") {
      message.style.borderColor = "red";
    } else {
      message.style.borderColor = "green";
    }

    if (!cocher.checked) {
      age.style.color = "red";
    } else if (cocher.checked) {
      age.style.color = "green";
    }
}

/******************************FORMULAIRE SIGN IN -> ("email2" & "mdp2")**************************************/

function verifierFormulaire2() {
    /*condition : si email.value contient "@"*/
    if (email.value === "" || !email.value.includes("@")) {
      email.style.borderColor = "red";
    } else if (email.value.includes("@")) {
      email.style.borderColor = "green";
    }

    /*condition : mdp > 8 caractères sinon affichage de "text-danger invisible"*/
    if (mdp.value === "" || mdp.value.length < 8) {
      mdp.style.borderColor = "red";
      messageErreur.classList.remove("invisible");
    } else if (mdp.value.length >= 8) {
      mdp.style.borderColor = "green";
      messageErreur.classList.add("invisible");
    }
}