import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent  implements OnInit {

  @ViewChild('item')
  private itemTpl: TemplateRef<any> | undefined;

  @Input() field: any = {};
  @Input() form: any;
  @Input() wrapper: string = "";
  uuid:string = crypto.randomUUID()
  constructor() {
    this.uuid = crypto.randomUUID()
   }

  ngOnInit() {
    //console.log({field:this.field,form:this.form});
  }

}
