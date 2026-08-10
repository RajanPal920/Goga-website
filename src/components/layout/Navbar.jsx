// src/components/layout/Navbar.jsx
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiBars3, HiXMark, HiChevronDown } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

import products from "../../data/products";
import materials from "../../data/materials";
import dimensions from "../../data/dimensions";
import certificates from "../../data/certificates";

import logoIcon from "../../assets/images/logo/goga-logo-icon.png";
import logoWordmark from "../../assets/images/logo/goga-logo-wordmark.png";
import company from "../../config/company";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState("");
  const [dropdown, setDropdown] = useState("");

  const renderDropdown = (title, path, data) => (
    <div
      className="relative group"
      onMouseEnter={() => setDropdown(title)}
      onMouseLeave={() => setDropdown("")}
    >
      <button
        className={`flex items-center gap-1.5 px-3 xl:px-4 py-2 font-semibold text-sm tracking-wide transition-all duration-200 relative
        ${dropdown === title ? "text-[#E52713]" : "text-white/90 hover:text-white"}`}
      >
        {title}
        <HiChevronDown
          className={`text-sm transition-transform duration-300 ${
            dropdown === title ? "rotate-180 text-[#E52713]" : ""
          }`}
        />
        <span
          className={`absolute bottom-0 left-3 right-3 h-[2px] bg-[#E52713] rounded-full transition-all duration-300 transform origin-center
          ${dropdown === title ? "scale-x-100" : "scale-x-0"}`}
        />
      </button>

      {dropdown === title && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50">
          <div className="w-max min-w-[680px] rounded-xl bg-white shadow-[0_20px_60px_-15px_rgba(26,58,92,0.2)] border border-slate-200/50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="h-[3px] w-full bg-gradient-to-r from-[#1A3A5C] via-[#E52713] to-[#1A3A5C]" />
            <div className="p-5">
              <div className="grid grid-cols-3 gap-x-3 gap-y-0.5">
                {data.map((item) => (
                  <NavLink
                    key={
                      item.slug || item.name.toLowerCase().replace(/\s+/g, "-")
                    }
                    to={`/${path}/${item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={({ isActive }) => `
                    group/item flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#1A3A5C]/10 text-[#E52713] font-semibold"
                        : "text-slate-700 hover:bg-[#1A3A5C]/5 hover:text-[#E52713]"
                    }
                  `}
                  >
                    <div className="flex items-center gap-2.5">
                      {item.icon ? (
                        <item.icon className="w-4 h-4 text-[#173F52]" />
                      ) : (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#173F52]" />
                      )}
                      <span className="tracking-wide whitespace-nowrap">
                        {item.name}
                      </span>
                    </div>
                    <svg
                      className="w-3 h-3 opacity-0 -translate-x-2 text-[#A48C79] transition-all duration-200 group-hover/item:opacity-100 group-hover/item:translate-x-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const renderMobileSection = (title, path, data) => {
    const isOpen = mobileDropdown === title;
    return (
      <div className="border-b border-slate-100 last:border-b-0">
        <button
          onClick={() => setMobileDropdown(isOpen ? "" : title)}
          className="w-full flex items-center justify-between px-4 py-3 text-left font-medium text-slate-700 hover:text-[#E52713] transition-colors"
        >
          <span className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#173F52]"></span>
            {title}
          </span>
          <HiChevronDown
            className={`transition-transform duration-300 text-slate-400 ${
              isOpen ? "rotate-180 text-[#E52713]" : ""
            }`}
          />
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[800px] pb-2" : "max-h-0"
          }`}
        >
          <div className="ml-6 border-l-2 border-[#A48C79]/20 pl-4 flex flex-col gap-0.5">
            {data.map((item) => (
              <NavLink
                key={item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}
                to={`/${path}/${item.slug || item.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 py-2 text-sm text-slate-600 hover:text-[#E52713] font-medium transition-colors"
              >
                {item.icon && <item.icon className="w-4 h-4 text-[#173F52]" />}
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const materialDropdownData = materials.map((material) => ({
    name: material.name,
    slug: material.slug,
    icon: material.icon,
  }));

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-slate-200/50">
        {/* TOP BAR - Desktop Only */}
        <div className="hidden lg:flex h-[var(--navbar-top-height)] bg-[#E52713] text-white items-center">
          <div className="w-full h-full px-4 sm:px-6 lg:px-10 flex items-center justify-end">
            <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
              <a
                href="tel:+918452828260"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FiPhone className="text-white/70 text-[13px]" />
                <span>+91 845 282 8260</span>
              </a>
              <a
                href="mailto:gogastainless@gmail.com"
                className="flex items-center gap-2 hover:text-white/80 transition-colors"
              >
                <FiMail className="text-white/70 text-[13px]" />
                <span>gogastainless@gmail.com</span>
              </a>
              <div className="flex items-center gap-1.5 ml-1">
                <a
                  href="https://www.facebook.com/people/Goga-Stainless/pfbid0Gvrp5aoXa6ntZxKXTimAgXH1i7BANE1wW2CNgK3nxBWSEWnAun88M1DQa8vPzT53l/?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-7 h-7 rounded-full bg-[#1877F2] hover:bg-[#1877F2]/80 flex items-center justify-center transition-all shadow-sm"
                >
                  <FaFacebookF className="text-[11px] text-white" />
                </a>
                <a
                  href="https://wa.me/918452828260"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-7 h-7 rounded-full bg-[#25D366] hover:bg-[#25D366]/80 flex items-center justify-center transition-all shadow-sm"
                >
                  <FaWhatsapp className="text-[13px] text-white" />
                </a>
                <a
                  href="https://www.instagram.com/goga_stainless/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e9e20c] via-[#d220ac] to-[#8d0813] flex items-center justify-center hover:opacity-90 transition-all shadow-sm"
                >
                  <FaInstagram className="text-[12px] text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION */}
        <div className="relative bg-white h-[var(--navbar-main-height)]">
          <div className="relative w-full h-full flex items-stretch px-0">
            {/* LOGO SECTION */}
            <div className="shrink-0 pl-4 sm:pl-6 lg:pl-8 py-1 flex items-center relative z-10">
              <Link
                to="/"
                className="flex flex-col items-start justify-center min-w-0 max-w-full group"
              >
                <div className="flex items-center min-w-0 max-w-full">
                  <img
                    src={logoIcon}
                    alt="GOGA STAINLESS Emblem"
                    className="h-[42px] w-[42px] sm:h-[50px] sm:w-[50px] lg:h-[70px] lg:w-[70px] shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="ml-2.5 min-w-0 max-w-[180px] sm:max-w-[260px] lg:max-w-[380px]">
                    <img
                      src={logoWordmark}
                      alt="GOGA STAINLESS"
                      className="block w-auto h-auto max-h-[30px] sm:max-h-[38px] lg:max-h-[54px] max-w-full object-contain object-left transition-transform duration-300 group-hover:scale-[1.02] origin-left"
                    />
                  </div>
                </div>
                <div className="mt-0.5 ml-[52px] sm:ml-[60px] lg:ml-[90px] text-[6px] sm:text-[7px] lg:text-[15px] leading-none uppercase tracking-[0.15em] font-bold text-[#1A3A5C] whitespace-nowrap">
                  {company.certification ||
                    "AN ISO 9001:2015 CERTIFIED COMPANY"}
                </div>
              </Link>
            </div>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden lg:flex flex-1 items-stretch relative ml-2">
              <div
                className="absolute inset-0 bg-[#173F52]"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 50px 100%, 0 0)",
                }}
              />

              <div className="flex-1 flex items-center justify-center pl-10 relative z-10">
                <div className="flex items-center gap-0.5 xl:gap-1">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `relative px-2.5 xl:px-3.5 py-6 text-[13px] xl:text-sm font-bold whitespace-nowrap transition-colors text-white/90 hover:text-white ${
                        isActive
                          ? "after:scale-x-100 text-white"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      } after:absolute after:left-2 after:right-2 after:bottom-4 after:h-[2.5px] after:bg-[#E52713] after:origin-center after:transition-transform`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `relative px-2.5 xl:px-3.5 py-6 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors text-white/90 hover:text-white ${
                        isActive
                          ? "after:scale-x-100 text-white"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      } after:absolute after:left-2 after:right-2 after:bottom-4 after:h-[2.5px] after:bg-[#E52713] after:origin-center after:transition-transform`
                    }
                  >
                    About Us
                  </NavLink>
                  {renderDropdown("Products", "products", products)}
                  {renderDropdown(
                    "Materials",
                    "materials",
                    materialDropdownData,
                  )}
                  {renderDropdown("Dimensions", "dimensions", dimensions)}
                  {renderDropdown("Certificates", "certificates", certificates)}
                  <NavLink
                    to="/gallery"
                    className={({ isActive }) =>
                      `relative px-2.5 xl:px-3.5 py-6 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors text-white/90 hover:text-white ${
                        isActive
                          ? "after:scale-x-100 text-white"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      } after:absolute after:left-2 after:right-2 after:bottom-4 after:h-[2.5px] after:bg-[#E52713] after:origin-center after:transition-transform`
                    }
                  >
                    Gallery
                  </NavLink>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `relative px-2.5 xl:px-3.5 py-6 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors text-white/90 hover:text-white ${
                        isActive
                          ? "after:scale-x-100 text-white"
                          : "after:scale-x-0 hover:after:scale-x-100"
                      } after:absolute after:left-2 after:right-2 after:bottom-4 after:h-[2.5px] after:bg-[#E52713] after:origin-center after:transition-transform`
                    }
                  >
                    Contact
                  </NavLink>
                </div>
              </div>

              <div className="flex items-center px-4 relative z-10 flex-shrink-0">
                <Link
                  to="/contact"
                  className="bg-white hover:bg-[#E52713] text-[#1A3A5C] hover:text-white px-5 py-2.5 rounded-lg text-xs font-bold tracking-wide transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md hover:shadow-[#E52713]/20"
                >
                  ENQUIRY
                </Link>
              </div>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <div className="lg:hidden ml-auto flex items-center px-3 relative z-10">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="p-2 text-[#1A3A5C] hover:text-[#E52713] transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenu ? <HiXMark size={28} /> : <HiBars3 size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenu && (
          <div className="lg:hidden absolute top-[var(--navbar-main-height)] left-0 w-full bg-white border-t border-slate-200 shadow-2xl max-h-[calc(100vh-var(--navbar-main-height))] overflow-y-auto z-50">
            <div className="px-3 py-2">
              <NavLink
                to="/"
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 border-b border-slate-100 font-semibold text-sm ${
                    isActive ? "text-[#E52713]" : "text-[#1A3A5C]"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => setMobileMenu(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 border-b border-slate-100 font-semibold text-sm ${
                    isActive ? "text-[#E52713]" : "text-[#1A3A5C]"
                  }`
                }
              >
                About Us
              </NavLink>

              {renderMobileSection("Products", "products", products)}
              {renderMobileSection(
                "Materials",
                "materials",
                materialDropdownData,
              )}
              {renderMobileSection("Dimensions", "dimensions", dimensions)}
              {renderMobileSection(
                "Certificates",
                "certificates",
                certificates,
              )}

              <NavLink
                to="/gallery"
                onClick={() => setMobileMenu(false)}
                className="block px-3 py-2.5 border-b border-slate-100 font-semibold text-sm text-[#1A3A5C] hover:text-[#E52713]"
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="block px-3 py-2.5 border-b border-slate-100 font-semibold text-sm text-[#1A3A5C] hover:text-[#E52713]"
              >
                Contact
              </NavLink>

              <Link
                to="/contact"
                onClick={() => setMobileMenu(false)}
                className="block mt-3 py-2.5 text-center bg-[#1A3A5C] hover:bg-[#E52713] text-white font-bold text-sm rounded-lg transition-colors shadow-sm"
              >
                SEND ENQUIRY
              </Link>

              <div className="flex items-center justify-center gap-3 mt-3 pt-3 border-t border-slate-200">
                <a
                  href="https://www.facebook.com/people/Goga-Stainless/pfbid0Gvrp5aoXa6ntZxKXTimAgXH1i7BANE1wW2CNgK3nxBWSEWnAun88M1DQa8vPzT53l/?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center hover:bg-[#1877F2]/80 transition-all shadow-sm"
                >
                  <FaFacebookF className="text-sm text-white" />
                </a>
                <a
                  href="https://wa.me/918452828260"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center hover:bg-[#25D366]/80 transition-all shadow-sm"
                >
                  <FaWhatsapp className="text-base text-white" />
                </a>
                <a
                  href="https://www.instagram.com/goga_stainless/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-[#405DE6] via-[#5851DB] to-[#E1306C] flex items-center justify-center hover:opacity-90 transition-all shadow-sm"
                >
                  <FaInstagram className="text-sm text-white" />
                </a>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 text-center text-xs text-slate-600">
                <a
                  href="tel:+918452828260"
                  className="block hover:text-[#E52713] transition-colors"
                >
                  📞 +91 845 282 8260
                </a>
                <a
                  href="mailto:gogastainless@gmail.com"
                  className="block mt-1 hover:text-[#E52713] transition-colors"
                >
                  ✉ gogastainless@gmail.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
