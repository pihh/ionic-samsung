import { ValidatorFn, Validators } from '@angular/forms';

export class FormInputBase<T> {
  value: any;
  key: string;
  wrapper: string;
  label: string;
  placeholder: string;
  required: boolean;
  order: number;
  min: number|undefined;
  max: number|undefined;
  controlType: string;
  type: string;
  options: { key: string; value: string; }[];
  validators: ValidatorFn[] | null;
  readonly: boolean;

  constructor(
    options: {
      value?: any;
      key?: string;
      wrapper?: string;
      label?: string;
      required?: boolean;
      placeholder?: string;
      order?: number;
      min?: number|undefined;
      max?: number |undefined;
      controlType?: string;
      type?: string;
      options?: { key: string; value: any }[];
      validators?: ValidatorFn[] | [];
      readonly?: boolean;
    } = {},
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.wrapper = options.wrapper || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.placeholder = options.placeholder || "";
    this.order = options.order === undefined ? 1 : options.order;
    this.min = options.min //=== undefined ? 1 : options.min;
    this.max = options.max //=== undefined ? 10000 : options.max;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.options = options.options || [];
    this.validators = options.validators || [];
    this.readonly = !!options.readonly;
    this.addValidators()
  }

  addValidators(){
    if(this.min !== undefined ){
      this.validators?.push(Validators.min(this.min))
    }
    if(this.max !== undefined ){
      this.validators?.push(Validators.max(this.max))
    }
  }
}
