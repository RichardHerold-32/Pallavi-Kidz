import { Branch } from "./types";

export const branches: Branch[] = [
  {
    slug: "pk-alwal",
    name: "Pallavi Kidz Alwal",
    city: "Alwal",
    address: "Plot No. 123, Road No. 5, Alwal, Secunderabad, Telangana 500010",
    phone: "+91 9876543210",
    email: "alwal@pallavikidz.com",
    mapUrl: "https://maps.google.com/?q=Alwal+Secunderabad",
    heroHeadline: "Where Little Minds Bloom",
    heroSubtext: "Nurturing young minds with love, care, and excellence in Alwal",
    about:
      "Pallavi Kidz Alwal is a premier preschool committed to providing a nurturing environment where children develop holistically. Our state-of-the-art facilities and experienced faculty ensure that every child receives personalized attention and care.",
    programs: [
      {
        id: "playgroup",
        name: "Playgroup",
        ageGroup: "1.5 - 2.5 years",
        description:
          "Introduction to structured learning through play-based activities",
        duration: "2 hours/day",
      },
      {
        id: "nursery",
        name: "Nursery",
        ageGroup: "2.5 - 3.5 years",
        description:
          "Building foundational skills through interactive learning",
        duration: "3 hours/day",
      },
      {
        id: "lkg",
        name: "Lower KG",
        ageGroup: "3.5 - 4.5 years",
        description:
          "Developing cognitive and social skills through structured curriculum",
        duration: "4 hours/day",
      },
      {
        id: "ukg",
        name: "Upper KG",
        ageGroup: "4.5 - 5.5 years",
        description: "Preparing for primary school with advanced learning modules",
        duration: "4 hours/day",
      },
    ],
    facilities: [
      {
        id: "classroom",
        name: "Smart Classrooms",
        description:
          "Air-conditioned classrooms equipped with interactive learning tools",
      },
      {
        id: "playground",
        name: "Safe Playground",
        description:
          "Outdoor play area with age-appropriate equipment and safety measures",
      },
      {
        id: "library",
        name: "Library",
        description: "Well-stocked library with age-appropriate books and resources",
      },
      {
        id: "activity",
        name: "Activity Room",
        description: "Dedicated space for arts, crafts, music, and dance activities",
      },
      {
        id: "cctv",
        name: "24/7 CCTV",
        description: "Complete surveillance for child safety and security",
      },
      {
        id: "transport",
        name: "Transport",
        description: "Safe and reliable transportation facility with trained staff",
      },
    ],
    faculty: [
      {
        id: "faculty1",
        name: "Mrs. Priya Sharma",
        role: "Principal",
        qualification: "M.Ed, B.Ed",
        experience: "15 years in early childhood education",
      },
      {
        id: "faculty2",
        name: "Ms. Anjali Reddy",
        role: "Lead Teacher",
        qualification: "B.Ed, Montessori Certified",
        experience: "10 years in preschool education",
      },
      {
        id: "faculty3",
        name: "Mrs. Kavitha Rao",
        role: "Senior Teacher",
        qualification: "B.Ed, NTT",
        experience: "8 years in early childhood education",
      },
    ],
    events: [
      {
        id: "event1",
        title: "Annual Day Celebration",
        date: "2024-03-15",
        description:
          "Join us for our grand annual day celebration featuring performances by our little stars",
      },
      {
        id: "event2",
        title: "Sports Day",
        date: "2024-02-20",
        description:
          "A fun-filled day of sports activities and competitions for all age groups",
      },
      {
        id: "event3",
        title: "Parent-Teacher Meeting",
        date: "2024-01-30",
        description:
          "Quarterly meeting to discuss your child's progress and development",
      },
    ],
    testimonials: [
      {
        id: "test1",
        parentName: "Mr. Rajesh Kumar",
        childName: "Aarav",
        content:
          "Pallavi Kidz Alwal has been wonderful for our son. The teachers are caring and the curriculum is excellent. We've seen tremendous growth in Aarav's confidence and learning abilities.",
        rating: 5,
      },
      {
        id: "test2",
        parentName: "Mrs. Sneha Patel",
        childName: "Diya",
        content:
          "The best decision we made for our daughter's early education. The facilities are top-notch and the staff is very professional and caring.",
        rating: 5,
      },
      {
        id: "test3",
        parentName: "Mr. Vikram Singh",
        childName: "Arjun",
        content:
          "Highly recommend Pallavi Kidz! Our child loves going to school every day. The learning environment is nurturing and engaging.",
        rating: 5,
      },
    ],
    gallery: [
      {
        id: "img1",
        url: "/images/placeholder-classroom.jpg",
        alt: "Classroom activities",
        category: "classroom",
      },
      {
        id: "img2",
        url: "/images/placeholder-playground.jpg",
        alt: "Children playing",
        category: "playground",
      },
      {
        id: "img3",
        url: "/images/placeholder-event.jpg",
        alt: "Annual day event",
        category: "events",
      },
    ],
    seo: {
      title: "Pallavi Kidz Alwal - Best Preschool in Alwal, Secunderabad",
      description:
        "Top-rated preschool in Alwal offering Playgroup, Nursery, LKG, and UKG programs. Experienced faculty, modern facilities, and child-centric curriculum.",
      keywords: [
        "preschool alwal",
        "kindergarten alwal",
        "best preschool secunderabad",
        "pallavi kidz alwal",
      ],
    },
  },
  {
    slug: "pk-kukatpally",
    name: "Pallavi Kidz Kukatpally",
    city: "Kukatpally",
    address: "H.No. 8-2-293/82/A/888, Road No. 45, Kukatpally, Hyderabad, Telangana 500072",
    phone: "+91 9876543211",
    email: "kukatpally@pallavikidz.com",
    mapUrl: "https://maps.google.com/?q=Kukatpally+Hyderabad",
    heroHeadline: "Building Bright Futures",
    heroSubtext: "Excellence in early childhood education in the heart of Kukatpally",
    about:
      "Pallavi Kidz Kukatpally stands as a beacon of quality preschool education. With our child-centric approach and modern teaching methodologies, we create a foundation for lifelong learning and success.",
    programs: [
      {
        id: "playgroup",
        name: "Playgroup",
        ageGroup: "1.5 - 2.5 years",
        description:
          "Gentle introduction to group learning and social interaction",
        duration: "2 hours/day",
      },
      {
        id: "nursery",
        name: "Nursery",
        ageGroup: "2.5 - 3.5 years",
        description:
          "Building basic skills through engaging activities and play",
        duration: "3 hours/day",
      },
      {
        id: "lkg",
        name: "Lower KG",
        ageGroup: "3.5 - 4.5 years",
        description:
          "Developing academic readiness through structured learning",
        duration: "4 hours/day",
      },
      {
        id: "ukg",
        name: "Upper KG",
        ageGroup: "4.5 - 5.5 years",
        description: "School readiness program with focus on core competencies",
        duration: "4 hours/day",
      },
    ],
    facilities: [
      {
        id: "classroom",
        name: "Smart Classrooms",
        description:
          "Modern classrooms with interactive boards and learning aids",
      },
      {
        id: "playground",
        name: "Safe Playground",
        description:
          "Spacious outdoor area with safety-certified play equipment",
      },
      {
        id: "library",
        name: "Library",
        description: "Extensive collection of books to foster reading habits",
      },
      {
        id: "activity",
        name: "Activity Room",
        description: "Multipurpose room for creative and physical activities",
      },
      {
        id: "cctv",
        name: "24/7 CCTV",
        description: "Complete campus surveillance for maximum security",
      },
      {
        id: "transport",
        name: "Transport",
        description: "Door-to-door transportation with GPS tracking",
      },
    ],
    faculty: [
      {
        id: "faculty1",
        name: "Mrs. Lakshmi Devi",
        role: "Principal",
        qualification: "M.Ed, B.Ed",
        experience: "18 years in preschool education",
      },
      {
        id: "faculty2",
        name: "Ms. Radha Krishna",
        role: "Lead Teacher",
        qualification: "B.Ed, Early Childhood Specialist",
        experience: "12 years in early education",
      },
      {
        id: "faculty3",
        name: "Mrs. Sumathi Nair",
        role: "Senior Teacher",
        qualification: "B.Ed, NTT",
        experience: "9 years in kindergarten education",
      },
    ],
    events: [
      {
        id: "event1",
        title: "Founder's Day",
        date: "2024-03-20",
        description:
          "Celebrating our journey with special performances and activities",
      },
      {
        id: "event2",
        title: "Science Exhibition",
        date: "2024-02-25",
        description:
          "Young scientists showcase their understanding through fun experiments",
      },
      {
        id: "event3",
        title: "Open House",
        date: "2024-01-15",
        description:
          "Visit our campus and meet our teachers, explore our facilities",
      },
    ],
    testimonials: [
      {
        id: "test1",
        parentName: "Mrs. Deepa Menon",
        childName: "Ishaan",
        content:
          "Exceptional preschool with dedicated teachers. Our son has flourished here both academically and socially. Highly recommended!",
        rating: 5,
      },
      {
        id: "test2",
        parentName: "Mr. Arun Khanna",
        childName: "Ananya",
        content:
          "The best preschool in Kukatpally! The curriculum is well-structured and the teachers genuinely care about each child's development.",
        rating: 5,
      },
      {
        id: "test3",
        parentName: "Mrs. Pooja Gupta",
        childName: "Rohan",
        content:
          "We are extremely satisfied with the quality of education and care provided. Our child is always excited to go to school.",
        rating: 5,
      },
    ],
    gallery: [
      {
        id: "img1",
        url: "/images/placeholder-learning.jpg",
        alt: "Interactive learning",
        category: "classroom",
      },
      {
        id: "img2",
        url: "/images/placeholder-activities.jpg",
        alt: "Creative activities",
        category: "activities",
      },
      {
        id: "img3",
        url: "/images/placeholder-celebration.jpg",
        alt: "Festival celebration",
        category: "events",
      },
    ],
    seo: {
      title: "Pallavi Kidz Kukatpally - Premier Preschool in Kukatpally, Hyderabad",
      description:
        "Award-winning preschool in Kukatpally with comprehensive programs for children aged 1.5 to 5.5 years. Modern facilities and experienced teachers.",
      keywords: [
        "preschool kukatpally",
        "kindergarten kukatpally",
        "best preschool hyderabad",
        "pallavi kidz kukatpally",
      ],
    },
  },
  {
    slug: "pk-kompally",
    name: "Pallavi Kidz Kompally",
    city: "Kompally",
    address: "Survey No. 456, Kompally Main Road, Kompally, Hyderabad, Telangana 500014",
    phone: "+91 9876543212",
    email: "kompally@pallavikidz.com",
    mapUrl: "https://maps.google.com/?q=Kompally+Hyderabad",
    heroHeadline: "Nurturing Tomorrow's Leaders",
    heroSubtext: "Quality preschool education with a perfect blend of learning and fun",
    about:
      "Pallavi Kidz Kompally offers a warm and stimulating environment where children thrive. Our innovative curriculum and caring educators ensure that each child develops essential skills while enjoying their learning journey.",
    programs: [
      {
        id: "playgroup",
        name: "Playgroup",
        ageGroup: "1.5 - 2.5 years",
        description:
          "Early learning through sensory play and exploration",
        duration: "2 hours/day",
      },
      {
        id: "nursery",
        name: "Nursery",
        ageGroup: "2.5 - 3.5 years",
        description:
          "Developing independence and basic learning concepts",
        duration: "3 hours/day",
      },
      {
        id: "lkg",
        name: "Lower KG",
        ageGroup: "3.5 - 4.5 years",
        description:
          "Comprehensive curriculum focusing on literacy and numeracy",
        duration: "4 hours/day",
      },
      {
        id: "ukg",
        name: "Upper KG",
        ageGroup: "4.5 - 5.5 years",
        description: "Advanced learning preparing children for formal schooling",
        duration: "4 hours/day",
      },
    ],
    facilities: [
      {
        id: "classroom",
        name: "Smart Classrooms",
        description:
          "Technology-enabled classrooms for enhanced learning experience",
      },
      {
        id: "playground",
        name: "Safe Playground",
        description:
          "Large outdoor play area with various play stations and safety features",
      },
      {
        id: "library",
        name: "Library",
        description: "Rich collection of books and learning materials",
      },
      {
        id: "activity",
        name: "Activity Room",
        description: "Dedicated space for arts, music, dance, and drama",
      },
      {
        id: "cctv",
        name: "24/7 CCTV",
        description: "Round-the-clock video surveillance for child safety",
      },
      {
        id: "transport",
        name: "Transport",
        description: "Secure transportation with trained attendants",
      },
    ],
    faculty: [
      {
        id: "faculty1",
        name: "Mrs. Swathi Krishnan",
        role: "Principal",
        qualification: "M.Ed, B.Ed",
        experience: "16 years in early childhood education",
      },
      {
        id: "faculty2",
        name: "Ms. Divya Srinivas",
        role: "Lead Teacher",
        qualification: "B.Ed, Child Psychology",
        experience: "11 years in preschool teaching",
      },
      {
        id: "faculty3",
        name: "Mrs. Nithya Ramesh",
        role: "Senior Teacher",
        qualification: "B.Ed, NTT",
        experience: "7 years in kindergarten education",
      },
    ],
    events: [
      {
        id: "event1",
        title: "Independence Day Celebration",
        date: "2024-08-15",
        description:
          "Patriotic celebrations with cultural programs and activities",
      },
      {
        id: "event2",
        title: "Art & Craft Exhibition",
        date: "2024-02-28",
        description:
          "Showcasing creative works by our talented young artists",
      },
      {
        id: "event3",
        title: "Grandparents Day",
        date: "2024-10-01",
        description:
          "Special day to honor and celebrate our students' grandparents",
      },
    ],
    testimonials: [
      {
        id: "test1",
        parentName: "Mr. Sanjay Verma",
        childName: "Saanvi",
        content:
          "Outstanding preschool! The teachers are nurturing and the environment is perfect for young children. Our daughter loves her school.",
        rating: 5,
      },
      {
        id: "test2",
        parentName: "Mrs. Meera Iyer",
        childName: "Advaith",
        content:
          "Pallavi Kidz Kompally exceeded our expectations. The holistic development approach and caring staff make it the best choice for early education.",
        rating: 5,
      },
      {
        id: "test3",
        parentName: "Mr. Karthik Reddy",
        childName: "Aadhya",
        content:
          "We are delighted with our experience. The school provides excellent learning opportunities and our child has grown tremendously.",
        rating: 5,
      },
    ],
    gallery: [
      {
        id: "img1",
        url: "/images/placeholder-kids.jpg",
        alt: "Happy children learning",
        category: "classroom",
      },
      {
        id: "img2",
        url: "/images/placeholder-outdoor.jpg",
        alt: "Outdoor activities",
        category: "playground",
      },
      {
        id: "img3",
        url: "/images/placeholder-art.jpg",
        alt: "Art and craft session",
        category: "activities",
      },
    ],
    seo: {
      title: "Pallavi Kidz Kompally - Best Preschool & Kindergarten in Kompally",
      description:
        "Leading preschool in Kompally offering quality early childhood education. Safe environment, experienced teachers, and holistic development programs.",
      keywords: [
        "preschool kompally",
        "kindergarten kompally",
        "best preschool near me",
        "pallavi kidz kompally",
      ],
    },
  },
];

export const getBranchBySlug = (slug: string): Branch | undefined => {
  return branches.find((branch) => branch.slug === slug);
};

export const getAllBranchSlugs = (): string[] => {
  return branches.map((branch) => branch.slug);
};

export const getBranchesByCity = (city: string): Branch[] => {
  return branches.filter((branch) => branch.city === city);
};

export const getAllCities = (): string[] => {
  return Array.from(new Set(branches.map((branch) => branch.city)));
};
