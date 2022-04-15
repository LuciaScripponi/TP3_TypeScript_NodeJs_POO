import { Articulo } from "./Articulo";
import { Factura } from "./Factura";

export class DetalleFactura {
    cantidad:number;
    subTotal:number = 0;
    //Relaciones
    articulo:Articulo | undefined;
    factura:Factura | undefined;

    constructor(cantidad:number, articulo:Articulo){
        this.cantidad = cantidad;
        this.articulo = articulo;
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