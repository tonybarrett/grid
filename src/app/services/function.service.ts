import { Injectable } from '@angular/core';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  numCards: number = 1;

  constructor() { }

  public createCardArray(numCards: number): Card[] {
    //  returns an array of random cards of the correct number
    let cardsArray: Card[] = [];
    let suits: string[] = [
      'Hearts',
      'Clubs',
      'Diamonds',
      'Spades'
    ]
    
    for (let i = 0; i < numCards; i++) {
      let newFace: string = '';
      const newFaceNumber: number = Math.floor(Math.random() * 13) + 1;
      const newSuit: string = suits[Math.floor(Math.random() * 4)];
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
      const newCard: Card = {
        id: i,
        face: newFace, 
        suit: newSuit
      };
      cardsArray.push(newCard);
    }

    return cardsArray;
  }

}
