import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-oui-layout',
  templateUrl: './oui-layout.component.html',
  styleUrls: ['./oui-layout.component.scss'],
})
export class OuiLayoutComponent  implements OnInit {
  @ViewChild('oneUiViewing', {static: false}) oneUiViewing: any;
  @Input()title:string = ""
  @Output()onHeaderButtonClickEvent:any = new EventEmitter()


  constructor() { }

  ngOnInit() {}

  prevDiff = 0;
  ouiViewPct:number = 1;
  ouiViewNavPct:number = 1;

  handleScroll(ev: any) {
    try {
      //console.log(this.oneUiViewing.oneUiViewing.nativeElement,'oneUiViewing')

      const height = this.oneUiViewing.oneUiViewing.nativeElement.offsetHeight;
      const targetScroll = ev.target.scrollTop;
      const diff = Math.max(0, Math.min(1, targetScroll / height));

      if (diff !== this.prevDiff) {
        this.prevDiff = diff;
        // Começa em 0.1 , acaba em 0.5
        const ouiViewPct = 1 - Math.min(1, Math.max(diff - 0.1, 0) / 0.4);
        const ouiViewNavPct = Math.min(1, Math.max(diff - 0.5, 0) / 0.4);
        if (ouiViewPct !== this.ouiViewPct) {
          this.ouiViewPct = ouiViewPct;
        }
        if (ouiViewNavPct !== this.ouiViewNavPct) {
          this.ouiViewNavPct = ouiViewNavPct;
        }
      }

    } catch (ex) {
      console.log(ex);
    }
  }

  onHeaderButtonClick($event:any){
    console.log('onHeaderButtonClick',$event)
    this.onHeaderButtonClickEvent.emit($event)
  }
}

/*
@ViewChild('oneUiViewing') oneUiViewing: any;

  constructor() {}

  prevDiff = 0;
  ouiViewPct = 1;
  ouiViewNavPct = 0;
  handleScroll(ev: any) {
    try {
      const height = this.oneUiViewing.nativeElement.offsetHeight;
      const targetScroll = ev.target.scrollTop;
      const diff = Math.max(0, Math.min(1, targetScroll / height));

      if (diff !== this.prevDiff) {
        this.prevDiff = diff;
        // Começa em 0.1 , acaba em 0.5
        const ouiViewPct = 1 - Math.min(1, Math.max(diff - 0.1, 0) / 0.4);
        const ouiViewNavPct = Math.min(1, Math.max(diff - 0.5, 0) / 0.4);
        if (ouiViewPct !== this.ouiViewPct) {
          this.ouiViewPct = ouiViewPct;
        }
        if (ouiViewNavPct !== this.ouiViewNavPct) {
          this.ouiViewNavPct = ouiViewNavPct;
        }
      }
    } catch (ex) {
      console.log(ex);
    }
  }

  */
