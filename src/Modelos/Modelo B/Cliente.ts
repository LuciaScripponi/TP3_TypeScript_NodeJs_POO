import { Factura } from "./Factura";

export class Cliente {
    numero:number;
    razonSocial:string;
    cuit:number;
    //Relaciones
    facturas:Array<Factura> = [];

    constructor(numero:number, razonSocial:string, cuit:number, facturas:Array<Factura>){
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
        this.facturas = facturas;
    }

    //PUNTO 4
    totalFacturadoXTipoPago(tipoPago:string){
        let totalFacturado:number = 0;

        this.facturas.forEach(element => {
            if(tipoPago == "E" || tipoPago == "TD" || tipoPago == "TC" || tipoPago == "CC" || tipoPago == "TR"){
                totalFacturado =+ element.calcularTotalFinal();
            }else{
                console.log("El tipo de pago no es válido!"); 
            }
        });
    }
}