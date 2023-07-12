
function Button({label,small,onClick,outline}) {
  return (
    <button
        onClick={onClick}
        className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-sm
        hover:opacity-80
        transition
        w-full
        ${outline ? "bg-white" : "bg-violet-400"}
        ${outline ? "border-black" : "border-violet-400"}
        ${outline ? "text-black" : "text-white"}
        ${small ? "py-1":"py-3"}
        ${small ? "text-sm":"text-md"}
        ${small ? "font-light":"font-semibold"}
        ${small ? "border-[1px]":"border-2"}
    `}
    >
        {label}
    </button>
  )
}

export default Button