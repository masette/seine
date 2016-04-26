// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
    detenteur: "",
    solde: 0,
    initCB: function (va_detenteur, va_solde) {
        this.detenteur=va_detenteur;
        this.solde=va_solde;
    },
    decrire: function (){
        return "Titulaire "+this.detenteur+" solde "+this.solde;    
    },
    crediter: function(va_montant){
        this.solde+=va_montant;
    },
    debiter: function (va_montant){
        this.crediter(-va_montant);
    }
};

var CompteEpargne = Object.create(CompteBancaire);
CompteEpargne.tauxInterets = 0.00;
CompteEpargne.initCE = function(va_detenteur,va_solde,va_tauxInterets){
        this.initCB(va_detenteur,va_solde);
        this.tauxInterets=va_tauxInterets;
    };
CompteEpargne.ajouterInterets = function(){
        this.solde*=(1+this.tauxInterets);
};
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());