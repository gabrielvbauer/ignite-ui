import type { StoryObj, Meta } from '@storybook/react'
import {
  Button,
  Toast,
  ToastProps,
  ToastProvider,
  ToastViewport,
} from '@ignition-ui/react'
import { useState } from 'react'

export default {
  title: 'Form/Toast',
  component: Toast,
  args: {
    title: 'This is a toast',
    description: 'This is a toast description',
    isOpen: false,
  },
  decorators: [
    (Story, { args }) => {
      const [isOpen, setIsOpen] = useState(false)

      args.open = isOpen
      args.onOpenChange = setIsOpen
      args.duration = 3000

      return (
        <ToastProvider>
          <Button onClick={() => setIsOpen(true)}>Show Toast</Button>
          {Story()}

          <ToastViewport />
        </ToastProvider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
