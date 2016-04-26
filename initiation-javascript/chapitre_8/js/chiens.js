// TODO : ajoutez ici la définition de l'objet Chien
var Chien = {
    nom: "",
    race: "",
    taille: 0,
    cri: "",
    init: function(va_nom,va_race,va_taille,va_cri){
        this.nom = va_nom;
        this.race = va_race;
        this.taille = va_taille;
        this.cri = va_cri;
    },  
    aboyer: function(){
        return this.cri + "! " + this.cri + "! ";
    }
}

var crokdur = Object.create(Chien);
crokdur.init("Crokdur", "mâtin de Naples", 75,"Grrr");
console.log(crokdur.nom + " est un " + crokdur.race + " mesurant " + crokdur.taille + " cm");
console.log("Tiens, un chat ! " + crokdur.nom + " aboie : " + crokdur.aboyer());

var pupuce = Object.create(Chien);
pupuce.init("Pupuce", "bichon", 22,"Kali");
console.log(pupuce.nom + " est un " + pupuce.race + " mesurant " + pupuce.taille + " cm");
console.log("Tiens, un chat ! " + pupuce.nom + " aboie : " + pupuce.aboyer());