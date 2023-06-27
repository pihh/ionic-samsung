import { FormInputBase } from "./form-input-base";

export class FormTextInput extends FormInputBase<string> {
  override controlType = 'text';
}
