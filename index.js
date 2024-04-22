import creerBanque from './banque.js';
import { CompteEpargne, CompteCourant } from './compte.js'; // Cette ligne est ajoutée pour les imports manquants.

const maBanque = creerBanque("DSB");

// Création de comptes
const compteKamesh = maBanque.ajouterCompte("Kamesh", 1000, 'epargne', 2);
const compteLimane = maBanque.ajouterCompte("Limane", 500, 'courant', 0, 100);
const compteLudovic = maBanque.ajouterCompte("Ludovic", 9000, 'courant', 200, 700);
const compteFlorent = maBanque.ajouterCompte("Florent", 5000, 'epargne', 200, 300);
const compteMusa = maBanque.ajouterCompte("Musa", 3000, 'epargne', 100, 200);
const compteNathan = maBanque.ajouterCompte("Nathan", 1500, 'courant', 50, 200);
const compteIssam = maBanque.ajouterCompte("Issam", 2500, 'courant', 100, 300);
const compteAbdelkrim = maBanque.ajouterCompte("Abdelkrim", 3500, 'courant', 150, 400);
const compteDamien = maBanque.ajouterCompte("Damien", 2000, 'epargne', 50, 100);

// Simulation de quelques transactions
try {
  compteKamesh.depot(200);
  compteKamesh.retrait(100);
  compteLimane.depot(150);
  compteLimane.retrait(50);
  compteLudovic.depot(500);
  compteLudovic.retrait(300);
  compteFlorent.depot(500);
  compteFlorent.retrait(300);
  compteMusa.depot(100);
  compteMusa.retrait(50);
  compteNathan.depot(200);
  compteNathan.retrait(100);
  compteIssam.depot(300);
  compteIssam.retrait(150);
  compteAbdelkrim.depot(400);
  compteAbdelkrim.retrait(200);
  compteDamien.depot(100);
  compteDamien.retrait(50);

  // Ajout d'intérêt au compte épargne de Kamesh
  if (compteKamesh instanceof CompteEpargne) {
    compteKamesh.ajouterInteret();
  }

  // Tentative de retrait au-delà de la limite de découvert pour Limane
  try {
    compteLimane.retrait(600);
  } catch (error) {
    console.error("Erreur lors du retrait pour Limane:", error.message);
  }

  // Transfert entre les comptes
  maBanque.transferer("Kamesh", "Limane", 100);
  maBanque.transferer("Ludovic", "Florent", 9000);

  // Affichage des informations et de l'historique
  console.log("Compte de Kamesh après transactions :", compteKamesh.getInformation());
  console.log("Historique de Kamesh :", compteKamesh.getHistorique());
  console.log("Compte de Limane après transactions :", compteLimane.getInformation());
  console.log("Historique de Limane :", compteLimane.getHistorique());
  console.log("Compte de Ludovic après transactions :", compteLudovic.getInformation());
  console.log("Historique de Ludovic :", compteLudovic.getHistorique());
  console.log("Compte de Florent après transactions :", compteFlorent.getInformation());
  console.log("Historique de Florent :", compteFlorent.getHistorique());
  console.log("Compte de Musa après transactions :", compteMusa.getInformation());
  console.log("Historique de Musa :", compteMusa.getHistorique());
  console.log("Compte de Nathan après transactions :", compteNathan.getInformation());
  console.log("Historique de Nathan :", compteNathan.getHistorique());
  console.log("Compte de Issam après transactions :", compteIssam.getInformation());
  console.log("Historique de Issam :", compteIssam.getHistorique());
  console.log("Compte de Abdelkrim après transactions :", compteAbdelkrim.getInformation());
  console.log("Historique de Abdelkrim :", compteAbdelkrim.getHistorique());
  console.log("Compte de Damien après transactions :", compteDamien.getInformation());
  console.log("Historique de Damien :", compteDamien.getHistorique());
} catch (error) {
  console.error(error.message);
}

// Affichage des informations générales de la banque
console.log(maBanque.information());
