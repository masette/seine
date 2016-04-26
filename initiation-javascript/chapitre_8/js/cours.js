var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " santé " + this.sante + " force " + this.force + " XP " + this.xp;
        return description;
    }
};

var perso2 = Object.create(perso);
perso2.nom="christian";

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante -= 20;

// Aurora trouve un bracelet de force
perso2.force = perso.force + 10;

// Aurora apprend une nouvelle compétence
perso.xp = perso.xp + 15;

console.log(perso2.decrire());
