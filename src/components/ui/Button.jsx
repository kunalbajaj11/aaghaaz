import { forwardRef } from 'react'

const variants = {
  primary:
    'bg-gradient-to-r from-aaghaaz-800 to-aaghaaz-teal text-white shadow-card hover:shadow-soft hover:brightness-[1.03]',
  secondary:
    'border border-white/25 bg-white/10 text-white backdrop-blur-md hover:bg-white/15',
  outline:
    'border border-aaghaaz-800/15 bg-white text-aaghaaz-900 shadow-sm hover:border-aaghaaz-teal/40 hover:shadow-card',
  ghost: 'text-aaghaaz-800 hover:bg-aaghaaz-900/5',
}

const sizes = {
  md: 'px-5 py-2.5 text-sm font-medium rounded-full',
  lg: 'px-7 py-3.5 text-[0.95rem] font-medium rounded-full',
}

export const Button = forwardRef(function Button(
  { variant = 'primary', size = 'md', className = '', href, children, ...props },
  ref,
) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aaghaaz-teal ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a ref={ref} href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button ref={ref} type="button" className={classes} {...props}>
      {children}
    </button>
  )
})
