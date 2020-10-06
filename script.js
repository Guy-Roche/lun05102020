
var Variete = function(nom, nomCreateur, dateCreation, familleMusical)
{
    this.name = nom;
    this.creator = nomCreateur;
    this.date = dateCreation;
    this.famille = familleMusical;

}
Variete.prototype.afficher =function () {
    console.log(this.name+" a été crée par "+this.creator+" en "+this.date+" et c'est un style musical "+this.famille);
}


var MusiqueAfricaine = new Variete("Coupé Décalé","Douk Saga","2000","");
MusiqueAfricaine.afficher()
MusiqueAfricaine.paysDorigine = "Côte d'Ivoire";
MusiqueAfricaine.afficher =function () {
    console.log(this.name+" a été crée par "+this.creator+" en "+this.date+" et c'est un style musical de "+this.famille+" "+this.paysDorigine);
}
MusiqueAfricaine.afficher();
var MusiqueLatine = new Variete("Zouglou","Bilé Didier","1990","");
MusiqueLatine.prototype = MusiqueAfricaine;
MusiqueLatine.pasDeDanse = "Ambiance facile";
MusiqueLatine.afficher =function () {
    console.log(this.name+" a été crée par "+this.creator+" en "+this.date+" et c'est un style musical "+this.famille+" "+this.prototype.paysDorigine+" "+this.pasDeDanse);
}
MusiqueLatine.afficher();
