import { Articulo } from "./Modelos/Modelo B/Articulo";
import { DetalleFactura } from "./Modelos/Modelo B/DetalleFactura";
import { Factura } from "./Modelos/Modelo B/Factura";
import { Cliente } from "./Modelos/Modelo B/Cliente";
export class TestB {
  public static main() {
    let cliente1 = new Cliente(32, "Lucia Scripponi", 8745985422);

    let articulo1 = new Articulo(98, "Harina", 150, "kg");
    let articulo2 = new Articulo(23, "Queso", 250, "kg");
    let articulo3 = new Articulo(96, "Salsa", 80, "kg");
    let articulo4 = new Articulo(54, "Condimento", 100, "kg");
    let articulo5 = new Articulo(38, "Jamón", 200, "kg");

    let detalleFactura1 = new DetalleFactura(3, articulo1);

    let detalleFactura2 = new DetalleFactura(2, articulo3);

    let arrayDetalles1: Array<DetalleFactura> = [];
    arrayDetalles1.push(detalleFactura1);
    arrayDetalles1.push(detalleFactura2);

    let arrayDetalles2: Array<DetalleFactura> = [];
    arrayDetalles2.push(detalleFactura1);
    arrayDetalles2.push(detalleFactura2);

    //formato fecha  "aaaa-mm-dd"
    let factura1 = new Factura(
      "A",
      456,
      400,
      "TC",
      new Date("2019-05-27"),
      arrayDetalles1
    );
    let factura2 = new Factura(
      "C",
      322,
      20,
      "E",
      new Date("2020-08-22"),
      arrayDetalles2
    );
    let factura3 = new Factura(
      "B",
      156,
      200,
      "TR",
      new Date("2021-06-13"),
      arrayDetalles1
    );

    cliente1.facturas.push(factura1);
    cliente1.facturas.push(factura2);
    cliente1.facturas.push(factura3);

    console.log("Cliente--> " + cliente1.razonSocial);
    console.log("CUIT--> " + cliente1.cuit);
    console.log("Total facturado--> " + cliente1.totalFacturadoXTipoPago("CC"));

    console.log(`El subtotal del dellate 1 es: ${cliente1.facturas[1].detalles[0].calcularSubTotal()}`);
    console.log(`El total de items es: ${cliente1.facturas[0].calcularTotalItems()}`);
    console.log(`El total final es: ${cliente1.facturas[0].calcularTotalFinal()}`);
    console.log(`El total facturado por tipo de pago es: ${cliente1.totalFacturadoXTipoPago("TC")}`);
  }
}
