import { Component, Input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  // all @Input value need a fallback value
  @Input() value: Card = {
    id: 1,
    face: 'Ace',
    suit: 'Spades'
  }

  
}
