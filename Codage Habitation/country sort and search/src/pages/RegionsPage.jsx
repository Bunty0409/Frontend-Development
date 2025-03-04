import { Link } from "react-router-dom";

const RegionsPage = ({ countries }) => {
  // Get unique regions
  const regions = [...new Set(countries.map(country => country.region))].filter(Boolean);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Select a Region</h1>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        {regions.map(region => (
          <Link key={region} to={`/region/${region}`} className="btn btn-outline-primary">
            {region}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RegionsPage;
