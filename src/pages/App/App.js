import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Rent from "../Rent";
import SharedLayout from "../SharedLayout";
import Dummy from "../Dummy";
import { FilteredDataProvider } from "../../context/FilteredDataContext";

function App() {
  return (
    <FilteredDataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route path="rent" element={<Rent />} />
            <Route path="*" element={<Dummy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </FilteredDataProvider>
  );
}

export default App;
