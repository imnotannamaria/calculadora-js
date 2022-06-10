function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

function ChangeToLightMode() {
    document.getElementById("background-light-mode").style.backgroundColor = "#EEF1F6";

    document.getElementById("calculator-background-light-mode").style.backgroundColor = "#FFFF";

    document.getElementById("sreen-background-light-mode").style.backgroundColor = "#EFEFEF";
}