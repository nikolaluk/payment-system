export interface Transaction{
    id: Number,
    reciever_iban: String,
    sender_iban: String,
    amount: Number,
    timestamp: String,
    card_id: Number,
}