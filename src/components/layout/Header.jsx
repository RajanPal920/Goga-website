// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

import logoIcon from "../../assets/images/logo/goga-logo-icon.png";
import logoWordmark from "../../assets/images/logo/goga-logo-wordmark.png";

const Header = () => {
  return (
    <Link
      to="/"
      className="group flex flex-col items-start justify-center min-w-0 max-w-full"
    >
      {/* LOGO ROW */}
      <div className="flex items-center min-w-0 max-w-full">
        <img
          src={logoIcon}
          alt="GOGA STAINLESS Emblem"
          className="h-[42px] w-[42px] sm:h-[50px] sm:w-[50px] lg:h-[70px] lg:w-[70px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
        />

        <div className="ml-2 min-w-0 max-w-[180px] sm:max-w-[260px] lg:max-w-[350px]">
          <img
            src={logoWordmark}
            alt="GOGA STAINLESS"
            className="block w-auto h-auto max-h-[32px] sm:max-h-[40px] lg:max-h-[55px] max-w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.01] origin-left"
          />
        </div>
      </div>

      {/* ISO CERTIFICATION */}
      <div className="mt-0.5 ml-[52px] sm:ml-[60px] lg:ml-[82px] text-[1px] sm:text-[8px] lg:text-[10px] uppercase tracking-[0.12em] font-semibold text-[#1A3A5C] whitespace-nowrap">
        AN ISO 9001:2015 CERTIFIED COMPANY
      </div>
    </Link>
  );
};

export default Header;
