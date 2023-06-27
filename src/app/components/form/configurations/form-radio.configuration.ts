import { FormInputBase } from "./form-input-base";

export class FormRadio extends FormInputBase<string> {
  override controlType = 'radio';
  override type = 'radio';
}
