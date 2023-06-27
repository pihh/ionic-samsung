import { FormInputBase } from "./form-input-base";

export class FormRangeInput extends FormInputBase<string> {
  override controlType = 'range';
}
