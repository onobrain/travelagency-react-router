import { useLoaderData, Link } from "react-router-dom";

export const Countries = () => {
  const countries = useLoaderData();

  console.log(countries);
  return (
    <div className="countries">
      {countries.map((country, index) => (
        <Link to={country.name.common} key={index}>
          <div className="country-card">
            <img
              src={`https://source.unsplash.com/featured/?${country.name.common}/300x300`}
              alt={`${country.name.common} Image`}
            />
            <article>
              <p>{country.name.common}</p>
              <p>
                {country.name.common} or {country.name.official} is a country
                located in {country.region}...
              </p>
            </article>
          </div>
        </Link>
      ))}
    </div>
  );
};
 
// data loader.
export const countriesLoader = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  if (!res.ok) {
    throw Error("Could not fetch the list of Coutries");
  }

  return res.json();
};
