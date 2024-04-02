/*var x=0;
var y=0;
var produit

function tmultiplication()
{
        produit=x*y;
        x=parseInt(prompt("Saisissez le chiffre 'x'"));
        y=parseInt(prompt("Saisissez le chiffre 'y'"));
        console.log(produit)
        return produit;
        
    } 
    
    produit=tmultiplication()
    alert("Le résultat de "+x+" * " +y+ " = " + produit)*/
    

function tmultiplication()
    {
        x=prompt("Tapez la table de multiplication que vous voulez avoir svp");
        var produit=0;
        for(var i=0;i<=10;i++)
        {
            produit=i*x
            console.log(produit) 
        }
    }
tmultiplication()