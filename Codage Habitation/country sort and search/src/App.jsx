import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFetchCountries from "./hooks/useFetchCountries";
import useCountryFilters from "./hooks/useCountryFilters";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import RegionsPage from "./pages/RegionsPage";
import SelectedRegion from "./pages/SelectedRegion";
import Header from "./components/Header";

function App() {
  const { countries } = useFetchCountries();
  const { filteredCountries, handleSearch, handleFilter } = useCountryFilters(countries);

  return (
    <Router>
      <Header onSearch={handleSearch} onFilter={handleFilter} />
      <Routes>
        <Route path="/" element={<Home countries={filteredCountries} />} />
        <Route path="/country/:countryName" element={<CountryDetails countries={countries} />} />
        <Route path="/regions" element={<RegionsPage countries={countries} />} />
        <Route path="/region/:regionName" element={<SelectedRegion countries={countries} />} />
      </Routes>
    </Router>
  );
}

export default App;
