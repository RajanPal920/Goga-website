// src/data/certificates.js
import { BadgeCheck, Receipt, Building2, FileCheck } from "lucide-react";

const certificates = [
  {
    id: 1,
    name: "ISO 9001:2015",
    slug: "iso-9001",
    pdf: "/certificates/iso-9001.pdf",
    description: "ISO 9001:2015 Quality Management System Certification.",
    icon: BadgeCheck,
    route: "/certificates/iso-9001",
  },
  {
    id: 2,
    name: "GST Registration",
    slug: "gst",
    pdf: "/certificates/gst.pdf", // Make sure this file exists in public/certificates/
    description: "GST Registration Certificate.",
    icon: Receipt,
    route: "/certificates/gst",
  },
  {
    id: 3,
    name: "Udyam Registration",
    slug: "udyam",
    pdf: "/certificates/udyam.pdf",
    description: "MSME Udyam Registration Certificate.",
    icon: Building2,
    route: "/certificates/udyam",
  },
];

export default certificates;