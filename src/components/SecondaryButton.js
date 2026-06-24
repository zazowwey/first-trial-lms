export default function SecondaryButton({ children, className = "", ...props }) {
  return (
    <button
      className={`px-8 py-4 rounded-full border-2 border-[var(--color-charcoal)] bg-transparent text-[var(--color-charcoal)] font-semibold hover:bg-[var(--color-charcoal)] hover:text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
