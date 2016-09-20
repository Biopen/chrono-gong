import { Injectable } from '@angular/core';
import {CookieService} from 'angular2-cookie/core';

import { Gong } from './gong';
import { Params } from './params';
//import { defaultGongs } from './mock-gongs';

const defaultGongs : Gong[] = 
[
  {id: 'eye',  'delay':15, soundId:1, volume:30},
  {id: 'pause', 'delay':50, soundId:3, volume:80},
  {id: 'restart', 'delay':10, soundId:6, volume:80},
];

@Injectable()
export class ParamsService {

  params : Params;

  constructor(private cookieService:CookieService) 
  {
    this.params = this.cookieService.getObject('param') as Params;
    if (!this.params) this.params = new Params(defaultGongs, 70);
  }

  save()
  {
    this.cookieService.putObject('param', this.params);
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
