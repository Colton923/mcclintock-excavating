import { FormFieldProps } from './types'
import StringInputField from './StringInputField'
import TextAreaInputField from './TextAreaInputField'

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
  console.log('type', type)
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
