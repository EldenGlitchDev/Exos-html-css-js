var MyTableau = []
let moy = 0

/*while (true)
{

    var A = prompt ("Saisissez des chiffres entiers")
        if (A == 0) {
            break;
        }
        MyTableau.push(A)
    }
    
    console.log ("Les chiffres saisies sont ", MyTableau)*/
    
    
// var somme = 0

// let compteur=0


// for (let i=0; i<100; i++)
//     {
        
        

//         MyTableau[i]=prompt("saisir")
//         somme= +somme + +MyTableau[i]
//         if (MyTableau[i]==""){
//              break
//         }
//         compteur = compteur + 1
//     }

    

// // let somme2 = MyTableau.reduce((ancienne, a)=>{return ancienne+(isNaN(parseInt(a))?0:parseInt(a))}, 0);

// console.log(somme)

// alert ("La somme est de " + somme)

// moy = +somme/(compteur)
// alert ("La moyenne est de " + moy)




var somme = 0

let compteur=0


for (let i=0; i<100; i++)
    {
        
        

        let saisie = prompt("saisir")
        if (saisie=="") {
            break
        }
        somme = somme + parseInt(saisie)
        compteur = compteur + 1
    }

    

// let somme2 = MyTableau.reduce((ancienne, a)=>{return ancienne+(isNaN(parseInt(a))?0:parseInt(a))}, 0);

console.log(somme)

alert ("La somme est de " + somme)

moy = somme/compteur
alert ("La moyenne est de " + moy)