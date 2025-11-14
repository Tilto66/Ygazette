const menuBtn = document.getElementById("menuBtn");
const menuLinks = document.getElementById("menuLinks");

menuBtn.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
document.addEventListener("DOMContentLoaded", function() {
  const contenu = document.getElementById("main-content");
  const popup = document.getElementById("popup");
  const helloText = document.getElementById("hellow"); // peut être null sur d'autres pages

  const prenom = localStorage.getItem("prenom");
  const nom = localStorage.getItem("nom");

  if (!prenom || !nom) {
    // Affiche le popup si c'est la première visite
    popup.style.display = "flex";
    contenu.classList.add("flou");
  } else {
    // Met à jour le texte uniquement si l'élément existe
    if (helloText) {
      helloText.textContent = `Bonjour ${prenom} ${nom}`;
    }
    contenu.classList.remove("flou");
  }

  document.getElementById("saveBtn").addEventListener("click", function () {
    const prenomValue = document.getElementById("prenom").value.trim();
    const nomValue = document.getElementById("nom").value.trim();

    if (prenomValue && nomValue) {
      localStorage.setItem("prenom", prenomValue);
      localStorage.setItem("nom", nomValue);

      if (helloText) {
        helloText.textContent = `Bonjour ${prenomValue} ${nomValue}`;
      }

      popup.style.display = "none";
      contenu.classList.remove("flou");
    } else {
      alert("Merci de remplir les deux champs !");
    }
  });
});
function recherche() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const articles = document.querySelectorAll("#articles a"); // tous les liens d’articles
 
    articles.forEach(article => {
        const text = article.textContent.toLowerCase();
        if (text.includes(input)) {
            article.style.display = "inline-block";
        } else {
            article.style.display = "none";
        }
    });
}
