// src/pages/Certificates/CertificateDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  ExternalLink,
  ShieldCheck,
  Award,
  FileCheck,
  Star,
  CheckCircle,
  Printer,
} from "lucide-react";
import certificates from "../../data/certificates";

const CertificateDetails = () => {
  const { slug } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const certificate = certificates.find((c) => c.slug === slug);

  if (!certificate) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 pt-[10%]">
        <div className="text-center max-w-md p-8 bg-white rounded-2xl shadow-lg border border-slate-200">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-8 h-8 text-[#D92B20]" />
          </div>
          <h2 className="text-2xl font-bold text-[#173F52] mb-2">
            Certificate Not Found
          </h2>
          <p className="text-slate-600 text-sm mb-6 font-medium">
            The certificate you are looking for does not exist.
          </p>
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 bg-[#173F52] hover:bg-[#D92B20] text-white font-semibold px-6 py-2.5 rounded-xl transition duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Certificates
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 pt-[10%]">
      {/* HERO - Premium */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#102F3D] via-[#173F52] to-[#102F3D] pt-24 pb-32">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D92B20]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/certificates"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Certificates
          </Link>

          {/* Badge */}
          <div className="flex">
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[#D92B20]/20 border border-[#D92B20]/40 px-5 py-2 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#D92B20]" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-red-200">
                Official GOGA STAINLESS Document
              </span>
            </div>
          </div>

          {/* Title */}
          <div className="mt-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {certificate.name}
            </h1>

            <p className="mt-4 text-base md:text-lg leading-relaxed text-slate-200 max-w-3xl font-medium">
              {certificate.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <Award className="w-4 h-4 text-[#D92B20]" />
                <span>Verified Document</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <Star className="w-4 h-4 text-[#D92B20]" />
                <span>Industry Compliance</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200 font-semibold">
                <CheckCircle className="w-4 h-4 text-[#D92B20]" />
                <span>GSTIN & ISO Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PDF SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-16 relative z-10">
        <div className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-xl">
          {/* HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-200 px-6 md:px-8 py-6 bg-slate-50">
            <div>
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-5 h-5 text-[#D92B20]" />
                <h2 className="text-xl font-black text-[#173F52]">
                  Certificate Preview
                </h2>
              </div>
              <p className="mt-1 text-slate-600 text-sm font-medium">
                View or download the official document
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={certificate.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all duration-200 shadow-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </a>

              <a
                href={certificate.pdf}
                download={`${certificate.name}.pdf`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#173F52] hover:bg-[#D92B20] px-6 py-3 text-sm font-bold text-white shadow-md transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </a>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 hover:bg-slate-100 transition-all duration-200 shadow-sm lg:hidden"
              >
                <Printer className="w-4 h-4" />
                Print
              </button>
            </div>
          </div>

          {/* PDF VIEWER */}
          <div className="bg-slate-100 relative">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <div className="w-12 h-12 border-4 border-[#D92B20]/20 border-t-[#D92B20] rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-slate-500 text-sm font-semibold">
                    Loading certificate...
                  </p>
                </div>
              </div>
            )}

            <iframe
              src={`${certificate.pdf}#toolbar=1`}
              className="w-full h-[650px] md:h-[900px] relative z-10"
              title={certificate.name}
              loading="lazy"
              onLoad={() => setIsLoading(false)}
            />
          </div>

          {/* FOOTER */}
          <div className="border-t border-slate-200 px-6 md:px-8 py-4 bg-slate-50 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
              <ShieldCheck className="w-4 h-4 text-[#D92B20]" />
              <span>Document Verified • GOGA STAINLESS</span>
            </div>
            <div className="text-xs font-medium text-slate-500">
              GSTIN: 27AIWPL7180J2ZE | ISO 9001:2015
            </div>
          </div>
        </div>

        {/* Related Certificates */}
        {certificates.filter((c) => c.slug !== slug).length > 0 && (
          <div className="mt-12 mb-16">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#173F52] mb-4">
              Other Certificates
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {certificates
                .filter((c) => c.slug !== slug)
                .slice(0, 4)
                .map((cert) => (
                  <Link
                    key={cert.slug}
                    to={`/certificates/${cert.slug}`}
                    className="group bg-white rounded-xl p-4 border border-slate-200 hover:border-[#D92B20]/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#D92B20]/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-4 h-4 text-[#D92B20]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#173F52] group-hover:text-[#D92B20] transition-colors line-clamp-1">
                          {cert.name}
                        </h4>
                        <p className="text-xs text-slate-500 line-clamp-1 font-medium">
                          View Certificate
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificateDetails;
