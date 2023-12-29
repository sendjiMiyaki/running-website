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

/**********************************SHOW PASSWORD****************************************/

// // code issue du 'module-web-2-tptest-sendjiMiyaki'

// // afficher ou cacher le mdp quand on clique sur l'image avec l'oeil //
// // img et mdp
// let img = document.getElementById("show-password-image");
// let mdp = document.getElementById("mdp");

// // état actuel de mdp
// let motDePasseCache = true;

// // quand clique sur img
// img.addEventListener("click", function() {
//   if (motDePasseCache) {
//     // si caché : on affiche
//     mdp.type = "text";
//     motDePasseCache = false;
//   } else {
//     // sinon on masque
//     mdp.type = "password";
//     motDePasseCache = true;
//   }
// });

/******************************FORMULAIRE SIGN UP**************************************/

let prenom = document.getElementById("prenom");
let nom = document.getElementById("nom");
let email = document.getElementById("email");
// let mdp = document.getElementById("mdp");
let message = document.getElementById("message");

/*email et mdp conditions*/
let maj = /[A-Z]/; //alphabet en majuscule
let special = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/; //tous les caractères spéciaux

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

    /*condition : mdp > 8 caractères, une majuscule et un caractère spécial sinon affichage de "text-danger invisible"*/
    if (mdp.value === "" || mdp.value.length < 8 || !mdp.value.match(special) || !mdp.value.match(maj)) {
      mdp.style.borderColor = "red";
      messageErreur.classList.remove("invisible");
    } else if (mdp.value.length >= 8 && mdp.value.match(special) && mdp.value.match(maj)) {
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

    if (verifierFormulaire == TRUE) { //si quand on exécute verifierFormulaire ça renvoie True (donc que le formualaire est correct) alors on recupere des infos pour les réutiliser quand l'utilisateur va se connecter (signin)
      const userInformation = {
          prenom: prenom.value,
          nom: nom.value,
          email: email.value,
          mdp: mdp.value,
      };
    
      // prenom, nom, email et mdp.value deviennent des 'chaînes JSON' et sont stockés dans 'localStorage'
      for (const key in userInformation) {
          if (userInformation[key] !== "") {
              localStorage.setItem(key, JSON.stringify(userInformation[key]));
          }
      }
      // console.log(localStorage);
      // window.location.href = "index.html"; // renvoie à la page index.html
    }
}

/******************************FORMULAIRE SIGN IN -> ("email2" & "mdp2")**************************************/

function verifierFormulaire2() {
  // on récupère les infos qu'on avait stocké dans le 'localStorage'
  const storedUserInformation = JSON.parse(localStorage.getItem('userInformation'));

  // si le localStorage est vide ou que les infos ne correspondent pas => on renvoie vers la page signup
  if (!storedUserInformation || email.value !== storedUserInformation.email || mdp.value !== storedUserInformation.mdp) {
      window.location.href = 'signup.html';
  } else {
      // sinon on redirige vers la page pour s'incrire à une course
      window.location.href = 'register.html';
  }
}
/******************************FORMULAIRE REGISTER**************************************/

function verifierFormulaire3() {
  window.location.href = "index.html"; // renvoie à la page index.html
}