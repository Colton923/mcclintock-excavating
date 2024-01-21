'use client'

import { useForm } from 'react-hook-form'
import FormField from './FormField'
import type { FormData, ValidFieldNames } from './types'
import { formGroups } from './_consts/formGroups'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import * as stylex from '@stylexjs/stylex'
import { Text } from '@/components/UI'
import { colorTokens } from '../../../styles/colorTokens.stylex'
import { useState } from 'react'

export const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
export const zipRegex = new RegExp(/^[0-9]{5}(?:-[0-9]{4})?$/)
export const faxRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)
export const emailRegex = new RegExp(
  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/
)
export const numberRegex = new RegExp(/^[0-9]*$/)
const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'Too short' })
    .max(50, { message: 'Too long' }),
  lastName: z
    .string()
    .min(2, { message: 'Too short' })
    .max(50, { message: 'Too long' }),
  email: z
    .string()
    .email({ message: 'Invalid email' })
    .regex(emailRegex, 'Invalid email'),
  phoneNumber: z.string().min(10).max(10).regex(phoneRegex, 'Invalid phone number'),
  message: z
    .string()
    .optional()
    .or(
      z.string().min(2, { message: 'Too short' }).max(500, { message: 'Too long' })
    ),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    setValue,
    setFocus,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    delayError: 1000,
  })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    console.log(data)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleAttemptedSubmit = () => {
    const firstError = Object.keys(errors)[0] as ValidFieldNames
    if (firstError) {
      setFocus(firstError as ValidFieldNames)
    }
  }
  console.log(formGroups)
  return (
    <>
      {submitting ? (
        <div {...stylex.props(styles.headerWrapper)}>
          <Text variant="lg" style={styles.headerText}>
            Thank you for reaching out!
          </Text>
          <Text variant="md" style={styles.headerText}>
            We will be in touch with you soon.
          </Text>
        </div>
      ) : (
        <form
          {...stylex.props(styles.formWrapper)}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div {...stylex.props(styles.headerWrapper)}>
            <Text variant="lg" style={styles.headerText}>
              Contact Us
            </Text>
          </div>
          <div {...stylex.props(styles.divider)} />
          <div {...stylex.props(styles.groups)}>
            {formGroups.map((group) => (
              <div {...stylex.props(styles.groupWrapper)} key={group.groupName}>
                {group.fields.map((field) => (
                  <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    placeholder={field.placeholder}
                    required={field.required}
                    register={register}
                    error={errors[field.name]}
                    setError={setError}
                    clearErrors={clearErrors}
                    setValue={setValue}
                  />
                ))}
              </div>
            ))}
          </div>
          <div {...stylex.props(styles.divider)} />
          <div {...stylex.props(styles.buttonWrapper)}>
            <button
              disabled={submitting}
              {...stylex.props(styles.submit)}
              type="submit"
              onClick={handleAttemptedSubmit}
            >
              <Text variant="md" style={styles.submitText}>
                Submit
              </Text>
            </button>
          </div>
        </form>
      )}
    </>
  )
}

const styles = stylex.create({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: '350px',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginBottom: 0,
    textAlign: 'center',
  },
  divider: {
    width: '90%',
    height: '1px',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  groups: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '1rem',
    width: '100%',
  },
  groupWrapper: {
    display: 'block',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '30rem',
    paddingRight: '1rem',
    paddingLeft: '1rem',
  },
  groupHeader: {
    textDecoration: 'underline',
    color: colorTokens.white0,
    marginTop: 0,
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.375rem',
    borderWidth: '1px',
    width: '100%',
    height: '4rem',
    backgroundColor: colorTokens.primary_red_dark1,
    margin: '1rem 0',
    cursor: 'pointer',
  },
  submitText: {
    color: colorTokens.white0,
  },
})
