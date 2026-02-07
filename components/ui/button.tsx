import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-white shadow-lg hover:bg-primary/90 hover:shadow-xl",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 shadow-md",
        outline:
          "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white shadow-sm hover:shadow-lg",
        secondary:
          "bg-secondary text-white hover:bg-secondary/90 shadow-md hover:shadow-lg",
        ghost:
          "text-primary hover:bg-primary/10 active:bg-primary/20",
        link: "text-primary underline-offset-4 hover:underline",
        white: "border-2 border-white text-white bg-transparent hover:bg-white hover:text-deep-earth backdrop-blur-sm shadow-xl",
      },
      size: {
        default: "h-10 px-4 py-2",
        xs: "h-7 gap-1 rounded-md px-2 text-xs",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 sm:h-16 rounded-2xl px-10 text-lg",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }