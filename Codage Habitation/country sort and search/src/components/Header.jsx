import { useNavigate, useLocation } from "react-router-dom";

const Header = ({ onSearch, onFilter }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle search input
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  // Handle independent/dependent filter
  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  // Navigate to the regions page
  const handleRegionClick = () => {
    navigate("/regions"); // Redirect to the Regions page
  };

  return (
    <nav className="navbar navbar-dark bg-dark px-3 d-flex align-items-center justify-content-between">
      <a className="navbar-brand" href="/">Country Explorer</a>

      {/* Hide search bar & filter dropdown on the Regions page */}
      {location.pathname !== "/regions" &&  (
        <>
          {/* Search Input */}
          <input
            type="text"
            className="form-control w-25"
            placeholder="Search by name, region, or code..."
            onChange={handleSearch}
          />

          {/* Independent/Dependent Filter */}
          <select className="form-select w-25 ms-3" onChange={handleFilterChange}>
            <option value="">All Countries</option>
            <option value="true">Independent</option>
            <option value="false">Dependent</option>
          </select>
        </>
      )}

      {/* Button to navigate to Regions Page */}
      <button className="btn btn-primary ms-3" onClick={handleRegionClick}>
        🌍 Regions
      </button>
    </nav>
  );
};

export default Header;
