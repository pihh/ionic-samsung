import { FormInputBase } from "./form-input-base";

export class FormEmailInput extends FormInputBase<string> {
  override controlType = 'email';
  override type = 'email';
  override placeholder = 'user@domain.com';

}
