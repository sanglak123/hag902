export interface Card {
  id: number;
  idTypeCard: number;
  telco: string;
  img: number;
  change: boolean;
}
export interface Value {
  id: number;
  name: string;
}

export interface DataPublic {
  Prices: {
    id: number;
    idCard: number;
    idValue: number;
    feesChange: number;
    feesBuy: number;
    Card: Card;
    Value: Value;
  }[];
  Cards: Card[];
  Banks: {
    id: number;
    name: string;
    sign: string;
  }[];
}
