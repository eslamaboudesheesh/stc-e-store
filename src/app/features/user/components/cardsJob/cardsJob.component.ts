import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cardsJob',
  templateUrl: './cardsJob.component.html',
  styleUrls: ['./cardsJob.component.scss'],
})
export class CardsJobComponent implements OnInit {
  @Input() currentJob!: any;

  @Output() bookmark = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  handleBookmark(data: any) {
    this.bookmark.emit((data = !data));
  }
}
