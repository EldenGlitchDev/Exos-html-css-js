/*var label1 = document.getElementById("label1")
function verif(){
var mathfloor = Math.floor(math.random()*100)}
{
    if (label1<mathfloor)
        {
            alert("Trop petit !!")
        }
            else
            {
                alert("Trop grand !!")
            }

}*/


/*var textbox = document.getElementById("textBox1").value
var mathfloor = Math.floor(Math.random()*100)
function verif (){
}
    if (textbox<mathfloor)
    {
        alert("Trop petit !!");console.log(mathfloor)
    }
        else
        {
            alert("Trop grand !!")
        }*/


        var mathfloor = Math.floor(Math.random()*100);console.log(mathfloor)
        var element = document.getElementById("button1")
        function verif(){
            var textbox = document.getElementById("textBox1").value
            if (textbox<mathfloor)
            {
                alert("Trop petit !!")
            }
                else
                {
                    alert("Trop grand !!")
                }
            }