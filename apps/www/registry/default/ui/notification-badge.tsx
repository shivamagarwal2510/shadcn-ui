import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const notificationBadgeVariants = cva(
  "absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground",
        secondary: "bg-secondary text-secondary-foreground",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border-2 border-background bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface NotificationBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof notificationBadgeVariants> {
  count?: number | string
}

const NotificationBadge = React.forwardRef<HTMLDivElement, NotificationBadgeProps>(
  ({ className, variant, count, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(notificationBadgeVariants({ variant }), className)}
        {...props}
      >
        {count}
      </div>
    )
  }
)
NotificationBadge.displayName = "NotificationBadge"

export { NotificationBadge, notificationBadgeVariants }
