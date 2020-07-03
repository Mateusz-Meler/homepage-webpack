import "../scss/main.scss";
import moment from "moment";

console.log(moment().startOf("day").fromNow());

const firstName = "Mateusz";
const age = 27;

console.log(firstName);
console.log(age);

alert(`Siemanko z tej strony ${firstName}`);

function calculet(age, firstName) {
  console.log(`Siema, nazywam się ${firstName} i mam ${age} lat`);
}

const calculate = (myNumber) => myNumber * 7;
console.log(calculate(8));

const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("navigation--open");
});

fetch('https://api.github.com/users/mateusz-meler/repos?sort=created&direction=asc')
  .then((resp) => resp.json())
  .then((resp) => {
    for (let repo of resp) {
      const {name, html_url} = repo;
      const repositoryList = document.querySelector('.list--js');
      const myTemplate = `<li class=list__item>
      ${name} <a href="${html_url}" title="link do repozytorium ${name} na githubie">link do githuba</a> 
      </li>`;
      repositoryList.innerHTML += myTemplate;
    }
  })
  .catch((error) => {
    console.log("error");
  });


const navigation = document.querySelector(".navigation__link--home-page--js");
navigation.addEventListener("mouseenter", () =>
  navigation.classList.add("yellow-class")
);
navigation.addEventListener("mouseleave", () =>
  navigation.classList.remove("yellow-class")
);

const navigation_2 = document.querySelector(".navigation__link--notes--js");
navigation_2.addEventListener("mouseenter", () =>
  navigation_2.classList.add("yellow-class")
);
navigation_2.addEventListener("mouseleave", () =>
  navigation_2.classList.remove("yellow-class")
);

const navigation_3 = document.querySelector(".navigation__link--tasks--js");
navigation_3.addEventListener("mouseenter", () =>
  navigation_3.classList.add("yellow-class")
);
navigation_3.addEventListener("mouseleave", () =>
  navigation_3.classList.remove("yellow-class")
);

const navigation_4 = document.querySelector(".top--js");
navigation_4.addEventListener("mouseenter", () =>
  navigation_4.classList.add("yellow-class")
);
navigation_4.addEventListener("mouseleave", () =>
  navigation_4.classList.remove("yellow-class")
);