import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public cardInfo: any = [];
  constructor(
    private _cardSvc: CardService
  ) {

  }
  public ngOnInit(): void {
    this.cardInfo = this._cardSvc.getCardData();
  }
  public cardClicked(cardInfo: any) {
    alert("You have clicked on " + cardInfo.title);
  }
}
