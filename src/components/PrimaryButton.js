export default function PrimaryButton({ children, className, ...props }) {
  return (
    <button
      className={`px-8 py-4 rounded-full bg-[var(--color-charcoal)] text-white font-semibold hover:bg-[var(--color-lime)] transition-all ease-in-out duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
