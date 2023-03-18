import * as ToastPrimitive from '@radix-ui/react-toast'
import { X } from 'phosphor-react'
import { Text } from '../Text'
import { ToastContainer, Close, Viewport } from './styles'

export interface ToastProps extends ToastPrimitive.ToastProps {
  title: string
  description: string
  isOpen?: boolean
}

export function Toast({ title, description, isOpen, ...rest }: ToastProps) {
  return (
    <ToastContainer {...rest}>
      <ToastPrimitive.Title asChild>
        <Text size="lg" weight="bold">
          {title}
        </Text>
      </ToastPrimitive.Title>
      <ToastPrimitive.Description asChild>
        <Text size="sm" weight="regular" color="$gray200">
          {description}
        </Text>
      </ToastPrimitive.Description>

      <Close asChild>
        <X size={20} />
      </Close>
    </ToastContainer>
  )
}

export interface ToastProviderProps extends ToastPrimitive.ToastProviderProps {}

export function ToastProvider({ children, ...rest }: ToastProviderProps) {
  return <ToastPrimitive.Provider {...rest}>{children}</ToastPrimitive.Provider>
}

interface ToastViewportProps extends ToastPrimitive.ToastViewportProps {}

export function ToastViewport({ ...rest }: ToastViewportProps) {
  return <Viewport {...rest} />
}
