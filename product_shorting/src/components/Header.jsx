import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ products, onFilterChange }) => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortPrice, setSortPrice] = useState(false);

  const brands = [...new Set(products.map((p) => p.brand))];
  const categories = [...new Set(products.map((p) => p.category))];

  const handleCheckboxChange = (type, value) => {
    if (type === "brand") {
      setSelectedBrands((prev) =>
        prev.includes(value) ? prev.filter((b) => b !== value) : [...prev, value]
      );
    } else if (type === "category") {
      setSelectedCategories((prev) =>
        prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
      );
    }
  };

  const handleSortChange = () => {
    setSortPrice(!sortPrice);
  };

  const applyFilters = () => {
    onFilterChange({ selectedBrands, selectedCategories, sortPrice });
  };

  return (
    <div className="container mt-3">
      <h4>Filter Products</h4>
      <div className="row">
        <div className="col-md-4">
          <h6>Brand</h6>
          {brands.map((brand) => (
            <div key={brand} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={brand}
                onChange={() => handleCheckboxChange("brand", brand)}
              />
              <label className="form-check-label">{brand}</label>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <h6>Category</h6>
          {categories.map((category) => (
            <div key={category} className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value={category}
                onChange={() => handleCheckboxChange("category", category)}
              />
              <label className="form-check-label">{category}</label>
            </div>
          ))}
        </div>

        <div className="col-md-4">
          <h6>Sort By</h6>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onChange={handleSortChange}
            />
            <label className="form-check-label">Price: Low to High</label>
          </div>
        </div>
      </div>

      <button className="btn btn-primary mt-3" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
};

Header.propTypes = {
  products: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default Header;
