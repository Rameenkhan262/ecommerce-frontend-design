function initDropdowns(){

document.querySelectorAll(".dropdown").forEach(dropdown => {

  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  if(!toggle || !menu) return;

  toggle.addEventListener("click", (e) => {
    e.stopPropagation();

    document.querySelectorAll(".dropdown-menu").forEach(m => {
      if (m !== menu) {
        m.classList.remove("active");
      }
    });

    menu.classList.toggle("active");
  });

});

// close dropdowns when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach(menu => {
    menu.classList.remove("active");
  });
});

const countryItems = document.querySelectorAll(".country-dropdown .dropdown-menu li");
const selectedCountry = document.getElementById("selected-country");
const selectedFlag = document.getElementById("selected-flag");

countryItems.forEach(item => {
  item.addEventListener("click", () => {

    const clickedFlag = item.querySelector("img");
    const clickedText = item.childNodes[2].nodeValue.trim();

    const currentFlagSrc = selectedFlag.src;

    // change header flag
    selectedFlag.src = clickedFlag.src;

    // swap dropdown flag
    clickedFlag.src = currentFlagSrc;

    // swap country name text
    item.childNodes[2].nodeValue = " " + selectedCountry.dataset.country;

    // store new country
    selectedCountry.dataset.country = clickedText;

    // close dropdown
    item.closest(".dropdown-menu").classList.remove("active");

  });
});

}

const categories = document.querySelectorAll(".category-list li");

categories.forEach(item => {

item.addEventListener("click", () => {

document.querySelectorAll(".category-list li")
.forEach(el => el.classList.remove("active"));

item.classList.add("active");

});

});