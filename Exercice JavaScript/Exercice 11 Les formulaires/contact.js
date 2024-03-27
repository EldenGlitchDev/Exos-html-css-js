function verification ()
    {
        societe = document.getElementById("societe").value
        personne_a_contacter = document.getElementById("personne_a_contacter").value
        ville = document.getElementById("ville").value
        codepostal = document.getElementById("code_postal").value
        email = document.getElementById("email").value
        filtrecar = new RegExp("^[A-Za-z]+$")
        filtrenum = new RegExp("^([0-9]{5})+$")
        filtremail = new RegExp ("^[_a-z0-9-]+@[_a-z0-9-]+.[a-z0-9]+$")

        resultat = filtrecar.test(societe)
        if (resultat==false)
        {
            alert("Entrez au moins un caractère")
        }
        
        resultat = filtrecar.test(personne_a_contacter)
        if (resultat==false)
        {
            alert("Entrez au moins un caractère")
        }

        resultat = filtrenum.test(codepostal)
        if (resultat==false)
        {
            alert("Entrez au moins 5 caractères numériques")
        }

        resultat = filtrecar.test(ville)
        if (resultat==false)
        {
            alert("Entrez au moins un caractère")
        }

       
        resultat = filtremail.test(email)
        if (resultat==false)
        {
            alert("Doit comporter le caractère '@'")
        }
    }

let remove = document.getElementById("remove")
let choixElement = document.getElementById("liste_deroulante")
choixElement.addEventListener("change", () => {remove.remove()})
