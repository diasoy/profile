import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-lg border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow,background-color,border-color] backdrop-blur-md overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-primary/50 bg-primary text-primary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.36)] [a&]:hover:bg-primary/90",
        secondary:
          "border-glass-border bg-glass-muted text-secondary-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] [a&]:hover:bg-glass-surface dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]",
        destructive:
          "border-destructive/60 bg-destructive/85 text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline:
          "border-glass-border bg-glass-surface/65 text-foreground [a&]:hover:bg-glass-muted [a&]:hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
