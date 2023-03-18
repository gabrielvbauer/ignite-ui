import * as ToastPrimitive from '@radix-ui/react-toast'
import { Text } from '../Text'
import { styled, keyframes } from '../../styles'

const slideIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(20%)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

const slideOut = keyframes({
  from: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  to: {
    opacity: 0,
    transform: 'translateY(-20%)',
  },
})

export const ToastContainer = styled(ToastPrimitive.Root, {
  width: 360,
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$sm',

  position: 'absolute',
  bottom: '$8',
  right: '$8',

  "&[data-state='open']": {
    animation: `${slideIn} 400ms ease-out`,
  },

  "&[data-state='closed']": {
    animation: `${slideOut} 400ms ease-out`,
  },
})

export const Title = styled(Text, {
  fontSize: '$xl',
  color: '$white',
  fontweight: '$bold',
})

export const Close = styled(ToastPrimitive.Close, {
  all: 'unset',
  position: 'absolute',
  top: 16,
  right: 16,
  color: '$white',
  cursor: 'pointer',
})

export const Viewport = styled(ToastPrimitive.Viewport, {
  listStyle: 'none',
})
