import { useState, useEffect } from "react";
import { filterCountriesBySearch, filterCountriesByIndependence } from "../utils/filterUtils";

const useCountryFilters = (countries) => {
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    setFilteredCountries(countries); // Initialize filtered data when countries are fetched
  }, [countries]);

  const handleSearch = (searchTerm) => {
    setFilteredCountries(filterCountriesBySearch(countries, searchTerm));
  };

  const handleFilter = (filterValue) => {
    setFilteredCountries(filterCountriesByIndependence(countries, filterValue));
  };

  return { filteredCountries, handleSearch, handleFilter };
};

export default useCountryFilters;
