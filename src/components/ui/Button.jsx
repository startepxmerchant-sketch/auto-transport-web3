import { forwardRef } from 'react'

const Button = forwardRef(({ className = '', variant = 'default', size = 'default', children, ...props }, ref) => {
  const variants = {
    default: 'bg-yellow-400 text-blue-900 hover:bg-yellow-500',
    outline: 'border-2 border-yellow-400 bg-transparent hover:bg-yellow-400/10',
    ghost: 'bg-transparent hover:bg-white/10'
  }
  
  const sizes = {
    default: 'px-6 py-3',
    sm: 'px-4 py-2 text-sm',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      ref={ref}
      className={`rounded-xl font-bold transition-all duration-200 flex items-center justify-center ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export { Button }
