export class Cliente {
    numero:number;
    razonSocial:string;
    cuit:number;

    constructor(numero:number, razonSocial:string, cuit:number){
        this.numero = numero;
        this.razonSocial = razonSocial;
        this.cuit = cuit;
    }
}