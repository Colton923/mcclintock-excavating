import { Text } from '@/components/UI'
import { colorTokens } from '../../../styles/colorTokens.stylex'
import type { FormFieldProps } from './types'
import * as stylex from '@stylexjs/stylex'
import {
  fontSizeTokens,
  fontWeightTokens,
  lineHeightTokens,
} from '../../../components/UI/Text/Text.stylex'

const TextAreaInputField = ({
  name,
  label,
  register,
  error,
  required,
  valueAsNumber,
}: FormFieldProps) => {
  return (
    <div {...stylex.props(styles.wrapper)}>
      <textarea
        {...stylex.props(styles.input)}
        id={`${name}`}
        {...register(name, { required, valueAsNumber })}
      />
      {error ? (
        <label
          {...stylex.props(styles.label)}
          id={`${name}-error-label`}
          htmlFor={`${name}`}
        >
          <Text variant="sm" style={styles.error}>
            {`${label} ${required ? '*' : ''} - ${error.message}`}
          </Text>
        </label>
      ) : (
        <label
          {...stylex.props(styles.label)}
          id={`${name}-label`}
          htmlFor={`${name}`}
        >
          <Text variant="sm" style={styles.labelText}>
            {`${label} ${required ? '*' : ''}`}
          </Text>
        </label>
      )}
    </div>
  )
}

export default TextAreaInputField

const styles = stylex.create({
  wrapper: {
    position: 'relative',
    width: '100%',
    maxWidth: '30rem',
    marginBottom: '1.5rem',
    borderRadius: '0.375rem',
  },
  input: {
    display: 'flex',
    padding: '2rem 0.75rem 0.75rem 0.75rem',
    borderRadius: '0.375rem',
    width: '100%',
    height: '12rem',
    backgroundColor: colorTokens.black8,
  },
  label: {
    position: 'absolute',
    top: '0',
    left: '0.75rem',
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem',
    fontWeight: 500,
  },
  labelText: {
    color: colorTokens.white0,
    opacity: 0.7,
  },
  error: {
    color: '#cc0000',
  },
})
