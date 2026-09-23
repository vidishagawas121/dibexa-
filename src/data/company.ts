export interface SocialLinks {
  facebook: string | null;
  linkedin: string | null;
  instagram: string | null;
  youtube: string | null;
  whatsapp: string | null;
}

export interface LeadershipMember {
  name: string;
  designation: string;
  shortBio: string | null;
  linkedIn: string | null;
  photoUrl: string | null;
}

export interface CompanyData {
  companyName: string;
  shortName: string;
  tagline: string;
  description: string | null;
  vision: string | null;
  mission: string | null;
  headquarters: string;
  email: string;
  phone: string | null;
  website: string | null;
  foundedYear: number | null;
  companySize: string | null;
  primaryMarket: string | null;
  targetCustomerType: string | null;
  primaryGeographies: string | null;
  founder: string | null;
  leadership: LeadershipMember[] | null;
  certifications: string[] | null;
  partnerships: string[] | null;
  socialLinks: SocialLinks;
}

export const companyConfig: CompanyData = {
  companyName: "Dibexa Infotech Pvt. Ltd.",
  shortName: "Dibexa",
  tagline: "Smart AI for Business Excellence.",
  description: "Dibexa is a Pune-based AI startup dedicated to democratizing artificial intelligence. We provide world-class AI automation and software services tailored for modern Indian enterprises, helping them eliminate bottlenecks and scale seamlessly.",
  vision: "To empower every Indian business, from scaling startups to multinational corporations, with accessible, high-performance AI technology.",
  mission: "To deliver smart, customized AI solutions that drive business excellence and operational efficiency across the global market.",
  headquarters: "City Vista, A 305, Downtown Rd, Ashoka Nagar, Kharadi, Pune, Maharashtra 411014, India",
  email: "dibexainfotech@gmail.com",
  phone: "+91 95276 05805",
  website: "https://dibexa.com",
  foundedYear: null, // [FOUNDED YEAR — TO BE CONFIRMED]
  companySize: "Startup",
  primaryMarket: "India",
  targetCustomerType: "Local Shops to MNCs",
  primaryGeographies: "India",
  founder: null, // [FOUNDER NAME — TO BE CONFIRMED]
  leadership: null, // [LEADERSHIP INFORMATION TO BE PROVIDED]
  certifications: null, // [CERTIFICATIONS — TO BE PROVIDED]
  partnerships: null, // [TECHNOLOGY / BUSINESS PARTNERS — TO BE PROVIDED]
  socialLinks: {
    facebook: "#",
    linkedin: "#",
    instagram: "#",
    youtube: "#",
    whatsapp: "#",
  }
};
