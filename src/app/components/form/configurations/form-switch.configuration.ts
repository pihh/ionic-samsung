import { FormInputBase } from "./form-input-base";

export class FormSwitchInput extends FormInputBase<string> {
  override controlType = 'switch';
  override value = false;
  override type = 'checkbox';
}
