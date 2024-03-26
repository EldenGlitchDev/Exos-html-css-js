var x, y

x = prompt ("Premier chiffre x");
y = prompt ("Deuxième chiffre y");

function produit(x,y)
{
    let resultat = x * y;
    document.getElementById("Produit").innerHTML="Le produit de " +x+ " x " +y+ " est "+ resultat+ "."
    return resultat;
}

function carre(x)
{
    let resultatcarre = x * x * x;
    document.getElementById("Carré").innerHTML="Le cube de " +x+ " est "  +resultatcarre+ "."
    return resultatcarre;
}

resultat = produit(x,y)
console.log (resultat)

resultatcarre = carre(x)
console.log (resultatcarre)


