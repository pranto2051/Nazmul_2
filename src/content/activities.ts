/**
 * ==============================================================================
 * 🌟 অ্যাক্টিভিটি কনফিগারেশন ফাইল (Activities & Engagements Data)
 * ==============================================================================
 * কীভাবে নতুন অ্যাক্টিভিটি যোগ করবেন বা এডিট করবেন:
 * ১. নিচের activities অ্যারে-তে প্রতিটি অবজেক্ট এক একটি অ্যাক্টিভিটি কার্ড নির্দেশ করে।
 * ২. নিজের নতুন অ্যাক্টিভিটি যোগ করতে অবজেক্টটি কপি করে পেস্ট করুন এবং তথ্য দিন।
 * ৩. ছবি পরিবর্তনের জন্য 'coverImage' ও 'images' অ্যারেতে ছবির লিঙ্ক বা লোকাল পাথ দিন।
 * ৪. যে কোনো অ্যাক্টিভিটি কার্ডে ক্লিক করলে বিস্তারিত পপআপ মডালে সব তথ্য প্রদর্শিত হবে।
 * ==============================================================================
 */

import type { ActivityItem } from '@/types';

export const activities: ActivityItem[] = [
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
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
        caption: 'IEEE Annual Technical Symposium and paper presentation session.',
      },
      {
        src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
        caption: 'Organizing committee meeting and workshop coordination.',
      },
      {
        src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
        caption: 'Hands-on programming bootcamp for first-year undergraduate students.',
      },
      {
        src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
        caption: 'Bi-weekly medical imaging journal club meeting discussing 3D CT segmentation papers.',
      },
      {
        src: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
        caption: 'Grand opening ceremony of the National Collegiate Tech Carnival.',
      },
      {
        src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=80',
        caption: 'Annual voluntary blood donation drive organized on university campus.',
      },
      {
        src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',
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
    coverImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
        caption: 'Interactive robotics and basic computer science workshop with high school students.',
      },
      {
        src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80',
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
