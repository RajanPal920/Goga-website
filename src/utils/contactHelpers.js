// src/utils/contactHelpers.js
import contact from "../data/contact";

/**
 * Safely get phone number as a clean string with only digits
 * @returns {string} Clean phone number with only digits
 */
export const getPhoneNumber = () => {
  // Try phone from contact
  if (contact.phone) {
    if (typeof contact.phone === "string") {
      return contact.phone.replace(/[^0-9]/g, "");
    }
    if (typeof contact.phone === "object" && contact.phone.primary) {
      return contact.phone.primary.replace(/[^0-9]/g, "");
    }
    if (typeof contact.phone === "object" && contact.phone.toString) {
      return contact.phone.toString().replace(/[^0-9]/g, "");
    }
  }

  // Try whatsapp
  if (contact.whatsapp) {
    if (typeof contact.whatsapp === "string") {
      return contact.whatsapp.replace(/[^0-9]/g, "");
    }
    if (typeof contact.whatsapp === "object" && contact.whatsapp.primary) {
      return contact.whatsapp.primary.replace(/[^0-9]/g, "");
    }
    if (typeof contact.whatsapp === "object" && contact.whatsapp.toString) {
      return contact.whatsapp.toString().replace(/[^0-9]/g, "");
    }
  }

  // Try contact.phoneString if it exists
  if (contact.phoneString) {
    return contact.phoneString.replace(/[^0-9]/g, "");
  }

  // Try contact.whatsappString if it exists
  if (contact.whatsappString) {
    return contact.whatsappString.replace(/[^0-9]/g, "");
  }

  // Fallback to GOGA STAINLESS phone number
  return "918452828260";
};

/**
 * Safely get WhatsApp number as a clean string with only digits
 * @returns {string} Clean WhatsApp number with only digits
 */
export const getWhatsAppNumber = () => {
  // Try whatsapp first
  if (contact.whatsapp) {
    if (typeof contact.whatsapp === "string") {
      return contact.whatsapp.replace(/[^0-9]/g, "");
    }
    if (typeof contact.whatsapp === "object" && contact.whatsapp.primary) {
      return contact.whatsapp.primary.replace(/[^0-9]/g, "");
    }
    if (typeof contact.whatsapp === "object" && contact.whatsapp.toString) {
      return contact.whatsapp.toString().replace(/[^0-9]/g, "");
    }
  }

  // Try phone
  if (contact.phone) {
    if (typeof contact.phone === "string") {
      return contact.phone.replace(/[^0-9]/g, "");
    }
    if (typeof contact.phone === "object" && contact.phone.primary) {
      return contact.phone.primary.replace(/[^0-9]/g, "");
    }
    if (typeof contact.phone === "object" && contact.phone.toString) {
      return contact.phone.toString().replace(/[^0-9]/g, "");
    }
  }

  // Try contact.whatsappString if it exists
  if (contact.whatsappString) {
    return contact.whatsappString.replace(/[^0-9]/g, "");
  }

  // Try contact.phoneString if it exists
  if (contact.phoneString) {
    return contact.phoneString.replace(/[^0-9]/g, "");
  }

  // Fallback to GOGA STAINLESS phone number
  return "918452828260";
};

/**
 * Safely get email address
 * @returns {string} Email address
 */
export const getEmail = () => {
  if (contact.email && typeof contact.email === "string") {
    return contact.email;
  }
  if (
    contact.email &&
    typeof contact.email === "object" &&
    contact.email.primary
  ) {
    return contact.email.primary;
  }
  return "gogastainless@gmail.com";
};

/**
 * Get all contact info as strings
 * @returns {Object} Contact object with all fields as strings
 */
export const getContactInfo = () => {
  return {
    phone: getPhoneNumber(),
    whatsapp: getWhatsAppNumber(),
    email: getEmail(),
  };
};

/**
 * Generate WhatsApp URL
 * @param {Object} contactObj - Contact object (optional, uses imported contact by default)
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppUrl = (contactObj = contact) => {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}`;
};

/**
 * Generate mailto URL
 * @param {Object} contactObj - Contact object (optional, uses imported contact by default)
 * @returns {string} Mailto URL
 */
export const getMailToUrl = (contactObj = contact) => {
  const email = getEmail();
  return `mailto:${email}`;
};

/**
 * Generate tel URL
 * @param {Object} contactObj - Contact object (optional, uses imported contact by default)
 * @returns {string} Telephone URL
 */
export const getTelUrl = (contactObj = contact) => {
  const number = getPhoneNumber();
  return `tel:${number}`;
};

// Export default for convenience
export default {
  getPhoneNumber,
  getWhatsAppNumber,
  getEmail,
  getContactInfo,
  getWhatsAppUrl,
  getMailToUrl,
  getTelUrl,
};
