import { Moeda } from "./moeda";

export class Compra {
  
  id: number;
  dataCompra: string;
  qtd: number;
  valorCompra: number;
  moeda: Moeda;
  status: string;
  valorVenda: number;
  dataVenda: string;
}


