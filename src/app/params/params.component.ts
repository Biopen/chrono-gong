import { Component, OnInit, DoCheck } from '@angular/core';

import { ParamsService } from '../params.service';
import { Params } from '../params';
import { Gong } from '../gong';

@Component({
  selector: 'app-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit, DoCheck {

  params : Params;
  constructor(private paramsService : ParamsService) { }

  ngOnInit() {
    this.params = this.paramsService.getParams();
  }

  ngDoCheck() 
  {
    
    //console.log("doCheck this.params = " + JSON.stringify(this.params));
    //console.log("doCheck service.params = " + JSON.stringify(this.paramsService.getParams()));

  }
}
