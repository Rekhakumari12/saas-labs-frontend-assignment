import { API_URL, recordsPerPage } from "./constants";
import { useEffect, useState } from "react";
import { Table } from "./components/Table";
import { Pagination } from "./components/Pagination";

export type DataObject = {
  "s.no": string;
  "amt.pledged": number;
  "percentage.funded": number;
};

function App() {
  const [data, setData] = useState<DataObject[]>([]);
  const [selectedPage, setSelectedPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const totalPages = Math.ceil(data.length / recordsPerPage);
  const pages = [...Array(totalPages + 1).keys()].slice(1);

  // calculating the start and end portion of data to show per page
  const endIndex = selectedPage * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const visibleRecords = data.slice(startIndex, endIndex);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const resp = await fetch(API_URL);
      const data = await resp.json();
      setData(data);
      setIsLoading(!data.length);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full h-full ">
      <div className="mx-auto w-[800px] m-20">
        <Table data={visibleRecords} isLoading={isLoading} />
        <Pagination
          pages={pages}
          setSelectedPage={setSelectedPage}
          selectedPage={selectedPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default App;
