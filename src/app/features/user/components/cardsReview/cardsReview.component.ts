import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cardsReview',
  templateUrl: './cardsReview.component.html',
  styleUrls: ['./cardsReview.component.scss'],
})
export class CardsReviewComponent implements OnInit {
  @Input() currentJob!: any;
  rating: any = 3;
  @Output() bookmark = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  handleBookmark(data: any) {
    this.bookmark.emit((data = !data));
  }
}
