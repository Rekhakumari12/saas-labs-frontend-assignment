import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";

type PaginationType = {
  pages: number[];
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
  selectedPage: number;
  totalPages: number;
};

export const Pagination = (props: PaginationType) => {
  const { pages, selectedPage, totalPages, setSelectedPage } = props;

  const selectedButtonStyles =
    "text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 focus-visible:outline-offset-1";
  const buttonStyles =
    "text-gray-500 ring-1 ring-inset ring-gray-300 hover:bg-gray-50";

  const handlePrev = () => {
    if (selectedPage > 1) setSelectedPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (selectedPage < totalPages) setSelectedPage((prev) => prev + 1);
  };

  return (
    <div className="flex justify-center">
      <PrevButton handlePrev={handlePrev} disabled={selectedPage === 1} />
      {pages?.map((page, index) => (
        <button
          key={page}
          className={`inline-flex items-center px-4 py-2 text-sm font-semibold ${
            selectedPage === index + 1 ? selectedButtonStyles : buttonStyles
          } `}
          onClick={() => setSelectedPage(index + 1)}
        >
          {page}
        </button>
      ))}
      <NextButton
        handleNext={handleNext}
        disabled={selectedPage === totalPages}
      />
    </div>
  );
};
