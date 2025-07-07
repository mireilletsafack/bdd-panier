const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const Panier = require('../../src/panier');

let panier;
let erreur;

Given('un panier vide', function () {
  panier = new Panier();
});

When("j’ajoute {string} avec la quantité {int} et le prix {float}", function (nom, quantite, prix) {
  try {
    panier.ajouterArticle(nom, quantite, prix);
  } catch (e) {
    erreur = e;
  }
});

Then('le panier doit contenir {int} article', function (attendu) {
  assert.strictEqual(panier.getNombreArticles(), attendu);
});

Then('le total du panier doit être {float}', function (totalAttendu) {
  assert.strictEqual(panier.getTotal(), totalAttendu);
});

Then('une erreur doit être levée', function () {
  assert.ok(erreur instanceof Error);
});
