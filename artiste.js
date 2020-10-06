 export class Artiste {
    constructor(nom, dateDeNaissance, pays, discographies = []) {
        this.nom = nom;
        this.date = dateDeNaissance;
        this.pays = pays;
        this.discographies = discographies;
    }
    afficher() {
        console.log( this.nom + " née le " + this.date + " en " + this.pays + "\nliste de l'album  (" + this.discographies+")");
    }

}

//var nvArtist = new Artiste("Arafat","15/03/1987","C.I.",['Kpangor','Kong','Zropoto']);
//nvArtist.afficher();
//console.log(nvArtist.afficher);