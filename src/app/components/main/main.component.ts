import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { FormsModule } from '@angular/forms';
import { Card } from '../../models/card.model';
import { FunctionService } from '../../services/function.service';
import { StateService } from '../../services/state.service';

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
  numColumns: number = 1;
  numCards: number = 1
  constructor(
    private functionService: FunctionService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    // Subscribe to numCards$ property of state service to get real time value
    this.stateService.numCards$.subscribe(
      numCards => this.numCards = numCards
    );
  }

  public changeGrid(): void {
    this.numCards = Math.trunc(this.numCards);
    this.numColumns = Math.trunc(this.numColumns);
    if (this.numCards < 1) {
      this.numCards = 1;
    }
    if (this.numColumns < 1) {
      this.numColumns = 1;
    }

    // writing the number of cards to the RxJS store
    this.stateService.updateNumCards(this.numCards);

    //  create the array of cards
    this.cardsArray = this.functionService.createCardArray(this.numCards);  //  in a service simply to cut down the amount of code in this one

    //  set custom property/variables in CSS
    document.documentElement.style.setProperty('--num-columns', String(this.numColumns));
  }

}
