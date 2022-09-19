import { useContext, useState } from "react";
import FilteredDataContext from "../context/FilteredDataContext";
import { data } from "../MOCK_DATA"

const Form = () => {
  const [date, setDate] = useState(null);
  const [place, setPlace] = useState(null);
  const [price, setPrice] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  let { filteredData, updateFilteredData } = useContext(FilteredDataContext);
  let arr;
  const filterResults = () =>{
    arr = data;
    arr = !place ?arr:arr.filter((data)=>{
      return data.region.toLowerCase().indexOf(place.toLowerCase()) !== -1;
    });
    arr = !price ?arr:arr.filter((data)=>{
      const [low, high] = price.split('-');
      return data.rent>=parseInt(low) && data.rent<parseInt(high);
    });
    arr = !propertyType ?arr:arr.filter((data)=>{
      return data.type.toLowerCase()===propertyType.toLowerCase();
    });
    arr = !date ?arr:arr.filter((data)=>{
      return data.lastMoveInDate>date;
    })
    updateFilteredData(arr);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    filterResults();
  };

  return (
    <form className="flex justify-between items-center bg-white py-5 px-6 mt-8 mb-10" onSubmit={handleSubmit}>
      <div className="form-control w-44 max-w-xs">
        <label className="label pl-4 py-0">
          <span className="label-text text-gray-400 font-medium">Location</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-ghost w-44 max-w-xs font-semibold text-lg"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        />
      </div>
      <div className="divider divider-horizontal h-10 my-auto"></div>
      <div className="form-control w-44 max-w-xs">
        <label className="label pl-4 py-0">
          <span className="label-text text-gray-400 font-medium">When</span>
        </label>
        <input
          type="date"
          className="input input-ghost w-full max-w-xs"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
      </div>
      <div className="divider divider-horizontal h-10 my-auto"></div>
      <div className="form-control w-44 max-w-xs">
        <label className="label pl-4 py-0">
          <span className="label-text text-gray-400 font-medium">Price</span>
        </label>
        <select
          className="select select-ghost w-44 max-w-xs font-semibold text-lg"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        >
          <option>All</option>
          <option value="500-2500">$500-$2,500</option>
          <option value="2500-4000">$2,500-$4,000</option>
          <option value="4000-8000">$4,000-$8,000</option>
        </select>
      </div>
      <div className="divider divider-horizontal h-10 my-auto"></div>
      <div className="form-control w-44 max-w-xs">
        <label className="label pl-4 py-0">
          <span className="label-text text-gray-400 font-medium">Property Type</span>
        </label>
        <select
          className="select select-ghost w-44 max-w-xs font-semibold text-lg"
          onChange={(e) => {
            setPropertyType(e.target.value);
          }}
        >
          <option>All</option>
          <option value="house">Houses</option>
          <option value="apartment">Apartments</option>
        </select>
      </div>
      <div className="divider divider-horizontal h-10 my-auto"></div>
      <button className="btn btn-primary normal-case text-base bg-violet-500 border-transparent px-7 rounded-lg min-h-0 h-12">Search</button>
    </form>
  );
};

export default Form;
