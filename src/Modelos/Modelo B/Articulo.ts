import { DetalleFactura } from "./DetalleFactura";

export class Articulo {
    codigo:number;
    denominacion:string;
    precio:number;
    unidadMedida:string;
    //Relaciones
    detallesFacturas:Array<DetalleFactura> = [];

    constructor(codigo:number, denominacion:string, precio:number, unidadMedida:string, detallesFacturas:Array<DetalleFactura>){
        this.codigo = codigo;
        this.denominacion = denominacion;
        this.precio = precio;
        this.unidadMedida = unidadMedida;
        this.detallesFacturas = detallesFacturas;
    }
}