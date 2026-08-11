// src/components/layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { MdCall, MdPhoneInTalk } from "react-icons/md";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaWhatsapp,
  FaShieldAlt,
} from "react-icons/fa";
import { HiChevronRight } from "react-icons/hi";
import logoIcon from "../../assets/images/logo/goga-logo-icon.png";
import logoWordmark from "../../assets/images/logo/goga-logo-wordmark.png";
import company from "../../config/company";

// ✅ Updated product categories according to PDF
const productCategories = [
  { name: "Pipes & Tubes", slug: "pipes" },
  { name: "Buttweld Fittings", slug: "buttweld-fittings" },
  { name: "Forged Socketweld & Screwed Fittings", slug: "forged-fittings" },
  { name: "Flanges", slug: "flanges" },
  { name: "Ferrule Fittings", slug: "ferrule-fittings" },
  { name: "Sheet, Plate & Coil", slug: "sheets" },
  { name: "Round, Square & Hex Bars", slug: "round-bars" },
  { name: "Fasteners & Nut Bolts", slug: "fasteners" },
  { name: "Dairy Fittings & Valves", slug: "dairy-fittings" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#173F52] text-white border-t border-[#102F3D]">
      {/* Main Footer */}
      <div className="max-w-9xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex max-w-full bg-white p-2 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 max-w-full min-w-0">
                <img
                  src={logoIcon}
                  alt="GOGA STAINLESS Emblem"
                  className="h-8 w-8 shrink-0 object-contain"
                />

                <div className="min-w-0 flex-1">
                  <img
                    src={logoWordmark}
                    alt="GOGA STAINLESS"
                    className="block h-auto max-h-8 w-auto max-w-full object-contain object-left"
                  />
                </div>
              </div>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D92B20]/20 border border-[#D92B20]/40 rounded-lg text-xs font-bold text-red-200 tracking-wider">
              <FaShieldAlt className="text-[#D92B20] shrink-0" />
              {company.certification}
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              GOGA STAINLESS is a premier stockist & supplier of high-grade
              industrial raw materials, stainless steel pipes, tubes, fittings,
              flanges, sheets, plates, coils, and fasteners.
            </p>

            <div className="text-xs text-slate-400 font-mono pt-1">
              GSTIN:{" "}
              <span className="text-white font-semibold">{company.gstin}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92B20]"></span>
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Materials", path: "/materials" },
                { name: "Certificates", path: "/certificates" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-slate-300 hover:text-[#D92B20] transition-colors text-sm flex items-center gap-2 font-medium"
                  >
                    <HiChevronRight className="w-4 h-4 text-[#D92B20]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Range - Updated */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92B20]"></span>
              Product Range
            </h3>
            <ul className="space-y-2">
              {productCategories.map((cat) => (
                <li key={cat.name}>
                  <Link
                    to={`/products/${cat.slug}`}
                    className="text-slate-300 hover:text-[#D92B20] transition-colors text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D92B20]/60"></span>
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D92B20]"></span>
              Contact Details
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-[#D92B20] flex-shrink-0 mt-0.5" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  {company.address.plotNo}, {company.address.building},<br />
                  {company.address.houseNo}, {company.address.floor},{" "}
                  {company.address.street},<br />
                  {company.address.city}-{company.address.pincode},{" "}
                  {company.address.state}
                </span>
              </li>

              <li className="flex items-center gap-3">
                <MdPhoneInTalk className="w-5 h-5 text-[#D92B20] flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">
                    Telephone:
                  </span>
                  <a
                    href={`tel:${company.phone.telephoneRaw}`}
                    className="text-slate-200 hover:text-[#D92B20] transition-colors text-sm font-medium"
                  >
                    {company.phone.telephone}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <MdCall className="w-5 h-5 text-[#D92B20] flex-shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Mobile:</span>
                  <a
                    href={`tel:+${company.phone.mobileRaw}`}
                    className="text-slate-200 hover:text-[#D92B20] transition-colors text-sm font-medium"
                  >
                    {company.phone.mobile}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <FaWhatsapp className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <a
                    href={`https://wa.me/${company.whatsapp.raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 hover:text-emerald-400 transition-colors text-sm font-medium"
                  >
                    {company.whatsapp.primary} (WhatsApp)
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <FaEnvelope className="w-5 h-5 text-[#D92B20] flex-shrink-0" />
                <a
                  href={`mailto:${company.email}`}
                  className="text-slate-200 hover:text-[#D92B20] transition-colors text-sm font-medium break-all"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#102F3D]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <p className="text-slate-400 text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-white font-semibold">GOGA STAINLESS</span>.
            All rights reserved. | ISO 9001:2015 Certified Company
          </p>
          <div className="flex gap-6 text-slate-400">
            <Link
              to="/about"
              className="hover:text-[#D92B20] transition-colors"
            >
              About
            </Link>
            <Link
              to="/products"
              className="hover:text-[#D92B20] transition-colors"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#D92B20] transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
