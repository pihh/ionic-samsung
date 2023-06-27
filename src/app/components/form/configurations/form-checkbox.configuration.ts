import { FormInputBase } from "./form-input-base";

export class FormCheckboxInput extends FormInputBase<string> {
  override controlType = 'checkbox';
  override value = false;
  override type = 'checkbox';
}
