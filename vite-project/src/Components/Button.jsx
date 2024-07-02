function Button({ children, variant = 'primary', ...props }) {
  if (variant === 'primary') {
    return (
      <button
        className="py-[0.8rem] font-primary px-[1.6rem] rounded-full border-none text-[1rem] bg-gradient-to-r from-[#6a7d27] to-[#a2c81b] font-semibold text-white"
        {...props}
      >
        {children}
      </button>
    );
  }

  if (variant === 'secondary') {
    return (
      <button
        className="py-[0.8rem] font-primary px-[1.6rem] rounded-full border-none text-[1rem] bg-white font-semibold text-[#a0c717]"
        {...props}
      >
        {children}
      </button>
    );
  }
  if (variant === 'tertiary') {
    return (
      <button
        className="py-[0.8rem] font-primary px-[1.6rem] rounded border-none text-[1rem] font-semibold bg-clr-danger text-white"
        {...props}
      >
        {children}
      </button>
    );
  }
}

export default Button;
