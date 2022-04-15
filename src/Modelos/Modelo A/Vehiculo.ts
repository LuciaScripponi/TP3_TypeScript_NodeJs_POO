import { HojaRuta } from "./HojaRuta";

export class Vehiculo{

    patente:string;
    marca:string;
    modelo:string;
    //Relaciones
    hojasDeRuta:Array<HojaRuta>=[];

    constructor(patente:string, marca:string, modelo:string){
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
    }

    //PUNTO 2
    calcularTotalKilometrosRecorridos (fechaDesde:Date, fechaHasta:Date):number{
        let kmTotalesXfecha:number = 0;

        this.hojasDeRuta.forEach(element => {
            if((fechaDesde >= element.fecha) && (fechaHasta <= element.fecha)){
                kmTotalesXfecha = element.calcularTotalKilometros();
            }
        });
        return kmTotalesXfecha;
    }
}