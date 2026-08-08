// src/pages/Products/ProductList.jsx
import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Search,
  Filter,
  X,
  Grid3X3,
  LayoutGrid,
  Package,
  ArrowRight,
} from "lucide-react";
import productsData from "../../data/products.js";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const ProductList = () => {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");

  const allProducts = useMemo(() => {
    if (category) {
      return productsData.filter((product) => product.slug === category);
    }
    return productsData;
  }, [category]);

  const categories = useMemo(() => {
    const cats = ["All", ...new Set(productsData.map((p) => p.category))];
    return cats;
  }, []);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [allProducts, searchTerm, selectedCategory]);

  const categoryName = category
    ? category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "All Products";

  if (category && allProducts.length === 0) {
    return (
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-[#173F52] mb-2">
            No Products Found
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            No products available in "{categoryName}" category.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#173F52] hover:bg-[#122a6e] text-white font-medium px-6 py-2.5 rounded-lg transition duration-200"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner */}
      <div
        className="relative h-44 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#173F52]/90 to-[#173F52]/70"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-0.5 bg-[#D92B20]"></span>
              <span className="text-[#D92B20] text-sm font-semibold uppercase tracking-widest">
                {category ? "Category" : "Our Collection"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {categoryName}
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl">
              {category
                ? `Premium quality ${categoryName.toLowerCase()} products for your industrial needs`
                : "Explore our complete range of premium industrial products"}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="w-2 h-2 bg-[#D92B20] rounded-full"></span>
                {allProducts.length} Products
              </span>
              <span className="w-px h-6 bg-white/20"></span>
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="w-2 h-2 bg-[#D92B20] rounded-full"></span>
                Premium Quality
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12">
        {/* Filter and View Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          {/* Search Bar */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-gray-200 bg-white focus:border-[#D92B20] focus:ring-2 focus:ring-[#D92B20]/20 outline-none transition-all shadow-sm text-sm"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D92B20] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Category Filter - Desktop */}
            {!category && (
              <div className="hidden md:flex flex-wrap gap-2">
                {categories.slice(0, 5).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      selectedCategory === cat
                        ? "bg-[#173F52] text-white shadow-md shadow-[#173F52]/20"
                        : "bg-white border border-gray-200 text-gray-600 hover:border-[#D92B20] hover:text-[#D92B20]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
                {categories.length > 5 && (
                  <button
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                    className="px-4 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-600 hover:border-[#D92B20] hover:text-[#D92B20] transition-all duration-300"
                  >
                    +{categories.length - 5} more
                  </button>
                )}
              </div>
            )}

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "grid"
                    ? "bg-[#173F52] text-white shadow-sm"
                    : "text-gray-400 hover:text-[#173F52]"
                }`}
                aria-label="Grid view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-200 ${
                  viewMode === "list"
                    ? "bg-[#173F52] text-white shadow-sm"
                    : "text-gray-400 hover:text-[#173F52]"
                }`}
                aria-label="List view"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Dropdown - Mobile */}
            {!category && (
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="md:hidden flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-[#D92B20] transition-colors shadow-sm"
              >
                <Filter className="w-4 h-4" />
                Filter
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory !== "All"
                      ? "bg-[#D92B20] text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                >
                  {selectedCategory !== "All" ? "1" : "0"}
                </span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Filter Dropdown */}
        {!category && isFilterOpen && (
          <div className="md:hidden mt-4 p-4 bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsFilterOpen(false);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-[#173F52] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="text-sm text-gray-500 mb-6">
          Showing {filteredProducts.length} of {allProducts.length} products
          {category && ` in ${categoryName}`}
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-5 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.slug}`}
              className={`group relative rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#D92B20]/40 ${
                viewMode === "list" ? "flex gap-4 p-4" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  viewMode === "grid"
                    ? "w-full h-64"
                    : "w-48 h-48 flex-shrink-0"
                }`}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F52]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <ArrowRight className="w-4 h-4 text-[#173F52]" />
                </div>
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div
                className={`${
                  viewMode === "grid"
                    ? "p-4"
                    : "flex-1 p-4 flex flex-col justify-center"
                }`}
              >
                <h3
                  className={`font-bold text-[#173F52] group-hover:text-[#D92B20] transition-colors ${
                    viewMode === "grid" ? "text-sm" : "text-lg"
                  }`}
                >
                  {product.name}
                </h3>
                {viewMode === "list" && product.shortDescription && (
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    {product.shortDescription}
                  </p>
                )}
                {viewMode === "list" && (
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xs text-gray-400">
                      {product.category}
                    </span>
                    <span className="w-px h-4 bg-gray-200"></span>
                    <span className="text-xs text-[#D92B20]">View Product</span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 text-sm">
                No products found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="mt-4 text-[#D92B20] font-medium hover:underline inline-flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductList;
