//leer nuemro ingresado
var getnumber = () => {
var numero = document.getElementById("numero").nodeValue;
}
//  desplegar la tabla de multiplicar 
function genera_tabla() 
{
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // Crea las celdas
    for (var i = 0; i <= 10; i++) {
      // Crea las hileras de la tabla
      var hilera = document.createElement("tr");
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode(i+"x"+"="+i*numero);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      
  
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }
  
    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");
}