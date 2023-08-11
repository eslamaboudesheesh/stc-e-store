import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() currentProduct!: any;

  @Output() OpenCardDetails = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  handleDetails(data: any) {
    this.OpenCardDetails.emit(data);
  }
}
