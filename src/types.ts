export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export interface IVDrip {
  id: string;
  name: string;
  description: string;
  price: string;
  tag: string;
  benefits: string[];
}

export interface BeautyTreatment {
  id: string;
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  text: string;
  rating: number;
  treatment: string;
  date: string;
}
