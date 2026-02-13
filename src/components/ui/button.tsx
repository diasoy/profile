import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none backdrop-blur-xl focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "border-primary/55 bg-linear-to-br from-primary to-primary/80 text-primary-foreground shadow-[0_10px_28px_rgba(37,99,235,0.3),inset_0_1px_0_rgba(255,255,255,0.35)] hover:brightness-110",
        destructive:
          "border-destructive/65 bg-destructive/90 text-white shadow-[0_10px_24px_rgba(220,38,38,0.22),inset_0_1px_0_rgba(255,255,255,0.25)] hover:bg-destructive/95 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline:
          "border-glass-border bg-glass-surface/75 text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_10px_24px_rgba(15,23,42,0.1)] hover:bg-glass-muted/90 hover:text-foreground dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_26px_rgba(0,0,0,0.4)]",
        secondary:
          "border-secondary/55 bg-secondary text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.68),0_10px_24px_rgba(15,23,42,0.09)] hover:bg-secondary/85 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_12px_26px_rgba(0,0,0,0.35)]",
        ghost:
          "border-transparent bg-transparent text-muted-foreground hover:border-glass-border hover:bg-glass-muted/85 hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
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
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
