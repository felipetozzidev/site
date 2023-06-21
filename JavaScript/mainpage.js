var inf = [document.getElementById("input-password"), document.getElementById("input-email")]


function tomainpage()
{
    if (inf[0].value == "" || inf[1].value == "") {
        document.getElementById("input-email").style.borderBottom = "1px red dotted"
        document.getElementById("input-password").style.borderBottom = "1px red dotted"
    } else 
    {
        document.getElementById("input-email").style.border = "none"
        document.getElementById("input-password").style.border = "none"
        window.location.href = "mainpage/main.html"
    }
}