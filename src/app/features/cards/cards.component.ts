import { Component, OnInit } from '@angular/core';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/types/Card';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  allCards: Card[] | undefined;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe(
      (data) => {       
        this.allCards = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
