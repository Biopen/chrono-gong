import { Injectable } from '@angular/core';

import { ParamsService } from './params.service';
import { Sound } from './sound';

const defaultSounds : Sound[] = 
[
  {id: 1, name:"Gong", url:"assets/chigong.mp3"},
  {id: 2, name:"Gong réel", url:"assets/gong-real.mp3"},
  {id: 3, name:"Ring Up", url:"assets/ring-up.mp3"},
  {id: 4, name:"Ring Up 2", url:"assets/ring2-up.mp3"},
  {id: 5, name:"Ring Up Long", url:"assets/ring-up-long.mp3"},
  {id: 6, name:"Ring Down", url:"assets/ring-down.mp3"},
  {id: 7, name:"Ring Down 2", url:"assets/di-poom.mp3"},
];

@Injectable()
export class SoundService {

  selectedSound : Sound;

  constructor(private paramsService : ParamsService) { 
  }

  getSounds() : Sound[]
  {
    return defaultSounds;
  }

  playSound(gongId : string)
  {
    let gong = this.paramsService.getGong(gongId);
    let sound = this.getSoundById( gong.soundId );
    let audio = new Audio(sound.url);
    audio.volume = this.paramsService.getGlobalVolume() / 100 * gong.volume / 100;
    audio.load();
    audio.play();
  }

  getSoundById(id : number)
  {
    return this.getSounds().filter(sound => sound.id == id).pop();
  } 

}
