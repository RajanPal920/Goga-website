// src/components/Product/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";
import "./ProductCard.css";

const Card = ({
  product, // Changed from 'item' to 'product' for consistency
  showBadge = true,
  showStandards = true,
  badgeLabel = "Material Group",
  ctaText = "Request Quote",
  pricingText = "Get Instant Pricing",
  cardClassName = "",
  imageClassName = "",
  bodyClassName = "",
  titleClassName = "",
  descriptionClassName = "",
  badgeClassName = "",
  standardsClassName = "",
  ctaClassName = "",
  buttonClassName = "",
  pricingClassName = "",
}) => {
  return (
    <div className={`product-card group ${cardClassName}`}>
      {/* Image */}
      <div className={`product-card-image ${imageClassName}`}>
        <img src={product.image} alt={product.title} loading="lazy" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#173F52]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
        {/* Quick View Badge */}
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#173F52] shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
          Quick View
        </div>
      </div>

      {/* Card Content */}
      <div className={`product-card-body ${bodyClassName}`}>
        <h3 className={`product-card-title ${titleClassName}`}>
          {product.title}
        </h3>

        {/* Material Group / Badge */}
        {showBadge && product.materialGroup && (
          <div className="mb-3">
            <span className={`product-card-badge ${badgeClassName}`}>
              {product.materialGroup}
            </span>
          </div>
        )}

        {/* Description */}
        <p className={`product-card-description ${descriptionClassName}`}>
          {product.shortDescription}
        </p>

        {/* Standards */}
        {showStandards && product.standards && (
          <p className={`product-card-standards ${standardsClassName}`}>
            <span className="inline-block bg-blue-50 text-blue-700 text-[10px] font-medium px-2 py-0.5 rounded-full mr-1.5">
              ✓
            </span>
            {product.standards}
          </p>
        )}

        {/* Additional Fields - Flexible */}
        {product.application && (
          <p className="product-card-application">
            <strong>Application:</strong> {product.application}
          </p>
        )}

        {product.forms && (
          <p className="product-card-forms">
            <strong>Forms:</strong> {product.forms}
          </p>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-1">
          <div className="flex items-center gap-0.5">
            <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
            <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
            <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
            <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
            <FaStar className="w-3 h-3 text-[#D92B20] fill-[#D92B20]" />
          </div>
          <span className="text-[10px] text-gray-400">Premium Quality</span>
        </div>

        {/* Button / CTA */}
        <div className={`product-card-cta ${ctaClassName}`}>
          <Link
            to={`/products/${product.slug}`}
            className={`product-card-button ${buttonClassName}`}
          >
            {ctaText}
            <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <span className={`product-card-pricing ${pricingClassName}`}>
            {pricingText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
