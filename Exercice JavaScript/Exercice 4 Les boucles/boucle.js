var prenoms = []

while (true) 
{
  var prenom = prompt("Entrez votre prénom: ");
    if (prenom === ""){
        break;
    }
    prenoms.push(prenom);
}

console.log ("Les prénoms saisis sont: ", prenoms);
alert (prenoms)
alert (prenoms.length)