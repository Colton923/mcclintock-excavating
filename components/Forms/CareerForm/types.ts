import {
  FieldError,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'

export type TextTypes = 'text' | 'email' | 'tel' | 'textarea' | 'strict-text'
export type CareerFormData = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  message: string
}

export type TFormGroups = {
  groupName: string
  fields: {
    name: keyof CareerFormData
    label: string
    type: TextTypes
    placeholder: string
    required: boolean
    valueAsNumber?: boolean
  }[]
}[]

export type FormFieldProps = {
  type: TextTypes
  placeholder: string
  name: string
  label: string
  register: UseFormRegister<CareerFormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
  required: boolean
  setError: UseFormSetError<CareerFormData>
  clearErrors: UseFormClearErrors<CareerFormData>
  setValue: UseFormSetValue<CareerFormData>
}
