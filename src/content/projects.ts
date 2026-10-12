import type { Project } from '@/types';
import { IMG } from './images';

export const projects: Project[] = [
  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ১. NewsPortal প্রজেক্ট স্ক্রিনশট / ডায়াগ্রাম ইমেজ
  {
    title: 'NewsPortal — Advanced MongoDB Database for a News CMS',
    context: 'Group · MSc module: Big Data Database Development',
    summary: 'A structured data foundation for an editorial publishing system.',
    bullets: [
      'Schema and collection design',
      'Indexing strategies and validation rules',
      'Aggregation pipelines, query optimisation, testing, and documentation',
    ],
    stack: ['MongoDB', 'Database design', 'Testing'],
    figure: {
      src: IMG.mongoNewsPortal,
      alt: 'Demo editorial dashboard representing the NewsPortal project',
      caption: 'NewsPortal database and editorial workflow concept.',
      category: 'architecture',
      demo: true,
      aspect: 'wide',
    },
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ২. Big Data Route Optimization প্রজেক্ট ইমেজ
  {
    title: 'Big Data for Route Optimization',
    context: 'MSc module: Data in Action',
    summary: 'A data-driven framework for autonomous-vehicle route optimisation.',
    bullets: [
      'Dataset analysis',
      'System evaluation',
      'Real-world transport data',
    ],
    stack: ['Big data', 'Route optimisation', 'Evaluation'],
    figure: {
      src: IMG.routeOptimise,
      alt: 'Demo road network representing route optimisation',
      caption: 'Route-optimisation data and transport-network concept.',
      category: 'results',
      demo: true,
      aspect: 'wide',
    },
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৩. অফিস নেটওয়ার্ক আর্কিটেকচার প্রজেক্ট ইমেজ
  {
    title: 'Re-designing and Developing an Existing Office Network',
    context: 'BSc practicum',
    summary: 'A secure, efficient office network architecture.',
    bullets: [
      'Improved monitoring',
      'Reliability planning',
      'Secure network architecture',
    ],
    stack: ['Networking', 'Security', 'Monitoring'],
    figure: {
      src: IMG.officeNetwork,
      alt: 'Demo office network equipment and topology',
      caption: 'Office network redesign and monitoring concept.',
      category: 'architecture',
      demo: true,
      aspect: 'wide',
    },
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৪. ডাইনামিক কিউআর কোড সিস্টেম প্রজেক্ট ইমেজ
  {
    title: 'Dynamic QR Code System',
    context: 'BSc software engineering project',
    summary: 'A full-stack QR-based management system.',
    bullets: [
      'Database integration',
      'Monitoring and tracking',
      'Secure data management',
    ],
    stack: ['QR', 'Database', 'Full stack'],
    figure: {
      src: IMG.qrSystem,
      alt: 'Demo QR code system interface',
      caption: 'Dynamic QR management and tracking concept.',
      category: 'architecture',
      demo: true,
      aspect: 'wide',
    },
  },
];
