import  { useEffect, useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("/e-commerce.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched products:", data.products); // ✅ Debug log
        setProducts(data.products || []);
        setFilteredProducts(data.products || []);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleFilterChange = ({ selectedBrands, selectedCategories, sortPrice }) => {
    console.log("Filters applied", { selectedBrands, selectedCategories, sortPrice });

    let filtered = products;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand));
    }

    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) => selectedCategories.includes(product.category));
    }

    if (sortPrice) {
      filtered = [...filtered].sort((a, b) => a.price - b.price);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Header products={products} onFilterChange={handleFilterChange} />
      <Products filteredProducts={filteredProducts} />
    </div>
  );
}

export default App;
