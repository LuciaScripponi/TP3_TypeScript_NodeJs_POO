export class DetalleFactura {
    cantidad:number;
    subTotal:number;

    constructor(cantidad:number, subTotal:number){
        this.cantidad = cantidad;
        this.subTotal = subTotal;
    }
}