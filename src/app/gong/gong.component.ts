import { Component, Input, OnInit } from '@angular/core';

import { Gong } from '../gong';

@Component({
  selector: 'app-gong',
  templateUrl: './gong.component.html',
  styleUrls: ['./gong.component.scss']
})
export class GongComponent implements OnInit {

  @Input() gong : Gong;

  constructor() { }

  ngOnInit() {
  }
}
