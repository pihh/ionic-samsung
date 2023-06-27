import { FormInputBase } from "./form-input-base";

export class FormNumberInput extends FormInputBase<string> {
  override controlType = 'number';
  override type = 'number';

}
