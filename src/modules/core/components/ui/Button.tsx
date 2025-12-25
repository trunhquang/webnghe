import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { LucideIcon } from "lucide-react"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "sm" | "md" | "lg" | "icon"
    icon?: LucideIcon
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = "", variant = "primary", size = "md", asChild = false, icon: Icon, children, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"

        // Base styles
        const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background"

        // Variant styles
        const variants = {
            primary: "bg-deep-blue text-white hover:bg-deep-blue/90 font-montserrat",
            secondary: "bg-amber-orange text-white hover:bg-amber-orange/90 font-montserrat",
            outline: "border border-gray-200 hover:bg-gray-100 hover:text-gray-900",
            ghost: "hover:bg-gray-100 hover:text-gray-900",
        }

        // Size styles
        const sizes = {
            sm: "h-9 px-4 text-xs",
            md: "h-11 px-6 text-sm",
            lg: "h-14 px-8 text-base",
            icon: "h-10 w-10",
        }

        const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

        return (
            <Comp
                className={classes}
                ref={ref}
                {...props}
            >
                {Icon && <Icon className="mr-2 h-4 w-4" />}
                {children}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button }
