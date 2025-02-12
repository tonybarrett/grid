import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor() { }

  numCards: BehaviorSubject<number> = new BehaviorSubject(1);
  numCards$: Observable<number> = this.numCards.asObservable();

  updateNumCards(newNumCards: number){
    this.numCards.next(newNumCards);
}

}
