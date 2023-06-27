import { FormInputBase } from "./form-input-base";

export class FormTelInput extends FormInputBase<string> {
  override controlType = 'tel';
}
