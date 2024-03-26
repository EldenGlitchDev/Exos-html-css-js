var tailleTab = parseInt(prompt("Saisissez la taille du tableau ! (Ne rien taper pour arrêter prématurément la saisie): "));
var tableau = [];
for(var i = 0; i < tailleTab ; i++) // démarrer le tableau à 0 ; boucle jusqu'à la valeur max du tableau saisie par l'utilisateur ; augmentation +1 avec incrémenatin i++
{
    var element = prompt ("Entrer élément " + (i + 1) + " :"); // (i+1) pour que "Entrer élément" comment par "Entrer élément 1" et pas "Entrer l'élément 0"
        tableau.push(element); // ajoute un élément dans le tableau
        
        if (element=="") //stop la saisie du tableau si l'utilisateur n'entre aucune donnée
        {
            break
        }
}

console.log("Le tableau est : ", tableau);
alert (tableau);