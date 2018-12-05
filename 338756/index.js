function id (valor_campo) {return document.getElementById(valor_campo);}

function getValor (valor_campo) {return document.getElementById(valor_campo).nodeValue;}

function nums ()
{	
  var inicio = getValor("num1");
  var FIM = getValor("num2");
  var res = '';
  while (inicio <= FIM)
  {
    res += `${inicio}<br>`;
    inicio++;
  }
  id("demo").innerHTML = res;
}