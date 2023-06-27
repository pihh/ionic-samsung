import { FormInputBase } from "./form-input-base";

export class FormTextareaInput extends FormInputBase<string> {
  override controlType = 'textarea';
}
