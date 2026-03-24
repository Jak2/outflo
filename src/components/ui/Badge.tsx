interface BadgeProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
}

export default function Badge({ label, onClick, active }: BadgeProps) {
  const base =
    "inline-block px-3 py-0.5 text-xs font-bold border-2 border-neo-black dark:border-white transition-all";

  const style = active
    ? "bg-neo-yellow text-neo-black shadow-neo-sm dark:shadow-neo-white-sm"
    : "bg-white dark:bg-[#1A1A1A] text-neo-black dark:text-white hover:bg-neo-yellow hover:text-neo-black hover:shadow-neo-sm dark:hover:shadow-neo-white-sm";

  if (onClick) {
    return (
      <button onClick={onClick} className={`${base} ${style} cursor-pointer`}>
        {label}
      </button>
    );
  }

  return <span className={`${base} ${style}`}>{label}</span>;
}
