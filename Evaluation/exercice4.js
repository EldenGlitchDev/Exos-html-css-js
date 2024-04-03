//Afficher prix à payer PAP
//Détailler remise REM
//Frais de port PORT


var PU = prompt("Ecrivez le prix unitaire PU du produit")
var QTECOM = prompt ("Ecrivez la quantité commandée QTCOM")
var PAP
var REM = 0
var PORT
var TOT = (PU*QTECOM)

console.log(TOT)
alert("Le TOT est de " +TOT)
PAP=TOT
if(TOT>100 && TOT<201)
    {
        PAP = TOT * (1-5/100)
        console.log(PAP)
        /*alert("La remise est de " + REM)*/
    }

else if(TOT>200)
    {
        PAP = TOT * (1-10/100)
        console.log(PAP)
        /*alert("La remise des de " + REM)*/
    }


/*PAP=REM*/
alert("Le prix total à payer avec remise est de " + PAP)
console.log(PAP)
PORT = PAP * 0.02

if(PAP>500)
    {
        PORT = 0
    }

    else if (PORT<6)
        {
            PORT = 6
        }

resfinal = PAP + PORT
console.log(resfinal)









/*if(PAP<500)
    {
        /*PAP = TOT - REM + PORT
        var res = PAP+PORT
        console.log(res)
        alert("Le prix à payer PAP de vos articles est de " + res)
    }

else if(PAP>500)
    {
        console.log(PAP)
        alert("Le prix à payer PAP de vos articles est de " + PAP)
    }*/

