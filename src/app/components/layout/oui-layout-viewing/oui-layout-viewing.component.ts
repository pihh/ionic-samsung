import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-oui-layout-viewing',
  templateUrl: './oui-layout-viewing.component.html',
  styleUrls: ['./oui-layout-viewing.component.scss'],
})
export class OuiLayoutViewingComponent  implements OnInit {
  @ViewChild('oneUiViewing', {static: false}) oneUiViewing: any;
  @Input() ouiViewPct: any = 1;
  @Input() title: string = "";

  constructor() { }

  ngOnInit() {}

}
