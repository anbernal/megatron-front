import { Moeda } from "./moeda";

export class Compra {
  
  id: number = 0;
  dataCompra: string = "";
  qtd: number = 0;
  valorCompra: number = 0;
  moeda: Moeda = new Moeda;
  status: string = "";
  valorVenda: number = 0;
  dataVenda: string = "";
}


