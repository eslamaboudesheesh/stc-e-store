import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  currentUser!: any;

  constructor() {}

  ngOnInit(): void {}
  handleLogout() {
    console.log('fff');
  }
}
