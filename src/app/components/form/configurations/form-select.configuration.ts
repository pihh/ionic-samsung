import { FormInputBase } from "./form-input-base";

export class FormSelectInput extends FormInputBase<string> {
  override controlType = 'select';
}
