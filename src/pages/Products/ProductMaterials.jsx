// src/pages/Products/ProductMaterials.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductSlugs } from "../../components/productDetails";
import productMaterials from "../../data/productMaterials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const ProductMaterials = () => {
  const { category } = useParams();

  // Check if this category uses custom components
  const allSlugs = getProductSlugs();
  const isCustomCategory = allSlugs.some((slug) => slug === category);

  if (isCustomCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-[10%]">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Try to find materials for the category
  let materials = productMaterials[category] ?? [];

  // If no materials found, try to find by matching with available categories
  if (!materials.length) {
    const availableCategories = Object.keys(productMaterials);

    // Try exact match
    let matchedCategory = availableCategories.find((key) => key === category);

    // If no exact match, try case-insensitive match
    if (!matchedCategory) {
      matchedCategory = availableCategories.find(
        (key) => key.toLowerCase() === category.toLowerCase(),
      );
    }

    // If still no match, try partial match
    if (!matchedCategory) {
      matchedCategory = availableCategories.find(
        (key) => key.includes(category) || category.includes(key),
      );
    }

    if (matchedCategory) {
      materials = productMaterials[matchedCategory] ?? [];
    }
  }

  const categoryName =
    category
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ") || "Products";

  if (!materials.length) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-[10%] px-4 sm:px-6">
        <div className="text-center max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-lg w-full">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 sm:h-8 sm:w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#173F52] mb-1.5 sm:mb-2">
            Category Not Found
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
            No products found in "{categoryName}" category.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#173F52] hover:bg-[#122a6e] text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition duration-200 text-sm sm:text-base w-full sm:w-auto"
          >
            Browse All Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen pt-[10%]">
      {/* Hero Banner - Premium */}
      <div
        className="relative h-60 sm:h-56 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#173F52]/90 to-[#173F52]/70"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/images/pattern-dots.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4 sm:px-5 md:px-8 lg:px-10">
          <div className="max-w-3xl w-full">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="w-10 sm:w-12 h-0.5 bg-[#D92B20]"></span>
              <span className="text-[#D92B20] text-xs sm:text-sm font-semibold uppercase tracking-widest">
                Products
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight break-words">
              {categoryName}
            </h1>
            <p className="text-base sm:text-lg text-gray-200 mt-2 sm:mt-3 max-w-2xl">
              Premium quality materials for demanding industrial applications
            </p>
            <div className="flex items-center gap-4 mt-3 sm:mt-4">
              <span className="inline-flex items-center gap-2 text-white/80 text-xs sm:text-sm">
                <span className="w-2 h-2 bg-[#D92B20] rounded-full"></span>
                {materials.length} Products Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards - Premium Design */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12 md:py-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#173F52]">
              Our <span className="text-[#D92B20]">{categoryName}</span> Range
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              High-quality products for your industrial needs
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <span className="w-16 h-0.5 bg-gray-200"></span>
            <span>{materials.length} Products</span>
          </div>
        </div>

        {/* Grid - Mobile first */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {materials.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20] transform hover:-translate-y-1.5"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Image Section */}
              <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge */}
                {item.materialGroup && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-lg border border-white/50">
                    {item.materialGroup}
                  </div>
                )}

                {/* Title on Image */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                  <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-tight drop-shadow-lg line-clamp-2">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
                  {item.shortDescription}
                </p>

                {/* Standards */}
                {item.standards && (
                  <div className="mt-2 sm:mt-3 flex flex-wrap gap-1 sm:gap-1.5">
                    {item.standards
                      .split(",")
                      .slice(0, 3)
                      .map((std, idx) => (
                        <span
                          key={idx}
                          className="text-[8px] sm:text-[10px] font-medium bg-gray-100 text-gray-600 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200"
                        >
                          {std.trim()}
                        </span>
                      ))}
                    {item.standards.split(",").length > 3 && (
                      <span className="text-[8px] sm:text-[10px] font-medium text-gray-400">
                        +{item.standards.split(",").length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  to={`/products/${category}/${item.slug}`}
                  state={{ material: item }}
                  className="mt-3 sm:mt-4 flex items-center justify-center gap-2 bg-[#173F52] hover:bg-[#122a6e] text-white text-xs sm:text-sm font-semibold py-2.5 sm:py-3 px-4 sm:px-5 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#173F52]/20"
                >
                  <span>View Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {materials.length > 6 && (
          <div className="mt-8 sm:mt-10 md:mt-12 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 sm:py-3 shadow-md border border-gray-100">
              <span className="text-xs sm:text-sm text-gray-600 text-center">
                Need assistance finding the right product?
              </span>
              <Link
                to="/contact"
                className="bg-[#173F52] hover:bg-[#122a6e] text-white text-xs sm:text-sm font-semibold px-4 sm:px-6 py-1.5 sm:py-2 rounded-full transition duration-200 w-full sm:w-auto text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductMaterials;
