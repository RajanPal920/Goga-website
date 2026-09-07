// src/components/layout/Header.jsx
import React from "react";
import { Link } from "react-router-dom";

import logoIcon from "../../assets/images/logo/goga-logo-icon.png";
import logoWordmark from "../../assets/images/logo/goga-logo-wordmark.png";

const Header = () => {
  return (
    <Link to="/" className="group flex items-center min-w-0 max-w-full">
      {/* LOGO ICON */}
      <img
        src={logoIcon}
        alt="GOGA STAINLESS Emblem"
        className="
          h-[42px] w-[42px]
          sm:h-[50px] sm:w-[50px]
          lg:h-[70px] lg:w-[70px]
          shrink-0 object-contain
          transition-transform duration-300
          group-hover:scale-105
        "
      />

      {/* WORDMARK + ISO */}
      <div className="ml-2 min-w-0">
        {/* GOGA STAINLESS */}
        <img
          src={logoWordmark}
          alt="GOGA STAINLESS"
          className="
            block
            w-auto
            h-auto
            max-h-[32px]
            sm:max-h-[40px]
            lg:max-h-[55px]
            max-w-[180px]
            sm:max-w-[260px]
            lg:max-w-[350px]
            object-contain
            object-left
            transition-transform duration-300
            group-hover:scale-[1.01]
            origin-left
          "
        />

        {/* AN ISO 9001:2015 CERTIFIED COMPANY */}
        <div
          className="
            mt-10
            ml-60
            w-3.5
            text-[2px]
            sm:text-[8px]
            lg:text-[10]
            tracking-[0.12em]
            font-semibold
            text-[#1A3A5C]
            whitespace-nowrap
          "
        >
          AN ISO 9001:2015 CERTIFIED COMPANY
        </div>
      </div>
    </Link>
  );
};

export default Header;
