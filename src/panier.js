class Panier {
  constructor() {
    this.articles = [];
  }

  ajouterArticle(nom, quantite, prix) {
    if (quantite < 0) {
      throw new Error("Quantité invalide");
    }
    if (quantite === 0) return;

    this.articles.push({ nom, quantite, prix });
  }

  getNombreArticles() {
    return this.articles.length;
  }

  getTotal() {
    return this.articles.reduce((total, article) => {
      return total + article.quantite * article.prix;
    }, 0);
  }
}

module.exports = Panier;

