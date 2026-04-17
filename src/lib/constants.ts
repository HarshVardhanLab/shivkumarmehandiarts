// Business Information Constants
export const BUSINESS = {
  name: 'Shiv Kumar Mehandi Art',
  owner: 'Shiv Kumar',
  phone: '+91 8058168076',
  phoneDisplay: '+91 80581 68076',
  whatsapp: '918058168076',
  whatsappLink: 'https://wa.me/918058168076',
  email: 'shivkumarmehandi9419@gmail.com',
  address: 'Shop No. 46, Shopping Center, Jawahar Nagar',
  city: 'Jaipur',
  state: 'Rajasthan',
  pincode: '302004',
  fullAddress: 'Shop No. 46, Shopping Center, Jawahar Nagar, Jaipur, Rajasthan - 302004',
  instagram: 'https://www.instagram.com/shiv_kumar_mehandi_art',
  facebook: 'https://www.facebook.com/profile.php?id=100063795336312',
  youtube: '#',
  website: 'https://shivkumarmehandiart.com',
  
  // Business Details
  tagline: 'Get The Best Mehndi Of Your Choice',
  taglineHindi: 'अपनी पसंद की बेहतरीन मेहंदी लगवाएं',
  experience: '15+ Years',
  specialization: 'Bridal, Arabic, Traditional Rajasthani Mehndi',
  
  // Business Hours
  hours: {
    weekdays: 'Open 24 Hours',
    weekends: 'Open 24 Hours',
    display: 'Open 24×7 — Always Available',
  },
  
  // About
  aboutShort: 'With over 15 years of experience in mehndi art, Shiv Kumar creates intricate designs blending traditional Rajasthani patterns with modern trends.',
  aboutShortHindi: 'मेहंदी की खूबसूरत कला में 15 वर्षों से अधिक अनुभव के साथ, शिव कुमार पारंपरिक राजस्थानी पैटर्न को आधुनिक ट्रेंड्स के साथ मिलाकर जटिल डिज़ाइन बनाते हैं।',
  
  aboutLong: 'Shiv Kumar Mehandi Art has been serving Jaipur for over 15 years, bringing the ancient art of mehndi to life with passion and precision. What started as a love for traditional henna art has grown into a trusted name for bridal and special occasion mehndi services.',
  
  // Mission & Values
  mission: 'To preserve the traditional art of mehndi while embracing modern designs, providing every client with beautiful, long-lasting henna art that makes their special moments even more memorable.',
  
  values: [
    'Quality: Using only premium natural henna',
    'Creativity: Unique designs for every client',
    'Tradition: Honoring Rajasthani heritage',
    'Innovation: Modern fusion styles',
    'Customer Satisfaction: Your happiness is our priority'
  ],
  
  // Why Choose Us
  whyChooseUs: [
    '15+ Years Experience',
    'Premium Natural Henna',
    'Professional Service',
    'Customized Designs',
    'Affordable Pricing',
    'On-Time Service'
  ],
  
  // Location Coordinates (Jaipur)
  coordinates: {
    latitude: 26.9124,
    longitude: 75.7873,
  },
  
  // Statistics
  stats: {
    experience: '15+',
    experienceLabel: 'Years Experience',
    happyClients: '5000+',
    happyClientsLabel: 'Happy Brides',
    rating: '4.9★',
    ratingLabel: 'Customer Rating',
    rank: '#1',
    rankLabel: "Jaipur's Best",
  },
  
  // Rating
  rating: {
    value: '4.9',
    count: '320',
  },
  
  // SEO
  metaDescription: 'Best bridal mehndi artist in Jaipur offering bridal, Arabic & custom henna designs. Over 15 years of experience in traditional Rajasthani mehndi art.',
  metaKeywords: 'Mehndi artist Jaipur, Bridal mehndi, Arabic mehndi, Wedding mehndi, Best mehndi Jaipur',
}

// WhatsApp Message Templates
export const WHATSAPP_MESSAGES = {
  general: `Hi! I'd like to know more about your mehndi services.`,
  booking: `Hi! I want to book a mehndi appointment.`,
  quote: `Hi! I'd like to get a quote for mehndi services.`,
  bridalQuote: `Hi! I'd like to get a quote for bridal mehndi.`,
}

// Helper function to generate WhatsApp URL
export function getWhatsAppUrl(message: string = WHATSAPP_MESSAGES.general) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`
}

// Helper function to generate phone call URL
export function getPhoneUrl() {
  return `tel:${BUSINESS.phone}`
}

// Helper function to generate email URL
export function getEmailUrl(subject?: string) {
  const url = `mailto:${BUSINESS.email}`
  return subject ? `${url}?subject=${encodeURIComponent(subject)}` : url
}
