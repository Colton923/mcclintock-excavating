import StringInputField from './StringInputField'
import TextAreaInputField from './TextAreaInputField'
import {
  FieldError,
  FieldValues,
  UseFormClearErrors,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from 'react-hook-form'

export type TextTypes = 'text' | 'email' | 'tel' | 'textarea' | 'strict-text'

export type FormFieldProps = {
  type: TextTypes
  placeholder: string
  name: string
  label: string
  register: UseFormRegister<any>
  error: FieldError | undefined
  valueAsNumber?: boolean
  required: boolean
  setError: UseFormSetError<any>
  clearErrors: UseFormClearErrors<any>
  setValue: UseFormSetValue<any>
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  register,
  error,
  required,
  valueAsNumber,
  setError,
  clearErrors,
  setValue,
}) => {
  if (
    type === 'text' ||
    type === 'email' ||
    type === 'tel' ||
    type === 'strict-text'
  ) {
    return (
      <StringInputField
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        register={register}
        error={error}
        required={required}
        valueAsNumber={valueAsNumber}
        setError={setError}
        clearErrors={clearErrors}
        setValue={setValue}
      />
    )
  } else if (type === 'textarea') {
    return (
      <TextAreaInputField
        name={name}
        label={label}
        type={type}
        placeholder={placeholder}
        register={register}
        error={error}
        required={required}
        valueAsNumber={valueAsNumber}
        setError={setError}
        clearErrors={clearErrors}
        setValue={setValue}
      />
    )
  }
  return null
}

export default FormField
