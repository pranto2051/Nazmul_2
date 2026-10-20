export type Figure = {
  src: string;
  alt: string;
  caption: string;
  title?: string;
  credit?: string;
  category: 'architecture' | 'results' | 'xai' | 'segmentation' | 'event' | 'certificate';
  demo?: boolean;
  aspect?: 'square' | 'wide' | 'tall';
  whatWasDone?: string;
  whyUsed?: string;
  description?: string;
  highlights?: string[];
  toolsOrTech?: string[];
  dateOrVenue?: string;
  relatedLink?: {
    label: string;
    href: string;
  };
};
export type Publication={id:string;title:string;authors:string[];venue:string;venueShort?:string;year:number;month?:string;pages?:string;type:'conference'|'journal'|'book-chapter';status:'published'|'accepted'|'in-press'|'under-review';doi?:string;pdfUrl?:string;codeUrl?:string;abstract?:string;topics:string[];thumbnail?:string;figures?:Figure[];bibtex?:string};
export type ResearchProject={slug:string;title:string;summary:string;problem:string;approach:string[];figures:Figure[];topics:string[];publicationIds:string[]};
export type ExperienceItem={title:string;organisation:string;location?:string;period:string;category:'research'|'teaching'|'professional';bullets:string[]};
export type TeachingItem=ExperienceItem;
export type Project={title:string;context:string;summary:string;bullets:string[];stack:string[];figure:Figure};
export type Award={title:string;detail?:string};
export type Skill={category:string;items:string[]};

export type EducationItem = {
  id: string;
  degree: string;
  degreeType?: string;
  institution: string;
  shortInstitution?: string;
  location: string;
  country?: string;
  period: string;
  status: string;
  result: string;
  resultGrade?: string;
  logoUrl: string;
  department?: string;
  description?: string;
  thesis?: {
    title: string;
    description?: string;
    publicationUrl?: string;
    venue?: string;
  };
  highlights: string[];
  skills?: string[];
  websiteUrl?: string;
};
