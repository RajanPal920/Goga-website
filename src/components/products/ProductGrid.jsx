// src/components/Product/ProductGrid.jsx
import React from "react";
import ProductCard from "./Card";
import "./ProductCard.css";

const ProductGrid = ({
  items,
  columns = 3,
  cardProps = {},
  className = "",
  gridClassName = "",
  showHeader = true,
  title = "Our Products",
  subtitle = "Premium quality industrial products for critical applications",
}) => {
  // Determine grid columns based on prop
  const getGridClass = () => {
    if (columns === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    if (columns === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (columns === 2) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Section Header */}
      {showHeader && (
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#D92B20] uppercase">
              Product Collection
            </span>
            <span className="w-10 h-0.5 bg-[#D92B20]"></span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-[#173F52]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          <div className="w-16 h-1 bg-[#D92B20] mt-4 mx-auto rounded-full"></div>
        </div>
      )}

      {/* Grid */}
      <div className={`grid ${getGridClass()} gap-5 md:gap-6 ${gridClassName}`}>
        {items.map((item) => (
          <ProductCard key={item.id} product={item} {...cardProps} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
