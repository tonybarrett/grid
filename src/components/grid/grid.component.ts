import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { FormsModule } from '@angular/forms';

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
  cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  numCards: number = 0;
  numColumns: number = 0;

  ngOnInit():void {}

  changeGrid():void {
    this.numCards = Math.trunc(this.numCards);
    this.numColumns = Math.trunc(this.numColumns);
    console.log('cards: ', this.numCards);
    console.log('columns: ', this.numColumns);
  }



}
