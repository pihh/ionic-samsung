

export class FormButton<T> {
  type: string;
  label: string;
  size: string;
  color: string;
  expand: string;
  shape: string;
  loading: boolean;
  disabled: boolean;

  constructor(
    options: {
      type?: string,
      label?: string,
      size?: string,
      color?: string,
      expand?: string,
      shape?: string,
      loading?: boolean,
      disabled?: boolean,
    } = {},
  ) {
    this.type = options.type || 'submit'
    this.label = options.label || ''
    this.size = options.size || 'small'
    this.color = options.color || ''
    this.expand = options.expand || ''
    this.shape = options.shape || 'round'
    this.loading = options.loading || false
    this.disabled = options.disabled || false
  }


}
