import { useParams, Link } from "react-router-dom";

const SelectedRegion = ({ countries }) => {
  const { regionName } = useParams();

  // Filter countries by region
  const regionCountries = countries.filter(c => c.region.toLowerCase() === regionName.toLowerCase());

  if (regionCountries.length === 0) {
    return <h2 className="text-center mt-5">No countries found in this region.</h2>;
  }

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-secondary mb-3">⬅ Back to Home</Link>
      <h2 className="mb-4">Countries in {regionName}</h2>
      <div className="row">
        {regionCountries.map(country => (
          <div key={country.cca3} className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <img src={country.flags.svg} alt={country.name.common} className="card-img-top" style={{ maxHeight: "150px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <Link to={`/country/${country.name.common}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedRegion;
