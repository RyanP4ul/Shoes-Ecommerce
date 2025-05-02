import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../../constants/products';

const FilterSidebar: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const categories = Array.from(new Set(products.map((p) => p.category)));
  const brands = Array.from(new Set(products.map((p) => p.brand)));

  const handleFilterChange = (key: string, value: string) => {
    if (value) {
      setSearchParams((prev) => {
        prev.set(key, value);
        return prev;
      });
    } else {
      setSearchParams((prev) => {
        prev.delete(key);
        return prev;
      });
    }
  };

  return (
    <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-6">Filters</h2>

      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                name="category"
                value={category}
                checked={searchParams.get('category') === category}
                onChange={(e) => handleFilterChange('category', e.target.value)}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Brands</h3>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center space-x-2">
              <input
                type="radio"
                name="brand"
                value={brand}
                checked={searchParams.get('brand') === brand}
                onChange={(e) => handleFilterChange('brand', e.target.value)}
                className="form-radio text-blue-600"
              />
              <span className="text-gray-700">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Price Range</h3>
        <div className="space-y-2">
          <input
            type="number"
            placeholder="Min Price"
            value={searchParams.get('minPrice') || ''}
            onChange={(e) => handleFilterChange('minPrice', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="Max Price"
            value={searchParams.get('maxPrice') || ''}
            onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Sort By */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Sort By</h3>
        <select
          value={searchParams.get('sortBy') || ''}
          onChange={(e) => handleFilterChange('sortBy', e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating-desc">Rating: High to Low</option>
          <option value="reviews-desc">Reviews: High to Low</option>
        </select>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => setSearchParams({})}
        className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FilterSidebar; 