import { ReactNode } from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { ToolitpContent } from './styles'

export interface TooltipProps {
  children: ReactNode
  content: ReactNode
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <ToolitpContent sideOffset={10}>
          {content}
          <TooltipPrimitive.Arrow width={16} height={8} />
        </ToolitpContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
