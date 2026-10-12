import type { Figure } from '@/types';
import { IMG } from './images';

export const gallery: Figure[] = [
  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ১. প্যানক্রিয়াটিক সিটি স্ক্যান ইমেজ
  {
    src: IMG.pancreasCT,
    alt: 'Demo axial medical scan representing pancreatic CT analysis',
    caption: 'Pancreatic CT preprocessing view for the current research workflow.',
    category: 'segmentation',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ২. ৩ডি সেগমেন্টেশন রেন্ডারিং ইমেজ
  {
    src: IMG.segmentation3D,
    alt: 'Demo three-dimensional medical segmentation rendering',
    caption: 'Three-dimensional segmentation rendering illustrating volumetric model output.',
    category: 'segmentation',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৩. ভিশন ট্রান্সফরমার আর্কিটেকচার ডায়াগ্রাম
  {
    src: IMG.vitArchitecture,
    alt: 'Demo Vision Transformer architecture diagram',
    caption: 'Vision Transformer architecture overview for image-classification experiments.',
    category: 'architecture',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৪. Grad-CAM হিটম্যাপ অ্যাক্টিভেশন ইমেজ
  {
    src: IMG.gradcamOverlay,
    alt: 'Demo Grad-CAM activation overlay on a leaf image',
    caption: 'Grad-CAM overlays on misclassified guava leaves, field-condition subset.',
    category: 'xai',
    demo: true,
    aspect: 'square',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৫. কনফিউশন ম্যাট্রিক্স ভিউজুয়ালাইজেশন
  {
    src: IMG.confusionMatrix,
    alt: 'Demo confusion matrix visualization',
    caption: 'Confusion matrix layout for class-wise error inspection.',
    category: 'results',
    demo: true,
    aspect: 'square',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৬. ROC কার্ভ গ্রাফ ডায়াগ্রাম
  {
    src: IMG.rocCurve,
    alt: 'Demo receiver operating characteristic curve',
    caption: 'ROC curve layout for threshold and class-separation analysis.',
    category: 'results',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৭. এনসেম্বল লার্নিং ফ্লোচার্ট ডায়াগ্রাম
  {
    src: IMG.ensembleDiagram,
    alt: 'Demo ensemble learning architecture diagram',
    caption: 'Weighted voting and stacking ensemble workflow.',
    category: 'architecture',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৮. ফিল্ড কন্ডিশন লিফ ডেটাসেট কালেকশন
  {
    src: IMG.leafDataset,
    alt: 'Demo field-condition leaf image collection',
    caption: 'Field-condition leaf image samples prepared for classification.',
    category: 'results',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ৯. SkinNet সিএনএন আর্কিটেকচার ডায়াগ্রাম
  {
    src: IMG.skinnetArch,
    alt: 'Demo lightweight CNN architecture',
    caption: 'SkinNet lightweight CNN architecture overview.',
    category: 'architecture',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ১০. কনফারেন্স পেপার প্রেজেন্টেশন ফটো
  {
    src: IMG.conferenceTalk,
    alt: 'Demo image representing a conference presentation',
    caption: 'Conference presentation and research dissemination.',
    category: 'event',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ১১. বিশ্ববিদ্যালয় গেস্ট লেকচার ফটো
  {
    src: IMG.guestLecture,
    alt: 'Demo image representing a university guest lecture',
    caption: 'Guest lecture on AI, Data Intelligence, and research methodology.',
    category: 'event',
    demo: true,
    aspect: 'wide',
  },

  // [ইমেজ চেঞ্জ / IMAGE_CHANGE] ১২. সিসকো CCNA সার্টিফিকেট ফটো / স্ক্যান
  {
    src: IMG.ccnaCertificate,
    alt: 'Demo image representing a CCNA certificate',
    caption: 'Cisco Certified Network Associate credential.',
    category: 'certificate',
    demo: true,
    aspect: 'wide',
  },
];
