export function Container({ as: Component = 'div', className = '', children, ...rest }) {
  return (
    <Component
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  )
}
