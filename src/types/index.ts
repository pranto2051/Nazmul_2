export type Figure={src:string;alt:string;caption:string;credit?:string;category:'architecture'|'results'|'xai'|'segmentation'|'event'|'certificate';demo?:boolean;aspect?:'square'|'wide'|'tall'};
export type Publication={id:string;title:string;authors:string[];venue:string;venueShort?:string;year:number;month?:string;pages?:string;type:'conference'|'journal'|'book-chapter';status:'published'|'accepted'|'in-press'|'under-review';doi?:string;pdfUrl?:string;codeUrl?:string;abstract?:string;topics:string[];thumbnail?:string;figures?:Figure[];bibtex?:string};
export type ResearchProject={slug:string;title:string;summary:string;problem:string;approach:string[];figures:Figure[];topics:string[];publicationIds:string[]};
export type ExperienceItem={title:string;organisation:string;location?:string;period:string;category:'research'|'teaching'|'professional';bullets:string[]};
export type TeachingItem=ExperienceItem;
export type Project={title:string;context:string;summary:string;bullets:string[];stack:string[];figure:Figure};
export type Award={title:string;detail?:string};
export type Skill={category:string;items:string[]};
