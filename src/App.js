import "./index.css";

import Header from "./Components/Header";
import { useState, useEffect } from "react";
import CountryItems from "./Components/CountryItems";

function App() {
  const [countries, setCountries] = useState([]);
  const [userSearched, setUserSearched] = useState("");

  const handleSubmitSearch = (e) => {
    try {
      const getSearchedCountries = async () => {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${userSearched}`
        );
        const data = await response.json();
        setCountries(data);
      };
      getSearchedCountries();
    } catch (err) {
      console.error(err);
    }
    e.preventDefault();
  };

  useEffect(() => {
    try {
      const getCountries = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      };
      getCountries();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="form-group">
        <h1>{userSearched}</h1>
        <form onSubmit={handleSubmitSearch}>
          <input
            type="text"
            placeholder="Search Country..."
            onChange={(e) => setUserSearched(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          {countries.length > 0 ? (
            countries.map((country) => (
              <CountryItems key={country.id} country={country} />
            ))
          ) : (
            <h2>Sorry country not found</h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
