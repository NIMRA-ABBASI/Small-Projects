import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

function SearchAuto() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handeChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParams(query);
    // if query character are gr8 than 2
    //You have to check those results in users array
    // check one item of each users if characters exist save the name in variable
    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  function ItemClick(event) {
    setShowDropDown(false);
    setSearchParams(event.target.innerText);
    setFilteredUsers([]);
  }

  async function FetchData() {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
      }
    } catch (e) {
      setErrorMsg(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  if (errorMsg !== null) <p>Error {errorMsg}</p>;

  console.log(users, filteredUsers);
  return (
    <div className="container">
      {loading ? (
        <p>Data is loading.Please wait...</p>
      ) : (
        <input
          name="Search User"
          placeholder="Search User Here"
          value={searchParams}
          onChange={handeChange}
        />
      )}
      {showDropDown ? (
        <Suggestion data={filteredUsers} Click={ItemClick} />
      ) : null}
    </div>
  );
}

export default SearchAuto;
