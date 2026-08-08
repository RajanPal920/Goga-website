// src/components/productDetails/RelatedProducts.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaCheckCircle } from "react-icons/fa";
import products from "../../data/products";

const RelatedProducts = ({ relatedProducts = [], product }) => {
  const slugs =
    relatedProducts?.length > 0
      ? relatedProducts
      : product?.relatedProducts || [];

  if (!slugs.length) return null;

  const related = products.filter((item) => slugs.includes(item.slug));

  return (
    <section className="w-full py-16 md:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              Related Products
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#173F52]">
            Explore More <span className="text-[#D92B20]">Products</span>
          </h2>

          <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500 leading-relaxed">
            Discover our complete range of industrial products manufactured to
            international standards with superior quality and worldwide export.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item) => (
            <Link
              key={item.slug}
              to={`/products/${item.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#D92B20]/40 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#173F52]/70 via-[#173F52]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-sm border border-white/50">
                  {item.category}
                </span>

                {/* Product Name - Visible on hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-xl font-bold text-white drop-shadow-lg">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-[#173F52] group-hover:text-[#D92B20] transition-colors line-clamp-1">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {item.shortDescription}
                </p>

                {/* Rating and Features */}
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
                    <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
                    <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
                    <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
                    <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
                  </div>
                  <span className="text-xs text-gray-400">Premium Quality</span>
                </div>

                {/* Button */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between group-hover:border-[#D92B20]/20 transition-colors">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#D92B20] transition-colors flex items-center gap-1.5">
                    <FaCheckCircle className="w-3 h-3 text-[#D92B20]" />
                    Explore Now
                  </span>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F52] group-hover:text-[#D92B20] transition-colors">
                    View Product
                    <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#173F52] hover:bg-[#1a3a7a] text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#173F52]/25"
          >
            View All Products
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
