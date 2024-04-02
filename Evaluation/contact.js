document.addEventListener('DOMContentLoaded', function (){
    const formulaire = document.getElementById("formulaire");
    formulaire.addEventListener('submit', function (e){
    {
        e.preventDefault()


        valide = true
        nom = document.getElementById("nom").value
        prenom = document.getElementById("prenom").value
        sexeF = document.getElementById("sexeF").value
        sexeM = document.getElementById("sexeM").value
        date_de_naissance = document.getElementById("datedeNaissance").value
        code_postal = document.getElementById("code_postal").value
        email = document.getElementById("email").value
        sujet = document.getElementById("sujet").value
        votre_question = document.getElementById("votre_question").value
        traitement_informatique = document.getElementById("traitement_informatique").value

        filtrecar = new RegExp("^[A-Za-z]+$")
        filtrenum = new RegExp("^([0-9]{5})+$")
        filtremail = new RegExp (/^[a-z0-9.-]+@[a-z0-9.-]+.[a-z0-9]+$/)
        filtredate = new RegExp (/^[0-9]+-[0-9]+-[0-9]+$/)

        resultat = filtrecar.test(nom)
        if (resultat == false)
            {
                valide=false
                alert("Entrez au moins un caractère")
            }

        resultat = filtrecar.test(prenom)
        if(resultat == false)
            {
                valide=false
                alert("Entrez au moins un caractère")
            }

        if (sexeF.checked == false && sexeM.checked == false)
            {
                valide=false
                alert("Cochez un genre")
            }

        resultat = filtredate.test(date_de_naissance)
        if (resultat == false)
            {
                valide=false
                alert("Entrez une date de naissance valide")
            }

        resultat = filtrenum.test(code_postal)
        if (resultat == false)
            {
                valide=false
                alert("Entre au moins 5 caractères numériques")
            }

        resultat = filtremail.test(email)
        if (resultat == false)
            {
                valide=false
                alert("Entrez un email valide")
            }

        resultat = filtrecar.test(sujet)
        if (resultat == false)
            {
                valide = false
                alert ("Sélectionnez un sujet")
            }

        resultat = filtrecar.test(votre_question)
        if (resultat == false)
            {
                valide=false
                alert("Entrez au moins un caractère")
            }

        /*resultat = filtrecar.test(traitement_informatique)
        if (resultat == false)
            {
                valide = false
                alert ("Veuillez accepter le traitement de ce formulaire")
            }*/

        valid=document.getElementById("traitement_informatique")
        if(valid.checked==false)
        {
            valide=false
            alert("Cochez la case")
        }

        if (valide)
            {
                console.log("Formulaire valide et prêt à être soumis")
                formulaire.submit()
            }

            }
        })
    })

    const choisi = document.getElementById("remove")
    const choixElement = document.getElementById("sujet")
    choixElement.addEventListener("change", () =>
        {
            choisi.remove()
        })