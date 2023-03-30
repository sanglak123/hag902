export interface DataUser {
  User: User;
  accessToken: string;
  Store: {
    id: number;
    telco: string;
    value: string;
    count: number;
    fessBuy: number;
  }[];
}

export interface User {
  id: number;
  userName: string;
  displayName: string;
  fullName: string;
  adress: string;
  email: string;
  phone: string;
  avatar: number;
  surplus: string;
  admin: boolean;
  wallet_number: string;
  partner_key: string;
  api_key: string;
}
