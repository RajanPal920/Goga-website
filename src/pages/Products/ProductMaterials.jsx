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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  const materials = productMaterials[category] ?? [];

  const categoryName =
    category
      ?.split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ") || "Products";

  if (!materials.length) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Materials Not Found
          </h1>
          <p className="text-gray-600">No products found in this category.</p>
          <Link
            to="/products"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Hero Banner - Premium */}
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
                Products
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {categoryName}
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl">
              Premium quality materials for demanding industrial applications
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="w-2 h-2 bg-[#D92B20] rounded-full"></span>
                {materials.length} Products Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Cards - Premium Design */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-[#173F52]">
              Our <span className="text-[#D92B20]">{categoryName}</span> Range
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              High-quality products for your industrial needs
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <span className="w-16 h-0.5 bg-gray-200"></span>
            <span>{materials.length} Products</span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {materials.map((item, index) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20] transform hover:-translate-y-1.5"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Image Section */}
              <div className="relative h-60 overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Badge */}
                {item.materialGroup && (
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-lg border border-white/50">
                    {item.materialGroup}
                  </div>
                )}

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-xl font-bold text-white leading-tight drop-shadow-lg line-clamp-2">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
                  {item.shortDescription}
                </p>

                {/* Standards */}
                {item.standards && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.standards
                      .split(",")
                      .slice(0, 3)
                      .map((std, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full border border-gray-200"
                        >
                          {std.trim()}
                        </span>
                      ))}
                    {item.standards.split(",").length > 3 && (
                      <span className="text-[10px] font-medium text-gray-400">
                        +{item.standards.split(",").length - 3}
                      </span>
                    )}
                  </div>
                )}

                {/* CTA Button */}
                <Link
                  to={`/products/${category}/${item.slug}`}
                  state={{ material: item }}
                  className="mt-4 flex items-center justify-center gap-2 bg-[#173F52] hover:bg-[#122a6e] text-white text-sm font-semibold py-3 px-5 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#173F52]/20"
                >
                  <span>View Details</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
              <span className="text-sm text-gray-600">
                Need assistance finding the right product?
              </span>
              <Link
                to="/contact"
                className="bg-[#173F52] hover:bg-[#122a6e] text-white text-sm font-semibold px-6 py-2 rounded-full transition duration-200"
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
