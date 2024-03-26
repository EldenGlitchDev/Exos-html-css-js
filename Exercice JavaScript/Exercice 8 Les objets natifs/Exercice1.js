//let saisie = parseInt(window.prompt ("Tapez '0' pour arrêter la saisie. Saisissez vos différentes valeurs :"))
// let tableau = [];
// for(var i=0; i<saisie;i++)
// {
//         saisie = parseInt(window.prompt ("Tapez '0' pour arrêter la saisie. Saisissez vos différentes valeurs :"))
//         tableau.push(saisie);
//         if (saisie=="0")
//         {
//             break
//         }
// }

// console.log(saisie)//



/*var tableau = []
var element = Number(window.prompt("Saisir les différentes valeurs. '0' pour arrêter la saisie"));
var nombresaisie = 0
var somme = 0
var moyenne = 0
var compteur = 0

while(true)
{
    element= Number(window.prompt("Saisir les différentes valeurs. '0' pour arrêter la saisie"));
    tableau.push(element);
    nombresaisie ++;
    
    if(element==0)
    {
        break
    }
    somme = somme + element;
    compteur = compteur + 1;
}

moyenne = somme/compteur;
var popped = tableau.pop();
console.log(tableau);console.log(nombresaisie);console.log(somme);console.log(moyenne);
alert(tableau);
alert("Le nombre de saisie est " +nombresaisie);alert("La somme est " +somme);alert("La moyenne est " +moyenne);*/





var tableau = []
var nombresaisie = -1
var somme = 0
var moyenne = 0
var compteur = 0

while(true)
{
    element= Number(window.prompt("Saisir les différentes valeurs. '0' pour arrêter la saisie"));
    tableau.push(element);
    nombresaisie ++;
    
    if(element==0)
    {
        break
    }
    somme = somme + element;
    compteur = compteur + 1;
}

moyenne = somme/compteur;
var popped = tableau.pop();
console.log(tableau);console.log(nombresaisie);console.log(somme);console.log(moyenne);
alert(tableau);
alert("Le nombre de saisie est " +nombresaisie);alert("La somme est " +somme);alert("La moyenne est " +moyenne);

