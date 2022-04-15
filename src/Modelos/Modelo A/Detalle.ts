import { HojaRuta } from "./HojaRuta";

export class Detalle{
    kmSalida:number;
    kmRegreso:number;
    horaSalida:number;
    horaRegreso:number;
    minutoSalida:number;
    minutoRegreso:number;
    //Relaciones
    hojaDeRuta:HojaRuta | undefined;

    constructor(kmSalida:number, kmRegreso:number, horaSalida:number, horaRegreso:number, minutoSalida:number, minutoRegreso:number, hojaDeRuta?:HojaRuta){
        this.kmSalida = kmSalida;
        this.kmRegreso = kmRegreso;
        this.horaSalida = horaSalida;
        this.horaRegreso = horaRegreso;
        this.minutoSalida = minutoSalida;
        this.minutoRegreso = minutoRegreso;
        this.hojaDeRuta = hojaDeRuta;
    }
}