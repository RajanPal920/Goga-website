// src/pages/Products/ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductComponent } from "../../components/productDetails";
import productMaterials from "../../data/productMaterials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";
import contact from "../../data/contact";

export default function ProductDetails() {
  const { category, slug } = useParams();

  // Check for custom product components first
  const ProductComponent = getProductComponent(slug);
  if (ProductComponent) {
    return <ProductComponent />;
  }

  // Find product from materials data
  const materials = productMaterials[category] ?? [];

  // Try to find product in the current category
  let product = materials.find((item) => item.slug === slug);

  // If not found, search in all categories (fallback)
  if (!product) {
    const allProducts = Object.values(productMaterials).flat();
    product = allProducts.find((item) => item.slug === slug);
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-[10%] px-4 sm:px-6">
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
            Product Not Found
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 sm:mb-6">
            The product "{slug}" does not exist in our catalog.
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#173F52] hover:bg-[#122a6e] text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition duration-200 text-sm sm:text-base w-full sm:w-auto"
          >
            Browse All Products
          </Link>
        </div>
      </div>
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
                {category?.replace(/-/g, " ") || "Product"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight break-words">
              {product.title}
            </h1>
            {product.materialGroup && (
              <div className="mt-2 sm:mt-3 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/20">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#D92B20] rounded-full"></span>
                <span className="text-white/90 text-xs sm:text-sm font-medium">
                  {product.materialGroup}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Details - Premium */}
      <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gray-100 p-4 sm:p-6 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-semibold text-[#173F52] shadow-sm border border-gray-100">
                {product.materialGroup || category}
              </div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-h-[300px] sm:max-h-[420px] object-contain rounded-xl"
              />
            </div>

            {/* Info Section */}
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col">
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold text-[#173F52] mb-2 sm:mb-3">
                  {product.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                  {product.shortDescription}
                </p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  {product.materialGroup && (
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        Material Group
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#173F52] mt-1">
                        {product.materialGroup}
                      </p>
                    </div>
                  )}
                  {product.standards && (
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        Standards
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#173F52] mt-1">
                        {product.standards}
                      </p>
                    </div>
                  )}
                  {product.forms && (
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        Available Forms
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#173F52] mt-1">
                        {product.forms}
                      </p>
                    </div>
                  )}
                  {product.application && (
                    <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
                      <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
                        Applications
                      </h4>
                      <p className="text-xs sm:text-sm font-medium text-[#173F52] mt-1">
                        {product.application}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-gray-100 mt-3 sm:mt-4">
                <Link
                  to={`/products/${category}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[#173F52] hover:text-[#D92B20] font-medium transition-colors text-xs sm:text-sm group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to {category?.replace(/-/g, " ")}
                </Link>

                <a
                  href={`mailto:${contact?.email || "info@rpmexport.in"}`}
                  className="ml-auto inline-flex items-center gap-1.5 sm:gap-2 bg-[#173F52] hover:bg-[#122a6e] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 sm:h-4 sm:w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Info Cards */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
            <h4 className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
              Category
            </h4>
            <p className="text-sm sm:text-base text-[#173F52] font-medium">
              {category?.replace(/-/g, " ")}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
            <h4 className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
              Product Type
            </h4>
            <p className="text-sm sm:text-base text-[#173F52] font-medium">
              {product.title}
            </p>
          </div>
          <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-gray-100">
            <h4 className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5 sm:mb-2">
              Availability
            </h4>
            <p className="text-sm sm:text-base text-[#173F52] font-medium">
              In Stock • Ready to Ship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
