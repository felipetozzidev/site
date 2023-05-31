var data = [document.querySelector('#input-email'), document.querySelector('.input-password')]
var submit = document.querySelector('.button-submit')

function clicar()
{
    if(data[0].value == "" || data[1].value == "")
    {
        document.getElementById("input-email").style.borderBottom = "2px red dotted"
        document.getElementById("input-password").style.borderBottom = "2px red dotted"        
    } else {
        document.getElementById("input-email").style.border = "none"
        document.getElementById("input-password").style.border = "none"
        window.location.href = "login.html"
        cont = 0
    }
}
