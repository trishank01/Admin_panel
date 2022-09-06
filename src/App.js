import { useState } from "react";
import "./App.css";
import DataTable from "./components/dataTable/DataTable";
import Searchbar from "./components/searchbar/Searchbar";
import UserDetails from "./components/userDetails/UserDetails";
import { data as dataList } from "./constants/Index";

function App() {
  const [value, setValue] = useState(null);
  const [search, setSearch] = useState("");
  const [data, setData] = useState(dataList);

  const showData = (item) => {
    setValue(item);
  };

  const onSearchValue = (searchValue) => {
    setSearch(searchValue);
    if (searchValue === "") {
      setData(dataList);
    } else {
      const newArray = dataList.filter((i) => {
        return (
          i.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.lastName.toLowerCase().includes(searchValue.toLowerCase()) ||
          i.email.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
      setData(newArray);
    }
  };

  return (
    <>
      <main>
        <div id="table-section">
          <Searchbar search={search} onSearchValue={onSearchValue} />
          <DataTable data={data} showData={showData} />
        </div>
        <UserDetails value={value} />
      </main>
    </>
  );
}

export default App;
