import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/card.model';
import { CreateArray } from '../../app/services/functions';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule, 
    CardComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  cardsArray: Card[] = [
    {
      id: 1,
      face: 'Ace',
      suit: 'Spades'
    }
  ];
  numCards: number = 1;
  numColumns: number = 1;

  public changeGrid(): void {
    this.numCards = Math.trunc(this.numCards);
    this.numColumns = Math.trunc(this.numColumns);
    if (this.numCards < 1) {
      this.numCards = 1;
    }
    if (this.numColumns < 1) {
      this.numColumns = 1;
    }

    //  create the array of cards
    this.cardsArray = CreateArray(this.numCards);  //  in another file simply to cut down the amount of code in this one

    //  set custom property/variables in CSS
    document.documentElement.style.setProperty('--num-columns', String(this.numColumns));
  }

}
