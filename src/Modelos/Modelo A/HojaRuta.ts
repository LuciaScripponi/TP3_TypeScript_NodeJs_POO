import { Detalle } from "./Detalle";
import { Vehiculo } from "./Vehiculo";

export class HojaRuta {
  fecha: Date;
  numero: number;
  //Relaciones
  vehiculo: Vehiculo;
  detalles: Array<Detalle>=[];

  constructor(fecha: Date,numero: number,vehiculo: Vehiculo,detalles: Array<Detalle>){
    this.fecha = fecha;
    this.numero = numero;
    this.vehiculo = vehiculo;
    this.detalles = detalles;
  }

  //PUNTO 1
  calcularTotalKilometros(): number {
    let kmTotales: number = 0;

    this.detalles.forEach((element) => {
      kmTotales += element.kmRegreso - element.horaSalida;
    });

    return kmTotales;
  }
}
