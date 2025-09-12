import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const numberedBadgeVariants = cva(
  "bg-[#1A3D5D] text-white rounded-full flex items-center justify-center font-bold shadow-md",
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-sm",
        md: "w-12 h-12 text-xl",
        lg: "w-16 h-16 text-2xl",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
)

interface NumberedBadgeProps extends VariantProps<typeof numberedBadgeVariants> {
  number: number | string
  className?: string
}

function NumberedBadge({ number, size, className }: NumberedBadgeProps) {
  return <div className={cn(numberedBadgeVariants({ size }), className)}>{number}</div>
}

export { NumberedBadge, numberedBadgeVariants }
