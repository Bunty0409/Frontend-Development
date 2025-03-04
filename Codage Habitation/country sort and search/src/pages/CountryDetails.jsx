import { useParams, Link } from "react-router-dom";

const CountryDetails = ({ countries }) => {
  const { countryName } = useParams(); // Get the country name from the URL

  // Find the selected country from the list
  const country = countries.find(c => c.name.common.toLowerCase() === countryName.toLowerCase());

  if (!country) {
    return <h2 className="text-center mt-5">Country not found.</h2>;
  }

  // Function to get the country name from the border country code
  const getBorderCountryName = (borderCode) => {
    const borderCountry = countries.find(c => c.cca3 === borderCode);
    return borderCountry ? borderCountry.name.common : borderCode; // If not found, show code
  };

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-3">⬅ Back to Home</Link>

      <div className="card shadow-lg p-4 m-auto" style={{ width: "40%" }}>
        <img src={country.flags.svg} alt={`${country.name.common} flag`} className="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
        <div className="card-body">
          <h2 className="card-title">{country.name.common}</h2>
          <p><strong>Code:</strong> {country.cca3}</p>
          <p>
            <strong>Region:</strong> 
            <Link to={`/region/${country.region}`} className="ms-2 text-primary">
              {country.region}
            </Link>
          </p>
          <p>
            <strong>Borders:</strong> 
            {country.borders && country.borders.length > 0 ? (
              country.borders
                .map(borderCode => {
                  const borderCountryName = getBorderCountryName(borderCode);
                  return (
                    <Link 
                      key={borderCode} 
                      to={`/country/${borderCountryName}`} 
                      className="text-primary"
                    >
                      {borderCountryName}
                    </Link>
                  );
                })
                .reduce((prev, curr) => [prev, ", ", curr])
            ) : (
              "None"
            )}
          </p>

        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
