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
  tagline: "Build. Automate. Scale.",
  description: null, // [APPROVED COMPANY DESCRIPTION — TO BE PROVIDED BY MANAGEMENT]
  vision: null, // [APPROVED VISION — TO BE PROVIDED BY MANAGEMENT]
  mission: null, // [APPROVED MISSION — TO BE PROVIDED BY MANAGEMENT]
  headquarters: "Pune, Maharashtra, India",
  email: "dibexainfotech@gmail.com",
  phone: null, // [OFFICIAL PHONE NUMBER — TO BE CONFIRMED]
  website: null, // [OFFICIAL WEBSITE DOMAIN — TO BE CONFIRMED]
  foundedYear: null, // [FOUNDED YEAR — TO BE CONFIRMED]
  companySize: null, // [EMPLOYEE COUNT / COMPANY SIZE — TO BE CONFIRMED]
  primaryMarket: null, // [INDIA / GLOBAL / BOTH — TO BE CONFIRMED]
  targetCustomerType: null, // [STARTUPS / SMEs / MID-MARKET / ENTERPRISE / OTHER — TO BE CONFIRMED]
  primaryGeographies: null, // [COUNTRIES / REGIONS — TO BE CONFIRMED]
  founder: null, // [FOUNDER NAME — TO BE CONFIRMED]
  leadership: null, // [LEADERSHIP INFORMATION TO BE PROVIDED]
  certifications: null, // [CERTIFICATIONS — TO BE PROVIDED]
  partnerships: null, // [TECHNOLOGY / BUSINESS PARTNERS — TO BE PROVIDED]
  socialLinks: {
    facebook: null, // [FACEBOOK URL — TO BE PROVIDED]
    linkedin: null, // [LINKEDIN URL — TO BE PROVIDED]
    instagram: null, // [INSTAGRAM URL — TO BE PROVIDED]
    youtube: null, // [YOUTUBE URL — TO BE PROVIDED]
    whatsapp: null, // [WHATSAPP NUMBER / URL — TO BE PROVIDED]
  }
};
