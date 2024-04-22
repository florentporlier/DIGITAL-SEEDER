import { CompteBancaire, CompteEpargne, CompteCourant } from './compte.js';

const creerBanque = (name) => {
  let comptes = [];

  const information = () => ({
    name,
    nbAccount: comptes.length
  });

  const ajouterCompte = (nom, solde, type = 'standard', tauxInteret = 0, limiteDecouvert = 0) => {
    let nouveauCompte;
    switch (type) {
      case 'epargne':
        nouveauCompte = new CompteEpargne(nom, solde, tauxInteret);
        break;
      case 'courant':
        nouveauCompte = new CompteCourant(nom, solde, limiteDecouvert);
        break;
      default:
        nouveauCompte = new CompteBancaire(nom, solde);
        break;
    }
    comptes.push(nouveauCompte);
    return nouveauCompte;
  };

  const trouverCompte = (nom) => {
    return comptes.find(compte => compte.getInformation().nom === nom);
  };

  const transferer = (nomSource, nomDestination, montant) => {
    const compteSource = trouverCompte(nomSource);
    const compteDestination = trouverCompte(nomDestination);
    if (compteSource && compteDestination && compteSource.getInformation().solde >= montant) {
      compteSource.retrait(montant);
      compteDestination.depot(montant);
    } else {
      throw new Error('Transfert impossible.');
    }
  };

  return { information, ajouterCompte, trouverCompte, transferer };
};

export default creerBanque;
