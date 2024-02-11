import { Link, useLoaderData, useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { name } = useParams();
  const country = useLoaderData();

  return (
    <div className="country-details">
      {country ? (
        <>
          <img
            src={`https://source.unsplash.com/featured/?${country.name.common}/300x300`}
            alt={`${country.name.common} Image`}
          />
          <h2> {country.name.common} </h2>
          <h4> Official name : {country.name.official}</h4>
          <h4> Country Capital: {country.capital}</h4>
          <h4> Population : {country.population}</h4>

          <h3>Desciption</h3>
          <article>
            <p>
              {country.name.common} is a sovereign nation situated in the region
              of {country.region} on the {country.continent} continent. Known
              for its diverse landscapes and rich cultural heritage,{" "}
              {country.name.common} has captivated the world with its unique
              blend of traditions and modernity.
            </p>
            <p>
              With a population of approximately {country.population},{" "}
              {country.name.common} stands as a testament to the vibrant
              tapestry of human civilization. From bustling urban centers to
              serene rural landscapes, the country offers a wide array of
              experiences for both residents and visitors alike.
            </p>
            <p>
              Embark on a journey through {country.name.common}'s historical
              landmarks, each telling a story of the nation's past and
              contributing to its identity. Explore the customs and traditions
              that have been passed down through generations, shaping the
              cultural mosaic that defines {country.name.common}.
            </p>
            <p>
              Whether you're drawn to the scenic beauty of or the vibrant cities
              that pulse with life, {country.name.common} welcomes you to
              discover the unique charm and hospitality that make it truly
              exceptional.
            </p>
          </article>
          <Link to={"/explore"} style={{marginTop : '2rem' , marginBottom:'2rem'}}>Back to countries.</Link>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// data loader
export const countryDetailsLoader = async ({ params }) => {
  const { name } = params;

  const res = await fetch("https://restcountries.com/v3.1/name/" + name);

  if (!res.ok) {
    throw Error("Could not find that country.");
  }

  const [country] = await res.json();

  return country;
};
