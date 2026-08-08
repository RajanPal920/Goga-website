// src/pages/Materials/MaterialDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { getProductComponent } from "../../components/productDetails";
import materials from "../../data/materials";
import bannerIndustrial from "../../assets/images/productImage/banner-industrial.webp";

const MaterialDetail = () => {
  const { slug, itemSlug } = useParams();

  // Check for custom product component first
  const ProductComponent = getProductComponent(itemSlug);
  if (ProductComponent) {
    return <ProductComponent />;
  }

  // Find the material by slug
  const material = materials.find((m) => m.slug === slug);

  if (!material) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Material Not Found
          </h1>
          <Link
            to="/materials"
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Back to Materials
          </Link>
        </div>
      </div>
    );
  }

  // Find the specific item
  const item = material.items.find((i) => i.slug === itemSlug);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Product Not Found
          </h1>
          <Link
            to={`/materials/${material.slug}`}
            className="inline-block mt-4 text-blue-600 hover:underline"
          >
            Back to {material.name}
          </Link>
        </div>
      </div>
    );
  }

  // Generic product detail page (fallback)
  return (
    <section className="bg-gray-50 min-h-screen  ">
      {/* Hero Banner */}
      <div
        className="relative h-56 sm:h-64 md:h-72 lg:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerIndustrial})` }}
      >
        <div className="absolute inset-0 bg-[#173F52]/85"></div>
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#D92B20] text-white text-xs font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full mb-3">
              {material.name}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              {item.title}
            </h1>
            <p className="text-lg text-gray-200 mt-3 max-w-2xl">
              Premium Quality Material for Demanding Industrial Applications
            </p>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gray-100 p-6 flex items-center justify-center min-h-[400px]">
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-[#173F52] shadow-sm">
                {material.name}
              </div>
              <img
                src={item.image || material.image}
                alt={item.title}
                className="w-full max-h-[400px] object-contain rounded-xl"
              />
            </div>

            {/* Info Section */}
            <div className="p-8 md:p-10 lg:p-12 flex flex-col">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-[#173F52] mb-3">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {item.description || item.shortDescription}
                </p>

                {/* Properties */}
                {item.properties && item.properties.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-[#D92B20]"></span>
                      Key Properties
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.properties.map((prop, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full border border-blue-100"
                        >
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Applications */}
                {item.applications && item.applications.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-8 h-0.5 bg-[#D92B20]"></span>
                      Applications
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.applications.map((app, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-50 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100 mt-4">
                <Link
                  to={`/materials/${material.slug}`}
                  className="inline-flex items-center gap-2 text-[#173F52] hover:text-[#D92B20] font-medium transition-colors text-sm group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 transition-transform group-hover:-translate-x-1"
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
                  Back to {material.name}
                </Link>

                <a
                  href={`mailto:${contact?.email || "info@rpmexport.in"}`}
                  className="ml-auto inline-flex items-center gap-2 bg-[#173F52] hover:bg-[#122a6e] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition duration-200 shadow-sm hover:shadow-md"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
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

        {/* Related Information Card */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Material Grade
            </h4>
            <p className="text-[#173F52] font-medium">{material.name}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Product Type
            </h4>
            <p className="text-[#173F52] font-medium">{item.title}</p>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Availability
            </h4>
            <p className="text-[#173F52] font-medium">
              In Stock • Ready to Ship
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaterialDetail;
