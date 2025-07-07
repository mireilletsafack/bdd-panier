Feature: Gestion du panier d'articles

  Scenario: Ajouter un article normal
    Given un panier vide
    When j’ajoute "Clé USB" avec la quantité 2 et le prix 10
    Then le panier doit contenir 1 article
    And le total du panier doit être 20

  Scenario: Ajouter un article avec une quantité nulle
    Given un panier vide
    When j’ajoute "Stylo" avec la quantité 0 et le prix 1
    Then le panier doit contenir 0 article
    And le total du panier doit être 0

  Scenario: Ajouter un article avec une quantité négative
    Given un panier vide
    When j’ajoute "Batterie" avec la quantité -3 et le prix 10
    Then une erreur doit être levée

  Scenario: Ajouter un article avec un prix élevé
    Given un panier vide
    When j’ajoute "Téléviseur" avec la quantité 1 et le prix 99999.99
    Then le panier doit contenir 1 article
    And le total du panier doit être 99999.99

