import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from '../configurations/form-input-base';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() formFields:any[] = [];
  @Input() formButtons:any[] = [];
  @Output() onSubmit = new EventEmitter<any>();
  form:any = new FormGroup({});
  private _group:any = {}

  constructor() {}

  ngOnInit(): void {
    const group:any = {};
    const _group:any = {}
    this.formFields.forEach((field) => {
      _group[field.key]= field
      group[field.key] = field.required
        ? new FormControl(field.value , [
            ...field.validators,
            Validators.required,
          ])
        : new FormControl(field.value , field.validators);
    });
    this._group = _group;
    this.form = new FormGroup(group);
  }

  onNgSubmit($event:any): void {

    if(!this.form.valid) {
      this.form.submitIntention = true;
      return;
    }

    const values = this.form.getRawValue();

    for(let key of Object.keys(values)){
      if(this._group[key].required && this._group[key].controlType === 'number'){
        values[key] = Number(values[key])
      }
    }

    this.onSubmit.emit(values);
  }
}

