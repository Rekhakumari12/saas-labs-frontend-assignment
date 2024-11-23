export const PrevButton = ({
  handlePrev,
  disabled,
}: {
  handlePrev: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      onClick={handlePrev}
      className={`inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 ${
        disabled ? "bg-gray-100" : ""
      }`}
      disabled={disabled}
    >
      <span className="sr-only">Previous</span>
      <svg
        className="size-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fillRule="evenodd"
          d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
