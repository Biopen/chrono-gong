import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { Gong } from '../gong';

@Component({
  selector: 'app-gong',
  templateUrl: './gong.component.html',
  styleUrls: ['./gong.component.scss']
})
export class GongComponent implements OnInit {

  @Input() gong : Gong;

  @Output() delayUpdated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelayChange($event)
  {
     this.gong.delay = $event;
     this.delayUpdated.emit();
  }
}
