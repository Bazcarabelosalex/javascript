

document.write('<img src="fotos/descarga.png" width="150" height="150" alt="Algo falla no logo">');
document.write('<h1>Benvidos a nuestra tienda</h1>'); // podemos inserir HTML
document.write('<h3>El maximo permitido son 3 articulos por persona.<h3> '); //non fai caso dos saltos de liña
document.write('<h3>Gracias por comprar en nuestra tienda <br><h3>');
document.write('<hr>');







Compra1 = prompt("Cual es el precio del primer articulo?   ");
Compra2 = prompt("Cual es el precio del primer articulo?   ");
Compra3 = prompt("Cual es el precio del primer articulo?   ");


 Dinero1 = parseInt(Compra1);
 Dinero2 = parseInt(Compra2);
 Dinero3 = parseInt(Compra3);


 dinero = Dinero1 + Dinero2 + Dinero3 ;
 document.write  ("<h4>El precio del primer articulo es :<h4>" +Compra1+ "€"  + "<h4>El precio del Segundo articulo es :<h4>" +Compra2+ "€"  +"<h4>El precio del tercer articulo es :<h4>" +Compra3+ "€") ;
 document.write ()
 document.write ("<h4>Este es el coste de los articulos<h4>" + dinero + "€");

iva = dinero * (0.04);

total = iva + dinero 
document.write ()
document.write ("<h4>El precio final con iva es de<h4> " + total + " €" ); 
