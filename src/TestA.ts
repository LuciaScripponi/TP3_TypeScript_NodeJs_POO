import { Detalle } from "./Modelos/Modelo A/Detalle";
import { HojaRuta } from "./Modelos/Modelo A/HojaRuta";
import { Vehiculo } from "./Modelos/Modelo A/Vehiculo";

export class TestA{

public static main(){
//PUNTO 3 (Prueba de los metodos de las clases)

console.log(`Vehiculo`);
let vehiculo = new Vehiculo("AC 729 SL","Fiat", "Argo Drive 1.3");

let listaDetalles:Array<Detalle>=[];
let detalle1 = new Detalle(1,2,3,4,5,8);
let detalle2 = new Detalle(55,1,4,78,9,90);
let detalle3 = new Detalle(100,58,74,96,52,1);
listaDetalles.push(detalle1);
listaDetalles.push(detalle2);
listaDetalles.push(detalle3);
let hojaRuta1 = new HojaRuta(new Date("10/13/2022"), 1348, vehiculo, listaDetalles);

let listaDetalles2:Array<Detalle>=[];
let detalle4 = new Detalle(5,7,8,9,2,2);
let detalle5 = new Detalle(3,6,5,88,7,4);
let detalle6 = new Detalle(13,48,25,47,6,5);
listaDetalles2.push(detalle4);
listaDetalles2.push(detalle5);
listaDetalles2.push(detalle6);
let hojaRuta2 = new HojaRuta(new Date("20/08/2020"), 1234, vehiculo, listaDetalles2);

let listaDetalles3:Array<Detalle>=[];
let detalle7 = new Detalle(5,8,7,44,5,6);
let detalle8 = new Detalle(1,22,5,4,7,22);
let detalle9 = new Detalle(88,9,7,88,22,5);
listaDetalles3.push(detalle7);
listaDetalles3.push(detalle8);
listaDetalles3.push(detalle9);
let hojaRuta3 = new HojaRuta(new Date("05/03/1988"), 1234, vehiculo, listaDetalles3);

console.log("VEHICULO---> " + vehiculo.patente + " " + vehiculo.marca + " " + vehiculo.modelo);

console.log("HOJA DE RUTA 1---> " + hojaRuta1.fecha + " " + hojaRuta1.numero);
console.log("--- DETALLES --- " + detalle1.horaRegreso + " " + detalle1.horaSalida + " " + detalle1.kmRegreso + " " + detalle1.kmSalida);
console.log("--- DETALLES --- " + detalle2.horaRegreso + " " + detalle2.horaSalida + " " + detalle2.kmRegreso + " " + detalle2.kmSalida);
console.log("--- DETALLES --- " +  detalle3.horaRegreso + " " + detalle3.horaSalida + " " + detalle3.kmRegreso + " " + detalle3.kmSalida);

console.log("HOJA DE RUTA 2---> " + hojaRuta2.fecha + " " + hojaRuta2.numero);
console.log("--- DETALLES --- " + detalle4.horaRegreso + " " + detalle4.horaSalida + " " + detalle4.kmRegreso + " " + detalle4.kmSalida);
console.log("--- DETALLES --- " + detalle5.horaRegreso + " " + detalle5.horaSalida + " " + detalle5.kmRegreso + " " + detalle5.kmSalida);
console.log("--- DETALLES --- " +  detalle6.horaRegreso + " " + detalle6.horaSalida + " " + detalle6.kmRegreso + " " + detalle6.kmSalida);

console.log("HOJA DE RUTA 3---> " + hojaRuta3.fecha + " " + hojaRuta3.numero + " " + hojaRuta3.detalles.toString());
console.log("--- DETALLES --- " + detalle7.horaRegreso + " " + detalle7.horaSalida + " " + detalle7.kmRegreso + " " + detalle7.kmSalida);
console.log("--- DETALLES --- " + detalle8.horaRegreso + " " + detalle8.horaSalida + " " + detalle8.kmRegreso + " " + detalle8.kmSalida);
console.log("--- DETALLES --- " +  detalle9.horaRegreso + " " + detalle9.horaSalida + " " + detalle9.kmRegreso + " " + detalle9.kmSalida);
    
console.log(`Metodos del objeto HojaRuta 1 prueba: ${hojaRuta1.calcularTotalKilometros()}`);
console.log(`Metodos del objeto HojaRuta 2 prueba: ${hojaRuta2.calcularTotalKilometros()}`);
console.log(`Metodos del objeto HojaRuta 3 prueba: ${hojaRuta3.calcularTotalKilometros()}`);


console.log();


    }
}






