// src/pages/Dimensions/DimensionViewer.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  Ruler,
  FileText,
  Printer,
  Maximize2,
  Home,
} from "lucide-react";
import dimensions from "../../data/dimensions";

const DimensionViewer = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const dimension = dimensions.find((d) => d.slug === slug);

  if (!dimension) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 pt-[10%] md:pt-[5%] lg:pt-[10%]">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Ruler className="w-8 h-8 text-[#D92B20]" />
          </div>
          <h2 className="text-2xl font-bold text-[#173F52] mb-2">
            Dimension Chart Not Found
          </h2>
          <p className="text-slate-600 text-sm mb-6 font-medium">
            The dimension chart you are looking for does not exist.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 bg-[#173F52] hover:bg-[#D92B20] text-white font-semibold px-6 py-2.5 rounded-xl transition duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="h-[calc(100vh-80px)] bg-slate-50 flex flex-col overflow-hidden pt-[20%] lg:pt-[10%]">
      {/* Header */}
      <div className="bg-[#173F52] border-b border-[#102F3D] flex-shrink-0 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 sm:py-4">
            {/* Left Section */}
            <div className="flex items-center gap-2 min-w-0">
              <Link
                to="/products"
                className="text-white/80 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10 flex-shrink-0"
                aria-label="Back to Products"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>

              <div className="flex items-center gap-2 min-w-0">
                <div className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg bg-[#D92B20]/20 text-[#D92B20] border border-[#D92B20]/30 flex-shrink-0">
                  <Ruler className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-sm sm:text-base font-bold text-white truncate">
                    {dimension.name}
                  </h1>
                  <p className="text-xs text-slate-300 truncate font-medium">
                    GOGA STAINLESS Dimension Chart • Technical Specifications
                  </p>
                </div>
              </div>
            </div>

            {/* Right Section - Actions */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <a
                href={dimension.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Open PDF</span>
              </a>

              <a
                href={dimension.pdf}
                download
                className="inline-flex items-center gap-1.5 rounded-lg bg-[#D92B20] hover:bg-[#B91F17] px-3.5 py-1.5 text-xs font-bold text-white transition-all duration-200 shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={() => {
                  const iframe = document.querySelector("iframe");
                  if (iframe && iframe.requestFullscreen) {
                    iframe.requestFullscreen();
                  }
                }}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 hover:bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-200"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-20 transition-opacity duration-500">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-[#D92B20]/20 border-t-[#D92B20] rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-slate-600 text-sm font-semibold">
                Loading dimension chart...
              </p>
              <p className="text-slate-400 text-xs mt-2 font-medium">
                Please wait...
              </p>
            </div>
          </div>
        )}

        <iframe
          src={`${dimension.pdf}#toolbar=0`}
          title={dimension.name}
          className="w-full h-full relative z-10"
          loading="lazy"
          onLoad={handleIframeLoad}
        />
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-white border-t border-slate-200 py-2 px-4 sm:px-6 lg:px-8 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-xs text-slate-600 font-medium">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#D92B20]" />
              <span className="truncate max-w-[200px] sm:max-w-none font-bold text-[#173F52]">
                {dimension.name}
              </span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
            <div className="hidden sm:flex items-center gap-2">
              <span>GOGA STAINLESS Verified Technical Data</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              <span className="font-semibold text-emerald-700">
                Verified Specification
              </span>
            </span>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-[#173F52] hover:text-[#D92B20] font-bold transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DimensionViewer;
