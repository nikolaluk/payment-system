import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CardService } from 'src/app/services/card.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(
    private cardService: CardService,

    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  cardForm = this.formBuilder.group({
    cardholderName: ['',[Validators.required]],
    cardNumber: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
    expirationDate: ['',[Validators.required]],
    pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
  });

  handleSubmit() {
    const cardData = {
      cardholderName: this.cardForm.get('cardholderName')?.value,
      cardNumber: this.cardForm.get('cardNumber')?.value,
      expirationDate: this.cardForm.get('expirationDate')?.value,
      pin: this.cardForm.get('pin')?.value,
      cvv: this.cardForm.get('cvv')?.value,
    }

    this.cardService.addCard(cardData)
      .subscribe(
        (data) => {

        },
        (err) => {
          
        });
  }
}
