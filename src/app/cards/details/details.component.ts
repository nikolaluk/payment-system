import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from 'src/app/services/card.service';
import { Card } from 'src/app/types/Card';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  card: Card | undefined;

  constructor (private cardService: CardService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];

      this.cardService.getOneCard(id).subscribe(
        (data) => {
          this.card = data;
        },
        (err) => {
          console.log(err);
        }
      )      
    })
  }
}
