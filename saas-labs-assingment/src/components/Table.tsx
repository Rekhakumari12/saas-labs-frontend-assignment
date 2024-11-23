import { DataObject } from "../App";
import { tableHeading } from "../constants";
import { Skeleton } from "./Skeleton";

export const Table = ({
  data,
  isLoading,
}: {
  data: DataObject[];
  isLoading?: boolean;
}) => {
  return (
    <table className="text-sm text-left rtl:text-right text-gray-500 w-full border mb-5">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
          {tableHeading.map((name) => (
            <th key={name} className="px-6 py-3">
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className={isLoading ? "max-w-full animate-pulse" : ""}>
        {isLoading ? (
          <Skeleton />
        ) : (
          data.map((obj: DataObject) => (
            <tr className={"bg-white border-b"} key={obj["s.no"]}>
              <td className="px-6 py-4">{obj["s.no"]}</td>
              <td className="px-6 py-4">{obj["percentage.funded"]}</td>
              <td className="px-6 py-4">{obj["amt.pledged"]}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};
