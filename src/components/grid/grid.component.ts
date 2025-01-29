import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  cards: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

}
