import { Injectable } from '@angular/core';

import { ParamsService } from './params.service';
import { SoundService } from './sound.service';

@Injectable()
export class ChronoService {

  private timers = [];  

  constructor(private paramsService : ParamsService,
              private soundService : SoundService) { }

  private beginCycle(): void
  {
    let eyeDelay = this.minutesToMs(this.paramsService.getGong('eye').delay);
    let pauseDelay = this.minutesToMs(this.paramsService.getGong('pause').delay);
    let restartDelay = this.minutesToMs(this.paramsService.getGong('restart').delay);

    if (eyeDelay > 0)
    {
      let eyeTimersLeft = Math.ceil(pauseDelay / eyeDelay) - 1;
      if (eyeTimersLeft > 0) this.timers.push( this.setIntervalX(() => this.soundService.playSound('eye'), eyeDelay, eyeTimersLeft) );
    }    
    
    if (pauseDelay > 0) this.timers.push( setTimeout(() => this.soundService.playSound('pause'), pauseDelay) );
    if (restartDelay > 0) this.timers.push( setTimeout(() => this.soundService.playSound('restart'), pauseDelay + restartDelay) );

    this.timers.push( setTimeout(() => this.beginCycle(), pauseDelay+restartDelay) );
  }

  start() : void
  {
    this.beginCycle();    
  }  

  stop() : void
  {
    for(var timer of this.timers) 
    {
      clearInterval(timer);
      clearTimeout(timer);
    }
    this.timers = [];
  }

  minutesToMs(time : number) : number
  {
    return time*60*1000;
  }

  setIntervalX(callback, delay, repetitions) {
    var x = 0;
    var intervalID = setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);

    return intervalID;
  }

}
