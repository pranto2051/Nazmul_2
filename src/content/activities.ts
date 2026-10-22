/**
 * ==============================================================================
 * 🌟 অ্যাক্টিভিটি কনফিগারেশন ফাইল (Activities & Engagements Data)
 * ==============================================================================
 * 
 * 💡 ছবি পরিবর্তন সংক্রান্ত তথ্য:
 * এই ফাইলের সব ছবির লিংক কেন্দ্রীয়ভাবে 'src/content/images.ts' ফাইলে রাখা হয়েছে।
 * আপনি যেকোনো ছবি পরিবর্তন করতে চাইলে 'src/content/images.ts' ফাইলটি ওপেন করুন এবং
 * "সেকশন ৪: অ্যাক্টিভিটিজ ও ইভেন্টস ছবি" অংশে গিয়ে সংশ্লিষ্ট ছবির লিংক পরিবর্তন করুন।
 * ==============================================================================
 */

import type { ActivityItem } from '@/types';
import { IMG } from './images';

export const activities: ActivityItem[] = [
  // 1. [টিচিং অ্যাক্টিভিটিজ / TEACHING ACTIVITIES] CCCU টিচিং অ্যাসিস্ট্যান্ট ও প্র্যাকটিক্যাল ল্যাব সেশন
  {
    id: 'teaching-activities-cccu',
    title: 'Undergraduate Teaching & Practical Lab Instruction',
    organization: 'Canterbury Christ Church University (CCCU)',
    role: 'Teaching Assistant & Practical Lab Instructor',
    period: '2026 – Present',
    category: 'teaching',
    categoryLabel: 'Academic Teaching',
    location: 'Canterbury, United Kingdom',
    status: 'Active',
    badge: 'Teaching Assistant',
    coverImage: IMG.activityTeachingCover,
    images: [
      {
        src: IMG.activityTeachingPhoto1,
        caption: 'Facilitating practical computing lab sessions, algorithm demonstrations, and hands-on coding clinics at CCCU.',
      },
      {
        src: IMG.activityTeachingPhoto2,
        caption: 'Interactive coding guidance and student mentoring in Python, Linear Algebra, and Probability practicals.',
      },
    ],
    summary: 'Conducting practical lab sessions, programming clinics, and mentoring undergraduate computing students in Python, Linear Algebra, and Probability.',
    description: 'Serving as a Teaching Assistant at Canterbury Christ Church University, supporting core undergraduate computer science courses. Responsibilities include conducting interactive laboratory demonstrations, guiding students through complex algorithm implementations, facilitating problem-solving clinics, and mentoring students in applied AI and mathematical foundations.',
    whatWasDone: [
      'Conducted hands-on laboratory sessions in Python, Linear Algebra, and Probability for undergraduate computer science students.',
      'Guided students step-by-step through algorithmic problem-solving, data structures debugging, and code optimization.',
      'Assisted students with assignments and practical tasks, providing individualized code reviews and constructive feedback.',
      'Fostered an engaging, collaborative learning environment encouraging scientific curiosity and modern software engineering practices.',
    ],
    skills: ['Higher Education Teaching', 'Python', 'Linear Algebra & Probability', 'Lab Demonstration', 'Academic Mentorship'],
    link: {
      label: 'View Teaching Experience',
      href: '/experience',
    },
  },

  // 2. [কনফারেন্স পার্টিসিপেশন / CONFERENCE ATTENDANCE] আন্তর্জাতিক গবেষণা কনফারেন্স প্রেজেন্টেশন ও পার্টিসিপেশন
  {
    id: 'academic-conference-attendance',
    title: 'International Academic Research Conference & Symposiums',
    organization: 'International Academic Conferences (IEEE ICCIT & Global Venues)',
    role: 'Presenting Author & Research Delegate',
    period: '2024 – Present',
    category: 'events',
    categoryLabel: 'Academic Conference',
    location: 'International Venues',
    status: 'Completed / Ongoing',
    badge: 'Research Delegate',
    coverImage: IMG.activityConferenceCover,
    images: [
      {
        src: IMG.activityConferencePhoto1,
        caption: 'Attending oral technical sessions and scientific research paper presentations at the international conference.',
      },
      {
        src: IMG.activityConferencePhoto2,
        caption: 'Networking with international professors, researchers, and scientific peers during the conference proceedings.',
      },
      {
        src: IMG.activityConferencePhoto3,
        caption: 'Participating in technical paper dissemination, Q&A sessions, and cross-disciplinary research dialogues.',
      },
      {
        src: IMG.activityConferencePhoto4,
        caption: 'Engaging in academic discussions on machine learning, 3D medical vision, and next-generation networks.',
      },
    ],
    summary: 'Active attendance and dissemination at international peer-reviewed academic conferences, engaging with global scientists and sharing research discoveries.',
    description: 'Participating as a presenting author and research delegate in renowned international academic conferences (including IEEE ICCIT). Attending high-level technical sessions, keynote lectures, and research workshops covering deep learning, medical computer vision, 5G packet scheduling, and Explainable AI (XAI). Establishing valuable academic ties with international researchers and exploring collaborative research opportunities.',
    whatWasDone: [
      'Participated in peer-reviewed oral technical sessions and poster presentations before international research audiences.',
      'Exchanged insights on novel deep learning architectures, 3D medical volume segmentation, and cellular network scheduling.',
      'Networked with renowned professors, laboratory directors, and peer researchers from institutions worldwide.',
      'Engaged in scholarly Q&A dialogues, integrating peer feedback into future publication benchmarks and experimental designs.',
    ],
    skills: ['Scientific Dissemination', 'Academic Networking', 'Conference Presentation', 'IEEE Conferences', 'Research Collaboration'],
    link: {
      label: 'View Publications',
      href: '/publications',
    },
  },

  // 3. [কর্পোরেট জব এবং ইন্টার্ন ফেয়ারওয়েল / CORPORATE TENURE & FAREWELL] যমুনা টেলিভিশন লিমিটেড
  {
    id: 'corporate-tenure-jamuna-tv',
    title: 'Corporate Network Engineering Tenure & Farewell',
    organization: 'Jamuna Television Ltd (Leading 24/7 Broadcast Media)',
    role: 'Network Support Engineer & IT Intern',
    period: 'Sep 2023 – Feb 2024',
    category: 'organization',
    categoryLabel: 'Corporate Experience',
    location: 'Dhaka, Bangladesh',
    status: 'Completed',
    badge: 'Corporate Tenure',
    coverImage: IMG.activityCorporateCover,
    images: [
      {
        src: IMG.activityCorporatePhoto1,
        caption: 'Farewell gathering with team leads and engineering colleagues on the last day at Jamuna Television Ltd.',
      },
      {
        src: IMG.activityCorporatePhoto2,
        caption: 'Corporate farewell celebration commemorating a successful tenure in enterprise broadcast network operations.',
      },
      {
        src: IMG.activityCorporatePhoto3,
        caption: 'Memorable moments with fellow IT engineers and department heads upon completing corporate milestones.',
      },
    ],
    summary: 'Professional tenure as Network Support Engineer and IT Intern at Jamuna Television Ltd, celebrated with team farewell on the final day.',
    description: "Marking the successful conclusion of professional engineering service at Jamuna Television Ltd, one of Bangladesh's premier 24/7 broadcast television networks. Having started as an IT & Networking Intern and promoted to Network Support Engineer, this farewell gathered the entire engineering and IT department to celebrate months of delivering mission-critical network uptime, broadcast transmission resilience, and infrastructure security.",
    whatWasDone: [
      'Maintained enterprise network infrastructure, routing protocols, and low-latency switching across broadcast newsrooms and control studios.',
      'Provided real-time diagnostic troubleshooting for transmission feeds, news production servers, and internal telecommunication lines.',
      'Collaborated with senior network architects on VLAN segmentation, firewall policy enforcement, and live failover configurations.',
      'Successfully completed internship objectives and seamlessly handled full responsibilities as Network Support Engineer before corporate farewell.',
    ],
    skills: ['Enterprise Routing & Switching', 'Broadcast IT Systems', 'Team Leadership', 'Network Troubleshooting', 'Infrastructure Security'],
    link: {
      label: 'View Experience Timeline',
      href: '/experience',
    },
  },

  // 4. [গেস্ট লেকচার ও প্রেজেন্টেশন / GUEST LECTURE] Canterbury Christ Church University (CCCU)
  {
    id: 'guest-lecturer-cccu',
    title: 'Invited Guest Lecture: AI, Data Intelligence & Methodology',
    organization: 'Canterbury Christ Church University (CCCU)',
    role: 'Guest Lecturer / Invited Speaker',
    period: 'March 2026',
    category: 'teaching',
    categoryLabel: 'Guest Lecture & Seminar',
    location: 'Canterbury, United Kingdom',
    status: 'Completed',
    badge: 'Invited Speaker',
    coverImage: IMG.activityGuestLectureCover,
    images: [
      {
        src: IMG.activityGuestLecturePhoto1,
        caption: 'Delivering an invited guest lecture on Artificial Intelligence, Data Intelligence, and deep learning architectures at CCCU.',
      },
      {
        src: IMG.activityGuestLecturePhoto2,
        caption: 'Engaging in interactive discussion and demonstrating AI research workflows with university students and faculty.',
      },
    ],
    summary: 'Invited guest lecture on AI, Data Intelligence, research methodology, and emerging deep neural network architectures at CCCU.',
    description: 'Invited by Canterbury Christ Church University to deliver a specialized academic guest lecture for computing students and emerging scholars. The session focused on the transition from fundamental machine learning concepts to state-of-the-art deep learning architectures (Vision Transformers, CNNs), medical imaging volumetric preprocessing, Explainable AI (Grad-CAM), and structured research methodology required for high-impact publication.',
    whatWasDone: [
      'Delivered a keynote lecture on applied deep learning, 3D medical volume segmentation, and Explainable AI principles.',
      'Demonstrated live data preprocessing pipelines using Python, PyTorch, and medical imaging libraries.',
      'Shared practical strategies for literature review, formulating scientific hypotheses, and targeting reputable academic venues.',
      'Conducted an interactive Q&A session, mentoring students on academic publication ethics, graduate research, and AI career pathways.',
    ],
    skills: ['Guest Lecture', 'Academic Keynote', 'Deep Learning & ViTs', 'Research Methodology', 'Higher Education'],
    link: {
      label: 'View Experience Record',
      href: '/experience',
    },
  },

  // 5. [CCCU হ্যাকাবুরি হ্যাকাথন / CCCU HACKABURY HACKATHON]
  {
    id: 'cccu-hackabury-hackathon',
    title: 'CCCU Hackabury Hackathon — Collaborative Prototyping',
    organization: 'Canterbury Christ Church University (CCCU)',
    role: 'Hackathon Participant & Software Engineer',
    period: '2026',
    category: 'clubs',
    categoryLabel: 'Hackathon & Innovation',
    location: 'Canterbury, Kent, United Kingdom',
    status: 'Completed',
    badge: 'Hackathon Participant',
    coverImage: IMG.activityHackaburyCover,
    images: [
      {
        src: IMG.activityHackaburyPhoto1,
        caption: 'Intensive software development and rapid architectural design during CCCU Hackabury Hackathon.',
      },
      {
        src: IMG.activityHackaburyPhoto2,
        caption: 'Collaborative coding session with teammates, implementing core functional modules under competitive time limits.',
      },
      {
        src: IMG.activityHackaburyPhoto3,
        caption: 'Team sprint, brainstorming technical solutions, and debugging deployment workflows during Hackabury.',
      },
      {
        src: IMG.activityHackaburyPhoto4,
        caption: 'Final project showcase and presentation to judges and fellow hackathon competitors at Christ Church University.',
      },
    ],
    summary: 'Participated in CCCU Hackabury, building rapid functional prototypes, collaborating in fast-paced development sprints, and pitching solutions.',
    description: 'Participated in Hackabury, the flagship annual hackathon organized at Canterbury Christ Church University (CCCU). Collaborated with a multidisciplinary engineering team in an intensive, time-constrained environment to formulate, design, build, and pitch an end-to-end working software solution addressing real-world problem statements.',
    whatWasDone: [
      'Collaborated with engineering teammates to ideate and architect a functional software prototype from scratch within 24 hours.',
      'Integrated frontend user interfaces with responsive backend logic and intelligent algorithmic components.',
      'Conducted rapid agile iteration, code integration, and live debugging under stringent hackathon deadlines.',
      'Presented the completed working demonstration to technical judges and university peers, detailing architecture, utility, and scalability.',
    ],
    skills: ['Hackathons', 'Rapid Prototyping', 'Agile Collaboration', 'Full-Stack Development', 'Technical Pitching'],
    link: {
      label: 'Canterbury Christ Church University',
      href: 'https://www.canterbury.ac.uk',
    },
  },

  // 6. [আইইইই স্টুডেন্ট ব্রাঞ্চ / IEEE STUDENT BRANCH]
  {
    id: 'ieee-student-branch',
    title: 'Executive Committee Member & Tech Lead',
    organization: 'IEEE Student Branch',
    role: 'Executive Member & Technical Coordinator',
    period: '2023 – Present',
    category: 'organization',
    categoryLabel: 'Professional Organization',
    location: 'Dhaka, Bangladesh',
    status: 'Active',
    badge: 'Core Committee',
    coverImage: IMG.activityIeeeCover,
    images: [
      {
        src: IMG.activityIeeePhoto1,
        caption: 'IEEE Annual Technical Symposium and paper presentation session.',
      },
      {
        src: IMG.activityIeeePhoto2,
        caption: 'Organizing committee meeting and workshop coordination.',
      },
      {
        src: IMG.activityIeeePhoto3,
        caption: 'Conducting technical hands-on session for student members.',
      },
    ],
    summary: 'Active leadership in IEEE student chapter, coordinating research workshops, hackathons, and technical symposiums.',
    description: 'As an Executive Committee Member of the IEEE Student Branch, I actively facilitate technical knowledge sharing between academia and engineering students. My responsibilities encompass designing hands-on technical workshops, facilitating IEEE Xplore literature search masterclasses, and leading event logistics for national-level technical competitions.',
    whatWasDone: [
      'Coordinated 6+ university-wide technical workshops on Machine Learning, Research Methodologies, and Python.',
      'Organized an IEEE Xplore digital library research literacy webinar attended by 180+ undergraduate researchers.',
      'Led the technical committee for the annual student hackathon, overseeing problem formulation and automated judging setups.',
      'Collaborated with university faculty and international keynote speakers to host hybrid guest lecture sessions.',
    ],
    skills: ['Leadership', 'Event Management', 'Technical Mentorship', 'Public Speaking', 'IEEE Coordination'],
    link: {
      label: 'IEEE Student Branch Page',
      href: 'https://www.ieee.org',
    },
  },

  // 7. [কম্পিউটার সোসাইটি / UNIVERSITY COMPUTER SOCIETY]
  {
    id: 'university-computer-society',
    title: 'Lead Workshop Instructor & Tech Mentor',
    organization: 'University Computer Society & IT Club',
    role: 'Technical Lead & Workshop Instructor',
    period: '2022 – 2024',
    category: 'clubs',
    categoryLabel: 'Student Club',
    location: 'Dhaka, Bangladesh',
    status: 'Completed',
    badge: 'Mentor Lead',
    coverImage: IMG.activityCompSocietyCover,
    images: [
      {
        src: IMG.activityCompSocietyPhoto1,
        caption: 'Hands-on programming bootcamp for first-year undergraduate students.',
      },
      {
        src: IMG.activityCompSocietyPhoto2,
        caption: 'Mentorship circle discussing data structures and competitive programming techniques.',
      },
    ],
    summary: 'Conducted programming bootcamps, competitive coding clinics, and AI development workshops for over 250 students.',
    description: 'Served as Technical Lead for the university computer club, orchestrating comprehensive coding series for undergraduates. Designed curated curricula spanning core Data Structures & Algorithms, modern Web Development, and preliminary Machine Learning with Scikit-learn and PyTorch.',
    whatWasDone: [
      'Formulated a 4-week structured Python & Algorithms bootcamp with practical problem sets and weekly contests.',
      'Mentored 50+ junior students one-on-one in debugging, Git version control, and academic project architectures.',
      'Authored standardized club open-source guidelines and GitHub repository templates for collaborative student initiatives.',
      'Judged the intra-departmental project showcase evaluating 25+ software and hardware engineering submissions.',
    ],
    skills: ['Python', 'DSA Mentorship', 'Curriculum Design', 'Git & GitHub', 'Student Guidance'],
    link: {
      label: 'Club GitHub Organization',
      href: 'https://github.com',
    },
  },

  // 8. [মেডিক্যাল ইমেজিং অ্যান্ড এআই রিসার্চ কালেক্টিভ]
  {
    id: 'ai-medical-research-circle',
    title: 'Research Study Group Coordinator',
    organization: 'Medical Imaging & AI Research Collective',
    role: 'Peer Research Coordinator',
    period: '2023 – Present',
    category: 'leadership',
    categoryLabel: 'Academic Leadership',
    location: 'Dhaka, Bangladesh',
    status: 'Active',
    badge: 'Research Lead',
    coverImage: IMG.activityMedResearchCover,
    images: [
      {
        src: IMG.activityMedResearchPhoto1,
        caption: 'Bi-weekly medical imaging journal club meeting discussing 3D CT segmentation papers.',
      },
      {
        src: IMG.activityMedResearchPhoto2,
        caption: 'Collaborative code review of deep learning model training pipelines.',
      },
    ],
    summary: 'Founding and coordinating a peer-led AI research study group focused on 3D CT/MRI segmentation and Explainable AI.',
    description: 'Formed a self-motivated academic group of undergraduate and postgraduate researchers dedicated to cutting-edge medical computer vision. We host bi-weekly paper reading clubs, replicate leading CVPR/MICCAI research methodologies, and collaborate on reproducible benchmark studies.',
    whatWasDone: [
      'Initiated bi-weekly literature review sessions deconstructing top-tier conference papers in MICCAI, CVPR, and IEEE TMI.',
      'Structured standardized GPU training environments and shared PyTorch/TorchIO data preprocessing pipelines.',
      'Facilitated peer code-review processes prior to paper submissions, elevating empirical rigor and baseline validations.',
      'Guided 3 student groups in preparing their first academic workshop manuscripts and conference submissions.',
    ],
    skills: ['Explainable AI', '3D Segmentation', 'Paper Review', 'PyTorch', 'Research Collaboration'],
    link: {
      label: 'Research Archive',
      href: '/research',
    },
  },

  // 9. [ন্যাশনাল টেক কার্নিভাল ও হ্যাকাথন]
  {
    id: 'national-tech-carnival',
    title: 'Head of Logistics & Event Management',
    organization: 'National Collegiate Tech Carnival & Hackathon',
    role: 'Lead Event Coordinator',
    period: '2023',
    category: 'events',
    categoryLabel: 'National Event',
    location: 'Dhaka, Bangladesh',
    status: 'Completed',
    badge: 'Event Lead',
    coverImage: IMG.activityTechCarnivalCover,
    images: [
      {
        src: IMG.activityTechCarnivalPhoto1,
        caption: 'Grand opening ceremony of the National Collegiate Tech Carnival.',
      },
      {
        src: IMG.activityTechCarnivalPhoto2,
        caption: 'Auditorium keynote speech and prize-giving ceremonies.',
      },
    ],
    summary: 'Led end-to-end planning and execution for a national-scale tech festival hosting 600+ participants from 35+ institutions.',
    description: 'Directed a 30-member volunteer team to deliver a two-day national festival celebrating engineering innovation. Managed competition tracks encompassing competitive programming, project display, IT Olympiad, and a 24-hour hackathon.',
    whatWasDone: [
      'Oversaw physical infrastructure, high-speed local networking, and audio-visual setups across 4 venues simultaneously.',
      'Liaised with corporate tech sponsors, industry dignitaries, and university department chairs for keynotes and sponsorships.',
      'Ensured round-the-clock emergency support, participant hospitality, and smooth timeline execution without major delays.',
      'Received the Official Certificate of Appreciation from the University Dean for exemplary event leadership.',
    ],
    skills: ['Crisis Management', 'Team Leadership', 'Logistics Planning', 'Sponsorship Management', 'Public Relations'],
  },

  // 10. [ভলান্টারি ব্লাড ডোনেশন ও হিউম্যানিটারিয়ান আউটরিচ]
  {
    id: 'community-humanitarian-blood-drive',
    title: 'Voluntary Blood Donation & Humanitarian Outreach',
    organization: 'Youth Humanitarian Network & Badhan',
    role: 'Volunteer Coordinator',
    period: '2021 – Present',
    category: 'volunteering',
    categoryLabel: 'Social Welfare',
    location: 'Dhaka & Regional Districts',
    status: 'Active',
    badge: 'Volunteer',
    coverImage: IMG.activityBloodDriveCover,
    images: [
      {
        src: IMG.activityBloodDrivePhoto1,
        caption: 'Annual voluntary blood donation drive organized on university campus.',
      },
      {
        src: IMG.activityBloodDrivePhoto2,
        caption: 'Community humanitarian outreach and medical supply logistics.',
      },
    ],
    summary: 'Coordinated campus voluntary blood donation drives and emergency medical response support for critical patients.',
    description: 'Dedicated to community welfare and emergency response initiatives. Actively help mobilize donors during critical medical emergencies and organize voluntary blood screening campaigns across student residences.',
    whatWasDone: [
      'Organized 4 campus blood typing and donor collection campaigns gathering over 320 bags of blood for local hospitals.',
      'Maintained a verified 24/7 emergency donor directory to supply rare blood groups to patients in urgent need.',
      'Participated in emergency humanitarian relief kit distribution during severe monsoon flood crises.',
      'Advocated health hygiene and voluntary social responsibility through campus awareness seminars.',
    ],
    skills: ['Social Service', 'Community Outreach', 'Emergency Coordination', 'Empathy & Volunteerism'],
  },

  // 11. [স্টেম ও ডিজিটাল লিটারেসি ক্যাম্পেইন]
  {
    id: 'stem-school-outreach',
    title: 'STEM & Digital Literacy Youth Campaign',
    organization: 'Youth for Science & Technology Foundation',
    role: 'Guest Instructor & STEM Mentor',
    period: '2022 – 2023',
    category: 'volunteering',
    categoryLabel: 'Education Outreach',
    location: 'Gazipur & Dhaka, Bangladesh',
    status: 'Completed',
    badge: 'Education Advocate',
    coverImage: IMG.activityStemOutreachCover,
    images: [
      {
        src: IMG.activityStemOutreachPhoto1,
        caption: 'Interactive robotics and basic computer science workshop with high school students.',
      },
      {
        src: IMG.activityStemOutreachPhoto2,
        caption: 'Inspiring young minds with practical digital electronics and coding demos.',
      },
    ],
    summary: 'Empowered high school students with foundational programming and science awareness in underprivileged areas.',
    description: 'Passionate about bridging the digital divide in technical education. Conducted interactive workshops introducing high school students to creative coding, basic robotics, and internet safety.',
    whatWasDone: [
      'Delivered interactive Scratch and block-based programming lessons to over 150 secondary school students.',
      'Demonstrated fun real-world applications of sensors, microcontrollers, and artificial intelligence.',
      'Provided career orientation talks encouraging students to pursue higher studies in STEM disciplines.',
      'Distributed educational kits and study guides to participating schools.',
    ],
    skills: ['STEM Education', 'Youth Mentorship', 'Visual Programming', 'Science Communication'],
  },
];
