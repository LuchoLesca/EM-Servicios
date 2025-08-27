import FIELDS_FORM from '@/consts/fieldsForm';

export type FieldName = (typeof FIELDS_FORM)[number]['name'];

export type Option<Name extends string> = {
  name: Name;
  label: string;
};

export type InputField = {
  label: string;
  type: 'text';
  name: string;
  placeholder?: string;
  value?: string | number;
};

export type SelectField<Name extends string = string> = {
  label: string;
  type: 'select';
  name: string;
  options: readonly Option<Name>[];
  value?: Name;
};

export type TextareaField = {
  label: string;
  type: 'textarea';
  name: string;
  placeholder?: string;
  rows?: number;
  value?: string;
};

export type FieldType = InputField | SelectField | TextareaField;
