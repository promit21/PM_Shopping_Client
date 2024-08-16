import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortCriteria, setSortCriteria] = useState("priceLowToHigh");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [
    currentPage,
    pageSize,
    selectedCategory,
    selectedBrand,
    minPrice,
    maxPrice,
  ]);

  const fetchProducts = () => {
    axios
      .get("http://localhost:5000/products", {
        params: {
          page: currentPage,
          limit: pageSize,
          category: selectedCategory,
          brand: selectedBrand,
          minPrice,
          maxPrice,
        },
      })
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      })
      .catch((error) => console.error("Error fetching products", error));
  };

  // Handle search input changes
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Handle sort criteria changes
  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    setCurrentPage(1); // Reset to first page on new sort
  };

  // Handle filter changes
  const handleFilterChange = () => {
    setCurrentPage(1); // Reset to first page on new filter
    fetchProducts();
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Filter and sort products based on the selected criteria
  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    switch (sortCriteria) {
      case "priceLowToHigh":
        return a.price - b.price;
      case "priceHighToLow":
        return b.price - a.price;
      case "dateNewest":
        return new Date(b.dateAdded) - new Date(a.dateAdded);
      default:
        return 0;
    }
  });

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <h1>Product: {sortedProducts.length}</h1>

        <div className="flex justify-between items-center">
          {/* Search input field */}
          <input
            type="text"
            placeholder="Search by product name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="mb-4 p-2 border rounded"
          />

          {/* Sort options */}
          <select
            value={sortCriteria}
            onChange={handleSortChange}
            className="mb-4 p-2 border rounded"
          >
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="dateNewest">Date Added: Newest First</option>
          </select>
        </div>

        {/* Filter options */}
        <div className="mb-4 lg:flex justify-around items-center">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="mr-2 p-2 border rounded"
          >
            <option value="">Select Category</option>
            <option value="Fitness">Fitness</option>
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Kitchen Appliances">Kitchen Appliances</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Footwear">Footwear</option>
            {/* Add more categories as needed */}
          </select>

          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="mr-2 p-2 border rounded"
          >
            <option value="">Select Brand</option>
            <option value="FitFlex">FitFlex</option>
            <option value="TechGrip">TechGrip</option>
            <option value="UrbanCraft">UrbanCraft</option>
            <option value="HomeEase">HomeEase</option>
            <option value="VisionPro">VisionPro</option>
            <option value="HealthBrew">HealthBrew</option>
            <option value="FitStride">FitStride</option>
            <option value="AudioTech">UrbanCraft</option>
            {/* Add more brands as needed */}
          </select>

          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="mr-2 p-2 border rounded"
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="mr-2 p-2 border rounded"
          />

          <button onClick={handleFilterChange} className="p-2 border rounded">
            Apply Filters
          </button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center my-8">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))
          ) : (
            <p>No Products found</p>
          )}
        </div>

        {/* Pagination controls */}
        <div className="pagination-controls w-max mx-auto py-5">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="mr-2 p-2 border rounded"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="ml-2 p-2 border rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
