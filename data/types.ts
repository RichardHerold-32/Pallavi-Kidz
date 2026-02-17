export interface Program {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  duration: string;
  icon?: string;
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  experience: string;
  image?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  parentName: string;
  childName: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Branch {
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
  heroHeadline: string;
  heroSubtext: string;
  about: string;
  programs: Program[];
  facilities: Facility[];
  faculty: FacultyMember[];
  events: Event[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  seo: SEO;
}
