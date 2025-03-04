import { Link } from "react-router-dom";

const Home = ({ countries }) => {

  const getBorderCountryName = (borderCode) => {
    const borderCountry = countries.find(c => c.cca3 === borderCode);
    return borderCountry ? borderCountry.name.common : borderCode;
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Country List</h1>
      <div className="row">
        {countries.length > 0 ? (
          countries.map((country, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card shadow-sm">
                <Link to={`/country/${country.name.common}`} className="text-decoration-none text-dark">
                  <img
                    src={country.flags.svg}
                    alt={`${country.name.common} flag`}
                    className="card-img-top"
                    style={{ height: "150px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{country.name.common}</h5>
                    <p className="card-text"><strong>Code:</strong> {country.cca3}</p>
                    <p className="card-text"><strong>Region:</strong> {country.region}</p>
                    <p className="card-text">
                      <strong>Borders:</strong>{" "}
                      {country.borders && country.borders.length > 0 ? (
                        country.borders
                          .map(borderCode => getBorderCountryName(borderCode))
                          .join(", ")
                      ) : (
                        "None"
                      )}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No matching countries found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
