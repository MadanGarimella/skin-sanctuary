export const clinic = {
  name: "Skin Scanctuary",
  displayName: "Skin Sanctuary",
  doctor: "Dr. Vaishnavi Nendraganti",
  phone: "+91 94400 52251",
  phoneHref: "tel:+919440052251",
  email: "appointments@skinscanctuary.com",
  emailHref: "mailto:appointments@skinscanctuary.com",
  address:
    "Hi-Tension Rd, above HDFC Bank, Sri Sai Baba Officer's Colony, Madhavapuri Colony, Sainikpuri, Hyderabad, Secunderabad, Telangana 500094",
  hours: [
    ["Monday - Saturday", "10:00 AM - 7:00 PM"],
    ["Sunday", "By prior appointment"],
  ],
  whatsappMessage:
    "Hello Skin Scanctuary Team,\n\nI would like to know more about your dermatology and aesthetic treatments. Please assist me with consultation availability and treatment details.\n\nThank you.",
};

export const getWhatsAppUrl = (message = clinic.whatsappMessage) =>
  `https://wa.me/919440052251?text=${encodeURIComponent(message)}`;

