// src/components/Product/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStar, FaCheckCircle } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:border-[#D92B20]/40 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
      {/* Premium Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D92B20] via-[#173F52] to-[#D92B20] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

      {/* VISUAL CANVAS AREA */}
      <div className="relative h-56 bg-gradient-to-b from-slate-50 to-slate-100/50 overflow-hidden flex items-center justify-center border-b border-gray-100/50">
        {/* Subtle Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(215,155,32,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(215,155,32,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F52]/60 via-[#173F52]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Category Badge */}
        {product.category && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-sm border border-white/50 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
            {product.category}
          </span>
        )}
      </div>

      {/* CARD CONTENT HUB */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Header Title */}
          <h3 className="text-base font-bold tracking-tight text-[#173F52] group-hover:text-[#D92B20] transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center gap-0.5">
              <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
              <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
              <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
              <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
              <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
            </div>
            <span className="text-[10px] text-gray-400">Premium Quality</span>
          </div>

          {/* Body Description */}
          <p className="text-sm text-gray-500 font-normal leading-relaxed line-clamp-2 mt-2">
            {product.shortDescription || product.description}
          </p>

          {/* Features */}
          <div className="flex items-center gap-3 mt-3">
            <div className="flex items-center gap-1.5">
              <FaCheckCircle className="w-3 h-3 text-[#D92B20]" />
              <span className="text-[10px] text-gray-400">ISO Certified</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FaCheckCircle className="w-3 h-3 text-[#D92B20]" />
              <span className="text-[10px] text-gray-400">Global Supply</span>
            </div>
          </div>
        </div>

        {/* Action Section */}
        <div className="mt-4 pt-4 border-t border-gray-100 group-hover:border-[#D92B20]/20 transition-colors flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#D92B20] transition-colors flex items-center gap-1.5">
            <FaCheckCircle className="w-3 h-3 text-[#D92B20]" />
            Premium Grade
          </span>

          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#173F52] group-hover:text-[#D92B20] transition-colors duration-300"
          >
            <span>View Details</span>
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
