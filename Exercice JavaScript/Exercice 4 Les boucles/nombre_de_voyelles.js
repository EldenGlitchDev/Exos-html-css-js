/*function compterVoyelles(mot)
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

console.log("Le mot " + motUtilisateur + " contient "+ nombreVoyelles + " voyelles");*/


//Deuxième essai
let mot = prompt("Saisissez un mot")
mot=mot.toLowerCase() //convertir mot en minuscule
let compteurVoyelles = 0
var voyelles = "aeiouy"

for (let i=0;i<mot.length;i++)
    {
        if (voyelles.indexOf(mot.substring(i, i+1)) !== -1) /* La méthode indexOf() renvoie l'indice de la première occurence de la valeur cherchée au sein de la chaîne courante (à partir de indexDébut). Elle renvoie -1 si la valeur cherchée n'est pas trouvée. */
            {                                               /* La méthode substring() retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin. */
                compteurVoyelles++
            }
    }

console.log(compteurVoyelles)
alert("Le mot "+mot+" possède "+compteurVoyelles+" voyelles.")