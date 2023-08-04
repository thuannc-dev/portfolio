const SMALL_STYLE = `text-sm py-1 px-3 border-[2px]`;
const LARGE_STYLE = `text-md py-3 px-6 border-2`;
const OUTLINE_STYLE = `bg-white border-gray-300 text-sky-400 drop-shadow-outline-btn active:drop-shadow-outline-btn-active`;
const CONTAINED_STYLE = `border-none bg-greeness-400 border-sky-400 text-white drop-shadow-contained-btn active:drop-shadow-contained-btn-active`;

const Button = ({
  onClick,
  disabled,
  outline,
  small,
  fullWidth,
  children,
  // icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
      box-content relative disabled:opacity-70 disabled:cursor-not-allowed rounded-xl hover:opacity-80 transition-all delay-2000 font-semibold
        ${fullWidth ? "w-full" : "w-auto"}
        ${small ? SMALL_STYLE : LARGE_STYLE}
        ${outline ? OUTLINE_STYLE : CONTAINED_STYLE}
        active:translate-y-[3px]
      `}
    >
      {children}
    </button>
  );
};

export default Button;
