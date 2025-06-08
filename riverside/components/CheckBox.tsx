interface Props {
  isActive: boolean;
  title: string;
  onToggle: () => void;
}

const CheckBox = ({ isActive, title, onToggle }: Props) => {
  return (
    <li
      onClick={onToggle}
      className={`border py-2 px-4 bg-transparent rounded-full flex items-center gap-1 cursor-pointer hover:border-purple-400 ${
        isActive ? "border-purple-400" : ""
      }`}
    >
      <label className="relative flex items-center cursor-pointer gap-1 w-full">
        <input
          type="checkbox"
          checked={isActive}
          readOnly
          className="peer appearance-none h-4 w-4 border border-white bg-transparent rounded focus:outline-none focus:ring-0 checked:bg-purple-400 checked:border-purple-400"
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
        <span className="pl-1">{title}</span>
      </label>
    </li>
  );
};

export default CheckBox;
