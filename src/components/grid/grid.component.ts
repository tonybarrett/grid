import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    FormsModule, 
    CardComponent
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  suits = [
    'Hearts',
    'Clubs',
    'Diamonds',
    'Spades'
  ]
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

  // TODO: add number of cards to RxJS store

    //  create the array of cards
    this.createArray();

    //  set custom property/variables in CSS
    document.documentElement.style.setProperty('--num-columns', String(this.numColumns));
  }

  private createArray(): void {
    //  produces an array of random cards of the correct number
    this.cardsArray = [];

  // subscribe to num of cards

    for (let i = 0; i < this.numCards; i++) {
      const newFaceNumber: number = Math.floor(Math.random() * 13) + 1;
      let newFace: string = '';
      switch (newFaceNumber) {
        case 11:
          newFace = 'Jack';
          break;
        case 12:
          newFace = 'Queen';
          break;
        case 13:
          newFace = 'King';
          break;
        case 1:
          newFace = 'Ace';
          break;
        default:
          newFace = String(newFaceNumber);
          break;
        }
      const newSuit: string = this.suits[Math.floor(Math.random() * 4)]
      const newCard: Card = {
        id: i,
        face: newFace, 
        suit: newSuit
        };
    this.cardsArray.push(newCard);
    }
  }

}
