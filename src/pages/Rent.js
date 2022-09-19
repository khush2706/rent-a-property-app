import Form from "../components/Form";
import FilteredDataContext from "../context/FilteredDataContext";
import { useContext, useEffect } from "react";
import Card from "../components/Card";
import { data } from "../MOCK_DATA";

const Rent = () => {
  const { filteredData, updateFilteredData } = useContext(FilteredDataContext);
  let arr = filteredData;

  //sorts the data array initially based on popularity tag
  if (arr.length > 1) {
    arr.sort((a, b) => {
      if (a.tag === "popular" && !b.tag) {
        return -1;
      }
      if (!a.tag && b.tag === "popular") {
        return 1;
      }
      return 0;
    });
  }
  useEffect(() => {
    updateFilteredData(arr);
  }, []);

  return (
    <div className="wrapper h-full py-10 px-36 bg-gray-50">
      <div className="header flex justify-between">
        <h1 className="text-4xl font-semibold">Search properties to rent</h1>
        <select className="select select-bordered w-60 max-w-xs text-gray-400 h-11 min-h-0 text-base">
          <option>Search with Search Bar</option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>
      <Form />
      <div className="flex justify-between items-center flex-wrap">
        {filteredData &&
          filteredData.map((data) => (
            <Card
              key={data.id}
              rent={data.rent}
              name={data.name}
              address={data.address}
              beds={data.beds}
              bathrooms={data.bathrooms}
              area={data.area}
              tag={data.tag}
            />
          ))}
      </div>
    </div>
  );
};

export default Rent;
