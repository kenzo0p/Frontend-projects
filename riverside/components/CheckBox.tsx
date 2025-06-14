interface Props {
  isActive: boolean;
  title: string;
  onToggle: () => void;
}

export const CheckBox = ({ isActive, title, onToggle }: Props) => {
  return (
    <div // Changed from <li> to <div>
      onClick={onToggle}
      className={`border py-1.5 px-3 w-full bg-transparent rounded-full flex items-center gap-1 cursor-pointer hover:border-purple-400 ${
        isActive ? "border-purple-400" : ""
      }`}
    >
      <label className="relative flex items-center cursor-pointer gap-1 w-full">
        <input
          type="checkbox"
          checked={isActive}
          readOnly
          className="peer appearance-none h-3 w-3 border border-white bg-transparent rounded focus:outline-none focus:ring-0 checked:bg-purple-400 checked:border-purple-400"
        />
        <svg
          className="hidden peer-checked:block absolute left-0 top-0 w-4 h-4 text-white pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="pl-1 text-sm whitespace-nowrap">{title}</span>
      </label>
    </div>
  );
};