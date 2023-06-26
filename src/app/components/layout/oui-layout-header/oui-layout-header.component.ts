import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {defaultComposer} from 'default-composer'; // 300B

const BASE_OPTIONS = {
  buttons:{
    start: [{
      icon: 'chevron-back-outline',
      name: 'back'
    }],
    end: [{
      icon: 'add-outline',
      name: 'add'
    },{
      icon: 'search-outline',
      name: 'search'
    },{
      icon: "ellipsis-vertical",
      name: 'ellipsis'
    }
    ,{
      icon: "reorder-three-outline",
      name: 'three'
    }]
  }
}
@Component({
  selector: 'app-oui-layout-header',
  templateUrl: './oui-layout-header.component.html',
  styleUrls: ['./oui-layout-header.component.scss'],
})
export class OuiLayoutHeaderComponent  implements OnInit {
  @Input() ouiViewNavPct: number=0
  @Input() title: string = ""
  @Input() configuration: any = {}
  @Output() onButtonClickEvent: any = new EventEmitter;

  options:any = BASE_OPTIONS;
  constructor() { }

  ngOnInit() {
    this.options = defaultComposer(this.options, this.configuration)
  }
  openDialog(){}

  onButtonClick(event:any, name: string){
    event.name = name;
    this.onButtonClickEvent.emit(event)
  }
}
