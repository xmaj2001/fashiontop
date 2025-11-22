export interface IModel {
  id: string;
  name: string;
  gender: 'female' | 'male' | 'non-binary';
  nationality: string;
  city: string;
  country?: string;
  email: string;
  phone?: string;

  languages?: string[];

  measure: {
    height: number;
    weight: number;
    bust?: number;
    waist?: number;
    hips?: number;
    mannequin: string;
    shoe: string;
  };

  additionalInfo: {
    categories: string[];
    eyeColor: string;
    hairType: string;
    hairColor: string;
    birthDate: string;
  };

  imagens: string[];

  socialMedia?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    tiktok?: string;
  };

  availableFor?: string[]; // trabalhos disponíveis
  calendarAvailability?: string[];

  experience?: {
    years?: number;
    events?: string[];
    brandsWorked?: string[];
  };

  bio?: string;
  achievements?: string[];
  portfolioLink?: string;
  ebook?: string;
  documents?: {
    passport?: boolean;
    visa?: boolean;
    workPermit?: boolean;
  };

  createdAt?: string;
  updatedAt?: string;
}
