export const NextButton = ({
  handleNext,
  disabled,
}: {
  handleNext: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={handleNext}
      className={`inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 ${
        disabled ? "bg-gray-100" : ""
      }`}
    >
      <span className="sr-only">Next</span>
      <svg
        className="size-5"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          fillRule="evenodd"
          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
};
