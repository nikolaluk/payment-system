import { Transaction } from "./Transaction"

export interface Card{
    id: Number,
    balance: Number,
    cardholderName: String,
    cardNumber: String,
    expirationDate: String,
    iban: String,
    pin: String
    cvv: String,
    transactions: Transaction[],
}