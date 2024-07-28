import React from "react";
import { useState, useEffect } from "react";
import User from "./User";
import './style.css';


function GithubProfiler() {
  const [username, setUsername] = useState("NIMRA-ABBASI");
  const [loading, setLoading] = useState(false);
  const [userdata, setUserData] = useState(null);

  async function fetchGithub() {
    setLoading(true);
    const response = await fetch(`http://api.github.com/users/${username}`);
    const data = await response.json();
    if (data ) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  }

  useEffect(() => {
    fetchGithub();
  }, []);

  function handleSubmit() {
    fetchGithub();
  }

  if (loading) {
    <div>
      <p>Data is loading.Please wait.</p>
    </div>;
  }
  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userdata !== null ? <User data={userdata} /> : null}
    </div>
  );
}

export default GithubProfiler;
