import type { EducationItem } from '@/types';

/**
 * ==============================================================================
 * 🎓 এডুকেশন কনফিগারেশন ফাইল (Education Background Configuration)
 * ==============================================================================
 * 
 * 📌 আপনি কীভাবে আপনার তথ্য বা লোগো পরিবর্তন করবেন:
 * ১. লোগো পরিবর্তন:
 *    প্রতিটি কার্ডের `logoUrl` এর মান পরিবর্তন করে আপনার পছন্দের যেকোনো লোগো ইমেজ ইউআরএল (URL) দিন।
 *    যেমন: 'https://example.com/my-university-logo.png'
 *    অথবা লোকাল ছবি ব্যবহার করতে চাইলে 'public/images/' ফোল্ডারে ছবি রেখে '/images/my-logo.png' দিন।
 * 
 * ২. রেজাল্ট ও ইউনিভার্সিটির নাম পরিবর্তন:
 *    - `institution`: ইউনিভার্সিটির পুরো নাম
 *    - `result`: আপনার রেজাল্ট বা সিজিপিএ (যেমন: 'CGPA 3.84 / 4.00' বা '70% (Distinction)')
 *    - `period`: সাল বা সময়কাল (যেমন: '2025 – Present' বা '2019 – 2023')
 * 
 * ৩. নতুন এডুকেশন কার্ড যোগ করা:
 *    নিচের অবজেক্টগুলোর মতো করে নতুন আরেকটি অবজেক্ট `{ ... }` তালিকায় যোগ করুন।
 * 
 * 🔍 সহজে খুঁজে পেতে এই ট্যাগগুলো দিয়ে সার্চ করুন:
 *    - [লোগো লিংক / LOGO_URL]
 *    - [রেজাল্ট / RESULT]
 *    - [ভার্সিটি নাম / UNIVERSITY_NAME]
 * ==============================================================================
 */

export const educationList: EducationItem[] = [
  {
    id: 'msc-data-intelligence',
    degree: 'MSc in Data Intelligence with Placement',
    degreeType: 'Master of Science (Postgraduate)',
    // [ভার্সিটি নাম / UNIVERSITY_NAME]
    institution: 'Canterbury Christ Church University',
    shortInstitution: 'CCCU',
    location: 'Canterbury, Kent',
    country: 'United Kingdom',
    period: '2025/26 – Present',
    status: 'In Progress (Distinction Track)',
    
    // [রেজাল্ট / RESULT] আপনার এমএসসি রেজাল্ট বা গ্রেড এখানে দিন:
    result: '70% Average (Distinction)',
    resultGrade: 'First Class Distinction',

    // ==========================================================================
    // [লোগো লিংক / LOGO_URL]
    // Canterbury Christ Church University লোগো ইউআরএল লিংক:
    // পরবর্তীতে নিজের পছন্দের লোগো লিংক দিতে নিচের URL টি পরিবর্তন করুন।
    // ==========================================================================
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Shield_of_Christ_Church_University_Canterbury.svg',

    department: 'School of Engineering, Technology and Design',
    description:
      'Postgraduate MSc program focused on advanced artificial intelligence, deep learning architectures, medical image analysis, and big data intelligence combined with an intensive academic research placement.',
    highlights: [
      'Active research placement in medical imaging: 3D pancreatic CT segmentation using Vision Transformers.',
      'Maintained consistent First Class Distinction academic average (70%).',
      'Appointed as Guest Lecturer & Invited Speaker on AI, Data Intelligence, and Research Methodology.',
      'Teaching Assistant for Python programming, Linear Algebra, and Probability practical problem-solving sessions.',
    ],
    skills: [
      'Vision Transformers',
      '3D Medical Segmentation',
      'Explainable AI (XAI)',
      'Deep Learning',
      'Python',
      'Data Intelligence',
    ],
    websiteUrl: 'https://www.canterbury.ac.uk',
  },
  {
    id: 'bsc-cse',
    degree: 'BSc in Computer Science & Engineering',
    degreeType: 'Bachelor of Science (Undergraduate)',
    // [ভার্সিটি নাম / UNIVERSITY_NAME]
    institution: 'International University of Business Agriculture and Technology (IUBAT)',
    shortInstitution: 'IUBAT',
    location: 'Dhaka',
    country: 'Bangladesh',
    period: '2019 – 2023',
    status: 'Graduated (Fall 2023)',

    // [রেজাল্ট / RESULT] আপনার বিএসসি রেজাল্ট বা সিজিপিএ এখানে দিন:
    result: 'CGPA 3.84 / 4.00',
    resultGrade: 'High Merit / Dean’s Honors',

    // ==========================================================================
    // [লোগো লিংক / LOGO_URL]
    // IUBAT ইউনিভার্সিটি লোগো ইউআরএল লিংক:
    // পরবর্তীতে নিজের পছন্দের লোগো লিংক দিতে নিচের URL টি পরিবর্তন করুন।
    // ==========================================================================
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/IUBAT2.png',

    department: 'Department of Computer Science & Engineering',
    description:
      'Comprehensive 4-year undergraduate program covering foundational computer science, algorithm design, software development, database systems, computer networking, and applied machine learning.',
    thesis: {
      title:
        'An Efficient Scheduling Algorithm Based on Buffer Status and Queue Length to Satisfy Real-Time Users in 5G Networks',
      venue: 'Published at IEEE ICCIT 2024',
      description:
        'Designed and evaluated a novel packet scheduling heuristic for 5G cellular networks, optimizing quality of service for real-time mobile users under constrained channel conditions.',
      publicationUrl: '/publications',
    },
    highlights: [
      'Graduated with an outstanding CGPA of 3.84 on a 4.00 scale.',
      'Undergraduate research thesis peer-reviewed, accepted, and published at IEEE ICCIT 2024.',
      'Completed Cisco Certified Network Associate (CCNA) credential during academic studies.',
      'Recipient of continuous academic merit scholarships across multiple consecutive semesters.',
    ],
    skills: [
      '5G Network Scheduling',
      'Algorithms & Data Structures',
      'Machine Learning',
      'Computer Networks',
      'CCNA Routing & Switching',
      'C++ & Python',
    ],
    websiteUrl: 'https://iubat.edu',
  },
];

// CV বা অন্যান্য পেজের সাথে ব্যাকওয়ার্ড কম্প্যাটিবিলিটির জন্য:
export const educationSummary = educationList.map((e) => ({
  degree: e.degree,
  place: `${e.institution}, ${e.country}`,
  period: e.period,
  detail: e.thesis
    ? `${e.result}. Thesis: ${e.thesis.title} (${e.thesis.venue}).`
    : `${e.result}, ongoing.`,
}));
