var N1, N2, operator, result

N1 = prompt ("Saisissez le premier nombre entier")
operator = prompt ("Saisissez l'opérateur")
N2 = prompt ("Saisissez le deuxième nombre entier")

switch (operator)
{
    case "-":
        result = N1 - N2;
        break;
    case "+":
        result = +N1 + +N2;
        break;
    case "*":
        result = N1 * N2;
        break;
    case "/":
        if (N2 == 0)
            {
                alert ("Vous ne pouvez pas diviser par 0");
            }
        result = N1 / N2;
        break;
    default:
        alert ("Opérateur saisi invalide. Veuillez utiliser : -, +, * ou /")
        
}
alert (result)