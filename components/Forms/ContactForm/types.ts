import {
  FieldError,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'

export type TextTypes = 'text' | 'email' | 'tel' | 'textarea' | 'strict-text'

export type FormData = {
  firstName: string
  lastName: string
  phoneNumber: string
  email: string
  message?: string
}

export type TFormGroups = {
  groupName: string
  fields: {
    name: keyof FormData
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
  register: UseFormRegister<FormData>
  error: FieldError | undefined
  valueAsNumber?: boolean
  required: boolean
  setError: UseFormSetError<FormData>
  clearErrors: UseFormClearErrors<FormData>
  setValue: UseFormSetValue<FormData>
}
