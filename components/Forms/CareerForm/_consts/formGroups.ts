import type { TFormGroups } from '../types'

export const formGroups: TFormGroups = [
  {
    groupName: 'Name',
    fields: [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'strict-text',
        placeholder: 'First Name',
        required: true,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'strict-text',
        placeholder: 'Last Name',
        required: true,
      },
    ],
  },
  {
    groupName: 'Contact',
    fields: [
      {
        name: 'phoneNumber',
        label: 'Phone Number',
        type: 'tel',
        placeholder: 'Phone Number',
        required: true,
      },
      {
        name: 'email',
        label: 'Email Address',
        type: 'email',
        placeholder: 'Email Address',
        required: true,
      },
    ],
  },
  {
    groupName: 'Miscellaneous',
    fields: [
      {
        name: 'message',
        label: 'Position & Experience',
        type: 'textarea',
        placeholder: 'Message',
        required: true,
      },
    ],
  },
]
