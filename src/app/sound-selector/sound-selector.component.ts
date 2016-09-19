import { Component, OnInit, Input } from '@angular/core';

import { Sound } from '../sound';
import { Gong } from '../gong';
import { SoundService } from '../sound.service'
import { ParamsService } from '../params.service'

@Component({
  selector: 'app-sound-selector',
  templateUrl: './sound-selector.component.html',
  styleUrls: ['./sound-selector.component.scss']
})
export class SoundSelectorComponent implements OnInit {

  @Input() gong : Gong;

  sounds : Sound[];

  constructor(private paramsService: ParamsService,
              private soundService : SoundService) {  }
  
  ngOnInit() 
  {
    this.sounds = this.soundService.getSounds();
  }

  onSelectSound(event:Object): void
  {
    this.gong.soundId = parseInt(event.toString());
    this.soundService.playSound(this.gong.id);
  }
}
