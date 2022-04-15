import { Articulo } from "./Articulo";
import { Factura } from "./Factura";

export class DetalleFactura {
    cantidad:number;
    subTotal:number;
    //Relaciones
    articulo:Articulo | undefined;
    factura:Factura | undefined;

    constructor(cantidad:number, subTotal:number, articulo:Articulo, factura:Factura){
        this.cantidad = cantidad;
        this.subTotal = subTotal;
        this.articulo = articulo;
        this.factura = factura;
    }

    //PUNTO 1
    calcularSubTotal(){
        if(this.articulo){
            this.subTotal = this.articulo.precio * this.cantidad;
        }else{
            console.log("Articulo esta vacío!");
        }
    }
}