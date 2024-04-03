/*var saisie
//var age//
var tableau=[]



for(var i=0;i!=100;i++)

    {
        saisie=prompt("Entre votre âge")
        tableau.push(saisie)

        if(saisie<20)
            {
                console.log(saisie)
            }

        if(saisie>=20 && saisie<=40)
            {
                console.log(saisie)
                
            }

        if(saisie>40 && saisie<=100)
            {
                console.log(saisie)
                
            }
        if(saisie<=101)
            {
                break
            }
        
    }
console.log(tableau)
alert("stop")*/


//var saisie
//var age//
//var tableau=[]



/*for(var i=0;i!=100;i++)

    {
        saisie=parseInt(prompt("Entre votre âge"))
        tableau.push(saisie)

        if(saisie<21)
            {
                console.log(saisie)
            }

        if(saisie>20 && saisie<42)
            {
                console.log(saisie)
            }

        if(saisie>41 && saisie<=100)
            {
                console.log(saisie)
                
            }
            else
            {
                break
            }
        
    }
console.log(tableau)
alert("stop")*/

/*var saisie
var tableau=[] 


for(var i=0;i!=100;i++)
    {
        saisie=prompt("Entrez votre âge")
        tableau.push(saisie)

        if(saisie<20)
            {
                console.log(saisie)
            }

        if(saisie>20 && saisie<40)
            {
                console.log(saisie)
            }

        if(saisie>40 && saisie<100)
            {
                console.log(saisie)
                
            }
         if(saisie>99){
                console.log(saisie);break
            }
        
    }
console.log(tableau)

alert("stop")*/


var nombrejeune = 0
var nombremoyen = 0
var nombrevieux = 0
var age=0

while (age!==100)
    {
        age = parseInt(prompt("Saisissez votre âge :"))

    if (age>=1 && age<20)
        {
            nombrejeune++
            console.log(nombrejeune)
        }

    else if (age>=20 && age<=40)
        {
            nombremoyen++
            console.log(nombremoyen)
        }
    
    else if (age>=40 && age <= 100)
        {
            nombrevieux++
            console.log(nombrevieux)
        }


    else if (age>101)
        {
            break;
        }

    else if (age<0)
        {
            alert("Erreur, retapez votre âge")
        }

    }

console.log("Nombre de moins de 20 ans : " + nombrejeune)
console.log("Nombre d'adultes entre 20 ans et 40 ans : " + nombremoyen)
console.log("Nombre de vieilles personnes : " + nombrevieux)
alert("Le nombre de jeunes est de " + nombrejeune + ", le nombre d'adultes est de " + nombremoyen + ", et le nombre de vieilles personnes est de " + nombrevieux + " .")