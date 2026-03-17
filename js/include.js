function loadComponent(id, file) {
  return fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

Promise.all([
  loadComponent("header", "../components/header.html"),
  loadComponent("footer", "../components/footer.html")
]).then(() => {

  // Re-run dropdown scripts AFTER header loads
  initDropdowns();

});