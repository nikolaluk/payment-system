import { Transaction } from "./Transaction"

export interface Card{
    id: Number,
    balance: Number,
    cardholder_name: String,
    card_number: String,
    expiration_date: String,
    iban: String,
    pin: String
    cvv: String,
    transactions: Transaction[],
    account_id: Number,
}