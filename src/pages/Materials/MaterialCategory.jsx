// src/pages/Materials/MaterialCategory.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import materials from "../../data/materials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const MaterialCategory = () => {
  const { slug } = useParams();

  // Find the material by slug
  const material = materials.find((m) => m.slug === slug);

  if (!material) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500"
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
          <h1 className="text-2xl font-bold text-[#173F52] mb-2">
            Material Not Found
          </h1>
          <p className="text-gray-500 text-sm mb-6">
            The material "{slug}" does not exist in our catalog.
          </p>
          <Link
            to="/materials"
            className="inline-block bg-[#173F52] hover:bg-[#122a6e] text-white font-medium px-6 py-2.5 rounded-lg transition duration-200"
          >
            Browse All Materials
          </Link>
        </div>
      </div>
    );
  }

  // Get the material name for display
  const materialName = material.name;

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
                Materials
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              {materialName}
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl leading-relaxed">
              {material.overview || material.description}
            </p>
            <div className="flex items-center gap-4 mt-4">
              <span className="inline-flex items-center gap-2 text-white/80 text-sm">
                <span className="w-2 h-2 bg-[#D92B20] rounded-full"></span>
                {material.items?.length || 0} Products Available
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

      {/* Material Items Grid - Premium */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold text-[#173F52]">
              Explore <span className="text-[#D92B20]">{materialName}</span>{" "}
              Products
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              High-quality products for your industrial needs
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-400">
            <span className="w-16 h-0.5 bg-gray-200"></span>
            <span>{material.items?.length || 0} Products</span>
          </div>
        </div>

        {material.items && material.items.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {material.items.map((item, index) => (
              <div
                key={item.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20] transform hover:-translate-y-1.5 flex flex-col"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {/* Image Section */}
                <Link
                  to={`/materials/${material.slug}/${item.slug}`}
                  className="block relative w-full h-52 bg-gray-100 overflow-hidden flex-shrink-0"
                >
                  <img
                    src={item.image || material.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-lg border border-white/50">
                    {materialName}
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-bold text-white leading-tight drop-shadow-lg line-clamp-2">
                      {item.title}
                    </h2>
                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col">
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1">
                    {item.shortDescription || item.description?.slice(0, 120)}
                  </p>

                  {/* Properties Tags */}
                  {item.properties && item.properties.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.properties.slice(0, 3).map((prop, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100"
                        >
                          {prop}
                        </span>
                      ))}
                      {item.properties.length > 3 && (
                        <span className="text-[10px] font-medium text-gray-400">
                          +{item.properties.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* View Details Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-[#D92B20]/20 transition-colors">
                    <Link
                      to={`/materials/${material.slug}/${item.slug}`}
                      className="w-full flex items-center justify-center gap-2 bg-[#173F52] hover:bg-[#122a6e] text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#173F52]/20"
                    >
                      <span>View Details</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
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
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No Products Found
              </h3>
              <p className="text-gray-500 text-sm">
                No products are currently available for this material.
              </p>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {material.items && material.items.length > 6 && (
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-md border border-gray-100">
              <span className="text-sm text-gray-600">
                Need help finding the right product?
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

export default MaterialCategory;
