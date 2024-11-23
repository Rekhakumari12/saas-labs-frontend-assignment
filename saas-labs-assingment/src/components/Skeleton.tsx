import { recordsPerPage } from "../constants";

export const Skeleton = () => {
  const times = [...Array(recordsPerPage).keys()];
  return (
    <>
      {times.map((time) => (
        <tr className={"bg-white border-b"} key={time}>
          <td className={"px-6 py-4"}>
            <p className="mb-4 h-3 w-10 rounded-full bg-gray-200"></p>
          </td>
          <td className={"px-6 py-4"}>
            <p className="mb-4 h-3 w-[150px] rounded-full bg-gray-200"></p>
          </td>
          <td className={"px-6 py-4"}>
            <p className="mb-4 h-3 w-[150px] rounded-full bg-gray-200"></p>
          </td>
        </tr>
      ))}
    </>
  );
};
