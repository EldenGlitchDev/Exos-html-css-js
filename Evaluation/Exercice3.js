/*1) Saisie du prénom
2) Prénom trouvé -> éliminer prénom
3) Décaler cases
4) Mettre un blanc à la dernière case
5) Si prénom n'est pas trouvé alors message d'erreur */


/*Essai 1*/

/*var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]
var prenom
                                                                                                                                        //var suppression = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]
var suppression = 1

function filtrelettre()
{
    filtre=new RegExp("^[a-z+[A-Z]+$");
    return;
}

for (let i = 0; i < 10; i++)
    {
        console.log(tab)
                                                                                                                                                //alert(tab)
        prenom=prompt("Saisir un prénom du tableau")

            if(prenom!==tab)
                {
                    tab.splice(1,suppression)
                }
            else {
                prompt("Erreur")
            }
    }*/
 
/*Essai 2*/

var prenomS = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"]

console.log(prenomS)
function suppressionPrenom(prenom)
{
    index=prenomS.indexOf(prenom); /*(La méthode indexOf() renvoie le premier indice pour lequel on trouve un élément donné dans un tableau. Si l'élément cherché n'est pas présent dans le tableau, la méthode renverra -1)*/
        if (index !== -1)
        {
            prenomS.splice(index,1); /*(La méthode splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments à même le tableau)*/
            console.log("Prénom supprimé")
            console.log(prenomS)
            alert("Prénom supprimé")
        }
        else
        {
            console.log("Prénom non trouvé")
            alert("Prénom non trouvé")
        }
}

let PrenomAsupprimer=prompt("Entrez un prénom")
suppressionPrenom(PrenomAsupprimer)



/*let PrenomAsupprimer
let prenomExiste = false

while (!prenomExiste) /* le "!" est égal à NOT, donc inversera le "false" de la variable 'prenomExiste' en "true"
    {
        PrenomAsupprimer = prompt ("Entrez un prénom")
            if (prenomS.includes(PrenomAsupprimer)) /*La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon.
                {
                    prenomExiste=true
                }
            else
                {
                console.log("Prénom non présent dans la liste")
                alert("Prénom non présent dans la liste")
                }
    }

suppressionPrenom(PrenomAsupprimer)*/


