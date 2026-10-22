/**
 * ==============================================================================
 * 📸 সেন্ট্রাল ইমেজ মাস্টার ফাইল (Central Image Configuration File)
 * ==============================================================================
 * 
 * 💡 কীভাবে ছবি পরিবর্তন করবেন:
 * ১. নিচের যে সেকশনের ছবি পরিবর্তন করতে চান, সেই সেকশনে স্ক্রোল করুন।
 * ২. প্রতিটি ছবির উপরে বাংলায় স্পষ্ট কমেন্ট করা আছে:
 *    - ছবিটি কিসের ছবি
 *    - ওয়েবসাইটের কোন পেজে বা কোন কার্ডে দেখা যাবে
 * ৩. ছবির লিংক পরিবর্তনের নিয়ম:
 *    - অনলাইন ছবির লিংক বসাতে চাইলে: সরাসরি URL টি কোটেশনের ভেতরে দিন।
 *      (উদাহরণ: 'https://hostelytics.com/uploads/shouvo/my-photo.jpg')
 *    - আপনার কম্পিউটারের ছবি ব্যবহার করতে চাইলে: ছবিটি প্রজেক্টের 'public/images/' ফোল্ডারে রাখুন
 *      এবং এখানে পাথ দিন: '/images/my-photo.jpg'
 * 
 * ------------------------------------------------------------------------------
 * 📑 সেকশন তালিকা (Table of Contents):
 * ------------------------------------------------------------------------------
 * [১] 👤 সেকশন ১: প্রোফাইল ও হোমপেজ হিরো ছবি (Profile & Homepage Hero)
 * [২] 🔬 সেকশন ২: রিসার্চ, পাবলিকেশন্স ও গ্যালারি ছবি (Research & Scientific Figures)
 * [৩] 💻 সেকশন ৩: টেকনিক্যাল প্রজেক্টস ছবি (Projects & System Architectures)
 * [৪] 🌟 সেকশন ৪: অ্যাক্টিভিটিজ ও ইভেন্টস ছবি (Activities & Engagements)
 *      ৪.১ টিচিং ও প্র্যাকটিক্যাল ল্যাব সেশন (Teaching Assistant at CCCU)
 *      ৪.২ আন্তর্জাতিক রিসার্চ কনফারেন্স সেশন (Conference Attendance)
 *      ৪.৩ যমুনা টিভি কর্পোরেট জব এবং ইন্টার্ন ফেয়ারওয়েল (Corporate Tenure)
 *      ৪.৪ ইনভাইটেড গেস্ট লেকচার ও সেমিনার (CCCU Guest Lecture)
 *      ৪.৫ CCCU হ্যাকাবুরি হ্যাকাথন (CCCU Hackabury Hackathon)
 *      ৪.৬ আইইইই (IEEE) স্টুডেন্ট ব্রাঞ্চ
 *      ৪.৭ ইউনিভার্সিটি কম্পিউটার সোসাইটি ও আইটি ক্লাব
 *      ৪.৮ মেডিক্যাল ইমেজিং অ্যান্ড এআই রিসার্চ কালেক্টিভ
 *      ৪.৯ ন্যাশনাল টেক কার্নিভাল ও হ্যাকাথন
 *      ৪.১০ ভলান্টারি ব্লাড ডোনেশন ও হিউম্যানিটারিয়ান আউটরিচ
 *      ৪.১১ স্টেম ও ডিজিটাল লিটারেসি ক্যাম্পেইন
 * [৫] 🎓 সেকশন ৫: এডুকেশন ও ইউনিভার্সিটি লোগো (Education & Institutional Logos)
 * ==============================================================================
 */

