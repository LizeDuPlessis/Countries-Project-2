function CountryItems({ country }) {
  return (
    <div className="country-list">
      <h1>{country.name.common}</h1>
      <h1>Population: {country.population}</h1>
      <div>
        <img src={country.flags.png} alt="flag" />
      </div>
    </div>
  );
}

export default CountryItems;
