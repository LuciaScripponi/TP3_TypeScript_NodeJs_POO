import { Cliente } from "./Cliente";
import { DetalleFactura } from "./DetalleFactura";

export class Factura {
    letra:string;
    numero:number;
    recargo:number;
    tipoPago:string;
    totalItems:number;
    totalFinal:number;
    fecha:Date;
    //Relaciones
    cliente:Cliente | undefined;
    detalles:Array<DetalleFactura> = [];

  constructor(letra: string,numero: number,recargo: number,tipoPago: string,totalItems: number,totalFinal: number,fecha: Date, cliente:Cliente, detalles:Array<DetalleFactura>) {
    this.letra = letra
    this.numero = numero
    this.recargo = recargo
    this.tipoPago = tipoPago
    this.totalItems = totalItems
    this.totalFinal = totalFinal
    this.fecha = fecha
    this.cliente = cliente;
    this.detalles = detalles;
  }

  //PUNTO 2
  calcularTotalItems (){
    let sumaSubtotales:number = 0;
    this.detalles.forEach(element => {
      sumaSubtotales =+ element.calcularSubTotal();
    });
  }

  //PUNTO 3
  calcularTotalFinal (){
      let totalFinal:number = 0;
      totalFinal =+ this.calcularTotalItems() + this.recargo;
  }
}