export const IMG = {
  // ============================================================================
  // [১] 👤 সেকশন ১: প্রোফাইল ও হোমপেজ হিরো ছবি (Profile & Homepage Hero)
  // ============================================================================

  // [১.১] হোমপেজের মূল হিরো পোর্ট্রেট ছবি
  // কোথায় ব্যবহার হবে: হোমপেজের (Home page) প্রধান হিরো সেকশনে
  portrait: 'https://hostelytics.com/uploads/shouvo/13.jpeg',

  // [১.২] বিকল্প পোর্ট্রেট ছবি (Alternative Portrait)
  // কোথায় ব্যবহার হবে: ব্যাকআপ বা সেকেন্ডারি পোর্ট্রেট হিসেবে
  portraitAlt: 'https://hostelytics.com/uploads/shouvo/13.jpeg',

  // [১.৩] সোশ্যাল মিডিয়া ও এসইও শেয়ারিং ছবি (Open Graph / SEO Share Image - 1200x630)
  // কোথায় ব্যবহার হবে: ফেসবুক, লিংকডইন বা টুইটারে ওয়েবসাইট লিংক শেয়ার করলে যে ছবি দেখায়
  ogImage: 'https://picsum.photos/seed/nhs-og/1200/630',


  // ============================================================================
  // [২] 🔬 সেকশন ২: রিসার্চ, পাবলিকেশন্স ও গ্যালারি ছবি (Research & Figures)
  // ============================================================================

  // [২.১] প্যানক্রিয়াটিক সিটি স্ক্যান স্লাইস ছবি (Pancreatic CT Volumetric Slicing)
  // কোথায় ব্যবহার হবে: হোমপেজের Bento গ্রিড, Research পেজ এবং Gallery পেজ (আইটেম ১)
  pancreasCT: 'https://picsum.photos/seed/pancreas-ct/1400/900',

  // [২.২] ৩ডি ভলিউমেট্রিক সেগমেন্টেশন মডেল আউটপুট ছবি (3D Segmentation Rendering)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ২) এবং Research পেজ
  segmentation3D: 'https://picsum.photos/seed/seg3d/1400/900',

  // [২.৩] ভিশন ট্রান্সফরমার আর্কিটেকচার ডায়াগ্রাম (Vision Transformer Architecture)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ৩) এবং Publications পেজ
  vitArchitecture: 'https://picsum.photos/seed/vit-arch/1600/900',

  // [২.৪] Grad-CAM হিটম্যাপ এক্সপ্লেইনেবল এআই ছবি (Grad-CAM Activation Overlay)
  // কোথায় ব্যবহার হবে: Publications পেজ (Guava Leaf Paper) এবং Gallery পেজ (আইটেম ৪)
  gradcamOverlay: 'https://picsum.photos/seed/gradcam/1200/1200',

  // [২.৫] কনফিউশন ম্যাট্রিক্স চার্ট ছবি (Confusion Matrix Chart)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ৫)
  confusionMatrix: 'https://picsum.photos/seed/confusion/1200/1200',

  // [২.৬] ROC কার্ভ পারফরম্যান্স গ্রাফ ছবি (ROC Curve Chart)
  // কোথায় ব্যবহার হবে: Publications পেজ (Heart & Stroke Paper) এবং Gallery পেজ (আইটেম ৬)
  rocCurve: 'https://picsum.photos/seed/roc/1200/900',

  // [২.৭] এনসেম্বল লার্নিং আর্কিটেকচার ছবি (Ensemble Learning Architecture Diagram)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ৭)
  ensembleDiagram: 'https://picsum.photos/seed/ensemble/1600/900',

  // [২.৮] লিফ ডিজিজ ডেটাসেট ছবি (Leaf Disease Dataset Samples)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ৮)
  leafDataset: 'https://picsum.photos/seed/leaf-dataset/1400/900',

  // [২.৯] SkinNet সিএনএন আর্কিটেকচার ছবি (SkinNet CNN Architecture)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ৯)
  skinnetArch: 'https://picsum.photos/seed/skinnet/1600/900',

  // [২.১০] কনফারেন্স প্রেজেন্টেশন ও রিসার্চ টক ছবি (Conference Presentation Photo)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ১০: Academic Conference Presentation)
  conferenceTalk: 'https://hostelytics.com/uploads/shouvo/03.jpeg',

  // [২.১১] গেস্ট লেকচার ও ক্লাস সেশনের ছবি (Guest Lecture Event Photo)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ১১: University Guest Lecture & Teaching)
  guestLecture: 'https://hostelytics.com/uploads/shouvo/18.jpeg',

  // [২.১২] CCNA সার্টিফিকেট ও ক্রেডেনশিয়াল ছবি (CCNA Certificate Photo)
  // কোথায় ব্যবহার হবে: Gallery পেজ (আইটেম ১২)
  ccnaCertificate: 'https://picsum.photos/seed/ccna/1200/850',


  // ============================================================================
  // [৩] 💻 সেকশন ৩: টেকনিক্যাল প্রজেক্টস ছবি (Projects & System Architectures)
  // ============================================================================

  // [৩.১] NewsPortal CMS প্রজেক্ট স্ক্রিনশট (NewsPortal Project)
  // কোথায় ব্যবহার হবে: Projects পেজের "NewsPortal" কার্ডে
  mongoNewsPortal: 'https://picsum.photos/seed/mongodb/1400/900',

  // [৩.২] বিগ ডাটা রুট অপটিমাইজেশন প্রজেক্ট ছবি (Route Optimization Project)
  // কোথায় ব্যবহার হবে: Projects পেজের "Big Data for Route Optimization" কার্ডে
  routeOptimise: 'https://picsum.photos/seed/route/1400/900',

  // [৩.৩] অফিস নেটওয়ার্ক আর্কিটেকচার প্রজেক্ট ছবি (Office Network Topology)
  // কোথায় ব্যবহার হবে: Projects পেজের "Re-designing Office Network" কার্ডে
  officeNetwork: 'https://picsum.photos/seed/network/1400/900',

  // [৩.৪] ডাইনামিক কিউআর কোড সিস্টেম প্রজেক্ট ছবি (Dynamic QR Code System)
  // কোথায় ব্যবহার হবে: Projects পেজের "Dynamic QR Code System" কার্ডে
  qrSystem: 'https://picsum.photos/seed/qrcode/1400/900',


  // ============================================================================
  // [৪] 🌟 সেকশন ৪: অ্যাক্টিভিটিজ ও ইভেন্টস ছবি (Activities & Engagements)
  // ============================================================================

  // ----------------------------------------------------------------------------
  // ৪.১ টিচিং ও প্র্যাকটিক্যাল ল্যাব অ্যাক্টিভিটিজ (CCCU Teaching Assistant)
  // কোথায় ব্যবহার হবে: Activities পেজের "Undergraduate Teaching & Practical Lab Instruction" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.১.কভার] কার্ডের কভার ছবি:
  activityTeachingCover: 'https://hostelytics.com/uploads/shouvo/02.png',
  // [৪.১.গ্যালারি-১] মডালের প্রথম ছবি:
  activityTeachingPhoto1: 'https://hostelytics.com/uploads/shouvo/02.png',
  // [৪.১.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityTeachingPhoto2: 'https://hostelytics.com/uploads/shouvo/12.jpeg',

  // ----------------------------------------------------------------------------
  // ৪.২ আন্তর্জাতিক রিসার্চ কনফারেন্স সেশন (International Conference Attendance)
  // কোথায় ব্যবহার হবে: Activities পেজের "International Academic Research Conference" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.২.কভার] কার্ডের কভার ছবি:
  activityConferenceCover: 'https://hostelytics.com/uploads/shouvo/03.jpeg',
  // [৪.২.গ্যালারি-১] মডালের প্রথম ছবি:
  activityConferencePhoto1: 'https://hostelytics.com/uploads/shouvo/03.jpeg',
  // [৪.২.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityConferencePhoto2: 'https://hostelytics.com/uploads/shouvo/04.jpeg',
  // [৪.২.গ্যালারি-৩] মডালের তৃতীয় ছবি:
  activityConferencePhoto3: 'https://hostelytics.com/uploads/shouvo/06.jpeg',
  // [৪.২.গ্যালারি-৪] মডালের চতুর্থ ছবি:
  activityConferencePhoto4: 'https://hostelytics.com/uploads/shouvo/05.jpeg',

  // ----------------------------------------------------------------------------
  // ৪.৩ যমুনা টিভি কর্পোরেট জব এবং ইন্টার্ন ফেয়ারওয়েল (Corporate Tenure - Jamuna TV)
  // কোথায় ব্যবহার হবে: Activities পেজের "Corporate Network Engineering Tenure & Farewell" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৩.কভার] কার্ডের কভার ছবি:
  activityCorporateCover: 'https://hostelytics.com/uploads/shouvo/08.jpeg',
  // [৪.৩.গ্যালারি-১] মডালের প্রথম ছবি:
  activityCorporatePhoto1: 'https://hostelytics.com/uploads/shouvo/08.jpeg',
  // [৪.৩.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityCorporatePhoto2: 'https://hostelytics.com/uploads/shouvo/09.jpeg',
  // [৪.৩.গ্যালারি-৩] মডালের তৃতীয় ছবি:
  activityCorporatePhoto3: 'https://hostelytics.com/uploads/shouvo/10.jpeg',

  // ----------------------------------------------------------------------------
  // ৪.৪ ইনভাইটেড গেস্ট লেকচার ও সেমিনার (CCCU Guest Lecture)
  // কোথায় ব্যবহার হবে: Activities পেজের "Invited Guest Lecture: AI, Data Intelligence" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৪.কভার] কার্ডের কভার ছবি:
  activityGuestLectureCover: 'https://hostelytics.com/uploads/shouvo/18.jpeg',
  // [৪.৪.গ্যালারি-১] মডালের প্রথম ছবি:
  activityGuestLecturePhoto1: 'https://hostelytics.com/uploads/shouvo/18.jpeg',
  // [৪.৪.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityGuestLecturePhoto2: 'https://hostelytics.com/uploads/shouvo/02.png',

  // ----------------------------------------------------------------------------
  // ৪.৫ CCCU হ্যাকাবুরি হ্যাকাথন (CCCU Hackabury Hackathon)
  // কোথায় ব্যবহার হবে: Activities পেজের "CCCU Hackabury Hackathon" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৫.কভার] কার্ডের কভার ছবি:
  activityHackaburyCover: 'https://hostelytics.com/uploads/shouvo/14.jpeg',
  // [৪.৫.গ্যালারি-১] মডালের প্রথম ছবি:
  activityHackaburyPhoto1: 'https://hostelytics.com/uploads/shouvo/14.jpeg',
  // [৪.৫.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityHackaburyPhoto2: 'https://hostelytics.com/uploads/shouvo/15.jpeg',
  // [৪.৫.গ্যালারি-৩] মডালের তৃতীয় ছবি:
  activityHackaburyPhoto3: 'https://hostelytics.com/uploads/shouvo/16.jpeg',
  // [৪.৫.গ্যালারি-৪] মডালের চতুর্থ ছবি:
  activityHackaburyPhoto4: 'https://hostelytics.com/uploads/shouvo/17.jpeg',

  // ----------------------------------------------------------------------------
  // ৪.৬ আইইইই (IEEE) স্টুডেন্ট ব্রাঞ্চ
  // কোথায় ব্যবহার হবে: Activities পেজের "Executive Committee Member & Tech Lead" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৬.কভার] কার্ডের কভার ছবি:
  activityIeeeCover: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  // [৪.৬.গ্যালারি-১] মডালের প্রথম ছবি:
  activityIeeePhoto1: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
  // [৪.৬.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityIeeePhoto2: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=1200&q=80',
  // [৪.৬.গ্যালারি-৩] মডালের তৃতীয় ছবি:
  activityIeeePhoto3: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=80',

  // ----------------------------------------------------------------------------
  // ৪.৭ ইউনিভার্সিটি কম্পিউটার সোসাইটি ও আইটি ক্লাব
  // কোথায় ব্যবহার হবে: Activities পেজের "Lead Workshop Instructor & Tech Mentor" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৭.কভার] কার্ডের কভার ছবি:
  activityCompSocietyCover: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
  // [৪.৭.গ্যালারি-১] মডালের প্রথম ছবি:
  activityCompSocietyPhoto1: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80',
  // [৪.৭.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityCompSocietyPhoto2: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80',

  // ----------------------------------------------------------------------------
  // ৪.৮ মেডিক্যাল ইমেজিং অ্যান্ড এআই রিসার্চ কালেক্টিভ
  // কোথায় ব্যবহার হবে: Activities পেজের "Research Study Group Coordinator" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৮.কভার] কার্ডের কভার ছবি:
  activityMedResearchCover: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  // [৪.৮.গ্যালারি-১] মডালের প্রথম ছবি:
  activityMedResearchPhoto1: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80',
  // [৪.৮.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityMedResearchPhoto2: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80',

  // ----------------------------------------------------------------------------
  // ৪.৯ ন্যাশনাল টেক কার্নিভাল ও হ্যাকাথন
  // কোথায় ব্যবহার হবে: Activities পেজের "Head of Logistics & Event Management" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.৯.কভার] কার্ডের কভার ছবি:
  activityTechCarnivalCover: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
  // [৪.৯.গ্যালারি-১] মডালের প্রথম ছবি:
  activityTechCarnivalPhoto1: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80',
  // [৪.৯.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityTechCarnivalPhoto2: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80',

  // ----------------------------------------------------------------------------
  // ৪.১০ ভলান্টারি ব্লাড ডোনেশন ও হিউম্যানিটারিয়ান আউটরিচ
  // কোথায় ব্যবহার হবে: Activities পেজের "Voluntary Blood Donation & Outreach" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.১০.কভার] কার্ডের কভার ছবি:
  activityBloodDriveCover: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=80',
  // [৪.১০.গ্যালারি-১] মডালের প্রথম ছবি:
  activityBloodDrivePhoto1: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=1200&q=80',
  // [৪.১০.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityBloodDrivePhoto2: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',

  // ----------------------------------------------------------------------------
  // ৪.১১ স্টেম ও ডিজিটাল লিটারেসি ক্যাম্পেইন
  // কোথায় ব্যবহার হবে: Activities পেজের "STEM & Digital Literacy Youth Campaign" কার্ডে
  // ----------------------------------------------------------------------------
  // [৪.১১.কভার] কার্ডের কভার ছবি:
  activityStemOutreachCover: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
  // [৪.১১.গ্যালারি-১] মডালের প্রথম ছবি:
  activityStemOutreachPhoto1: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80',
  // [৪.১১.গ্যালারি-২] মডালের দ্বিতীয় ছবি:
  activityStemOutreachPhoto2: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=1200&q=80',


  // ============================================================================
  // [৫] 🎓 সেকশন ৫: এডুকেশন ও ইউনিভার্সিটি লোগো (Education & Institutional Logos)
  // ============================================================================

  // [৫.১] Canterbury Christ Church University (CCCU) অফিসিয়াল লোগো ইউআরএল
  // কোথায় ব্যবহার হবে: Education পেজের CCCU কার্ডে এবং হোমপেজে
  cccuLogo: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Shield_of_Christ_Church_University_Canterbury.svg',

  // [৫.২] IUBAT ইউনিভার্সিটি অফিসিয়াল লোগো ইউআরএল
  // কোথায় ব্যবহার হবে: Education পেজের IUBAT কার্ডে
  iubatLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/IUBAT2.png',
} as const;
