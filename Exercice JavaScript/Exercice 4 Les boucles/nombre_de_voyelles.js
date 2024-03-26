function compterVoyelles(mot)
{
mot = mot.toLowerCase(); //convertir mot en minuscule
var voyelles = ["a", "e", "i", "o", "u", "y"]
var compteurVoyelles = 0; 


for (var i = 0; i < mot.lenght; i++) //retourne le nombre de lettres de la chaîne "mot"
    {
        if (voyelles.indexOf(mot.substring(i, i + 1)) !== -1) {
            compteurVoyelles++;
        }
    }

    return compteurVoyelles;

}

var motUtilisateur = prompt("Saisir votre mot : ");
var nombreVoyelles = compterVoyelles(motUtilisateur);

console.log("Le mot " + motUtilisateur + " contient "+ nombreVoyelles + " voyelles");