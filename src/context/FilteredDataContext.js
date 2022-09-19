
import { createContext, useState } from "react";
import { data } from "../MOCK_DATA";

const FilteredDataContext = createContext();

export default FilteredDataContext;

export function FilteredDataProvider({ children }) {
  const [filteredData, setFilteredData] = useState(data)

  const updateFilteredData = (filteredData) => {
    setFilteredData(filteredData)
  }
  return (
    <FilteredDataContext.Provider value={{ filteredData, updateFilteredData }}>
      {children}
    </FilteredDataContext.Provider>
  )
}