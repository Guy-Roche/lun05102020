class GenreMusical {

    constructor(nom, nomCreateur, dateCreation, familleMusical, paysDorigine, pasDeDanse)
    {
        this.name = nom;
        this.creator = nomCreateur;
        this.date = dateCreation;
        this.famille = familleMusical;
        this.pays= paysDorigine;
        this.pas= pasDeDanse;
    }
    afficher()
    {
        console.log(this.name+" a été crée par "+this.creator+" en "+this.date+" et c'est un style musical "+this.famille+" "+this.pays+" "+this.pas);
    }

}
var genrMusical = new GenreMusical("Zouglou","Bilé Didier","1990",""," Gagnoa "," wôyô")
genrMusical.afficher();