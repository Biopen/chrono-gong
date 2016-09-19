import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app.component';
import { GongComponent } from './gong/gong.component';

import { ParamsService } from './params.service';
import { ChronoService } from './chrono.service';
import { SoundService } from './sound.service'
import { ParamsComponent } from './params/params.component';
import { SoundSelectorComponent } from './sound-selector/sound-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    GongComponent,
    ParamsComponent,
    SoundSelectorComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    HttpModule
  ],
  providers: [ 
    ParamsService, 
    ChronoService, 
    CookieService, 
    SoundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
