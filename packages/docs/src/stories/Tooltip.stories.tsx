import type { StoryObj, Meta } from '@storybook/react'
import { Button, Text, Tooltip, TooltipProps } from '@ignition-ui/react'

export default {
  title: 'Form/Tooltip',
  component: Tooltip,
  args: {
    children: <Button>Tooltip Trigger</Button>,
    content: <Text>This is a toolitp</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    content: {
      control: {
        type: null,
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
