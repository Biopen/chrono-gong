import { Component, OnInit, DoCheck } from '@angular/core';

import { ChronoService } from './chrono.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {

  isRunning : boolean = false;

  minuteElapsed : number;
  hoursElapsed: number;
  private chronoTimer;
  private startTime : Date;

  constructor(private chronoService : ChronoService) {}

  ngOnInit()
  {
    
  }

  ngDoCheck()
  {
    
  }

  updateChronoTime() : void
  {  	     
    let endTime : Date = new Date();
    let diff = endTime.getTime() - this.startTime.getTime();  
    
    this.hoursElapsed = Math.floor(diff/(60/**60*/*1000));
    this.minuteElapsed = Math.floor( (diff - this.hoursElapsed*60*1000)/(/*60**/1000));  
  }

  toggleChrono() : void
  {
    if (this.isRunning) 
    {
      this.chronoService.stop();
      clearInterval(this.chronoTimer);
    }
    else 
    {
      this.chronoService.start();
      this.hoursElapsed = 0;
      this.minuteElapsed = 0;
      this.startTime = new Date();
      this.chronoTimer = setInterval(() => this.updateChronoTime(),1000);
    }

    this.isRunning = !this.isRunning;
  }
}