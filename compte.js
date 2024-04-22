class CompteBancaire {
    constructor(nom, solde) {
      this.nom = nom;
      this.solde = solde;
      this.historique = [];
    }
  
    depot(montant) {
      if (montant <= 0) {
        throw new Error("Le montant doit être positif.");
      }
      this.solde += montant;
      this.historique.push({ type: "dépôt", montant });
    }
  
    retrait(montant) {
      if (montant <= 0) {
        throw new Error("Le montant doit être positif.");
      }
      if (montant > this.solde) {
        throw new Error("Fonds insuffisants pour le retrait.");
      }
      this.solde -= montant;
      this.historique.push({ type: "retrait", montant });
    }
  
    getHistorique() {
      return this.historique;
    }
  
    getInformation() {
      return { nom: this.nom, solde: this.solde };
    }
  }
  
  class CompteEpargne extends CompteBancaire {
    constructor(nom, solde, tauxInteret) {
      super(nom, solde);
      this.tauxInteret = tauxInteret;
    }
  
    ajouterInteret() {
      const interet = this.solde * (this.tauxInteret / 100);
      this.solde += interet;
      this.historique.push({ type: "intérêt", montant: interet });
    }
  }
  
  class CompteCourant extends CompteBancaire {
    constructor(nom, solde, limiteDecouvert) {
      super(nom, solde);
      this.limiteDecouvert = limiteDecouvert;
    }
  
    retrait(montant) {
      if (montant <= 0) {
        throw new Error("Le montant doit être positif.");
      }
      if (this.solde - montant < -this.limiteDecouvert) {
        throw new Error("Opération refusée. Limite de découvert dépassée.");
      }
      super.retrait(montant);
    }
  }
  
  export { CompteBancaire, CompteEpargne, CompteCourant };
  