export class Factura {
    letra:string;
    numero:number;
    recargo:number;
    tipoPago:string;
    totalItems:number;
    totalFinal:number;
    fecha:Date;


  constructor(letra: string,numero: number,recargo: number,tipoPago: string,totalItems: number,totalFinal: number,fecha: Date) {
    this.letra = letra
    this.numero = numero
    this.recargo = recargo
    this.tipoPago = tipoPago
    this.totalItems = totalItems
    this.totalFinal = totalFinal
    this.fecha = fecha
  }
    
}