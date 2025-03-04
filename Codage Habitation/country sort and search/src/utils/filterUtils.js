export const filterCountriesBySearch = (countries, searchTerm) => {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.region?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      country.cca3?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };
  
  export const filterCountriesByIndependence = (countries, filterValue) => {
    if (filterValue === "") return countries;
    const isIndependent = filterValue === "true"; // Convert to boolean
    return countries.filter((country) => country.independent === isIndependent);
  };
  