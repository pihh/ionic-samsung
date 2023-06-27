import { FormInputBase } from "./form-input-base";

export class FormPasswordInput extends FormInputBase<string> {
  override controlType = 'password';
  override type = 'password';
  override placeholder = '********';

}
