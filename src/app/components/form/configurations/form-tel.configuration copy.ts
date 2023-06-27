import { FormInputBase } from "./form-input-base";

export class FormTelInput extends FormInputBase<string> {
  override controlType = 'tel';
  override type = 'tel';
  override placeholder = '888-888-8888';

}
