import { Card } from "./Card";

export interface User {
    id: Number,
    name: String,
    email: String,
    username: String,
    password: String,
    egn: String,
    phoneNumber: String,
    dateOfCreation: String,
    cards: Card[],
}