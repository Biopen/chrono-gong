import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

import { Gong } from './gong';
import { Params } from './params';
//import { defaultGongs } from './mock-gongs';

const defaultGongs : Gong[] = 
[
  {id: 'eye', title: 'Détente des yeux toutes les', 'delay':5, soundId:1, volume:30},
  {id: 'pause', title: 'Une vraie pause toutes les', 'delay':13, soundId:2, volume:80},
  {id: 'restart', title: 'Durée de la pause', 'delay':5, soundId:3, volume:80},
];

@Injectable()
export class ParamsService {

  params : Params;

  constructor(private cookieService:CookieService) 
  {
    this.params = this.cookieService.getObject('params') as Params;
    if (!this.params) this.params = new Params(defaultGongs, 70);
  }

  save()
  {
    this.cookieService.putObject('params', this.params);
  }

  getParams() : Params
  {
    return this.params;
  }

  getGong(id : string) : Gong
  {
    return this.params.gongs.filter(gong => gong.id === id).pop();
  }

  getGongs() : Gong[]
  {
    return this.params.gongs;
  }

  getGlobalVolume() : number
  {
    return this.params.globalVolume;
  }

  setAudioVolume(volume : number) : void
  {
    this.params.globalVolume = volume;
  } 

}
