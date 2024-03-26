var str1 = "robert ;dupont ;amiens ;80000"

function strtok (str1, str2, N)
{
    const mots = str1.split(str2);
        const mot = mots[N - 1];
        return mot;
}
    console.log (strtok(str1, ";", 3));





//var N, word //c'est nul
//var str2 = ";" //c'est nul


//function strtok (str1,str2, N) //c'est nul
//{
 // let N = console.log("chapeau" +str2+ "avion" +str2+ "amiens" +str2+ "robert"); //c'est nul
  //  return; //c'est nul
//}

//decoup=strtok(str1,str2) //c'est très nul
//word = str2.split(''); //c'est très très nul
//console.log(word[3]); //c'est très très nul