import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Ho Viet",
  lastName: "Duc Luong",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science Lecturer, Researcher",
  avatar: "/images/avatar.png",
  email: "luonghvd@soict.hust.edu.vn",
  location: "Asia/Ho_Chi_Minh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  locationreal: "Hanoi, Vietnam",     // For internal time functions
  languages: ["English", "Vietnamese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Donate to {person.lastName}'s Work</>,
  description: (
    <>
      If you appreciate my work and want to support my research, consider donating.
      <br />
      Your contributions will help me continue my research and share my findings with the community.  
      <br />
      Through Internet banking at BIDV, account number 0853788995.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Scholar",
    icon: "scholar",
    link: "https://scholar.google.com/citations?user=ljqNhTYAAAAJ&hl=en&oi=ao",
  },
  {
    name: "Orcid",
    icon: "orcid",
    link: "https://orcid.org/0000-0001-6690-5222",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/%C4%91%E1%BB%A9c-l%C6%B0%C6%A1ng-h%E1%BB%93-vi%E1%BA%BFt-7660742b9/",
  },
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/luonghvd810",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Struggling means you are learning</>,
  featured: {
    display: false,
    title: <>Luong Ho</>,
    href: "",
  },
  subline: (
    <>
      I'm {person.name}, currently a Junior Lecturer at SoICT, HUST, focusing on AI-powered optimization.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.locationreal}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Ho Viet Duc Luong is a junior lecturer and a Master student in Data Science at SoICT, HUST. He received the BPA in the Thesis Defense Committee Optimization 2024 at SoICT, the Second Prize in VMO 2020, and a Gold Medal in the National Mathematical Olympiad for Students 2018. His research interests include evolutionary computation and AI applications in optimization for wireless communications and autonomous systems.
        </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Computer Science Department, SoICT, HUST",
        timeframe: "2025 – Present",
        role: "Junior Lecturer",
        achievements: [
          <>A lecturer in training.</>,
        ],
        images: [],
      },
      {
        company: "Computational Intelligence and Optimization Lab, International Research Center on Artificial Intelligence (BKAI), SoICT, HUST",
        timeframe: "2022 – Present",
        role: "Research Assistant & Researcher",
        achievements: [
          <>Optimization algorithms theory and applications.</>,
          <>My instructor: <a href="https://users.soict.hust.edu.vn/binhht"> Prof. Huynh Thi Thanh Binh</a></>
        ],
        images: [],
      },
      {
        company: "Modern Computer Networks and Communications Technology Lab, HUST",
        timeframe: "2023 – Present",
        role: "Research Assistant & Researcher",
        achievements: [
          <>Algorithms for resource management in beyond-5G communication systems.</>,
          <>My instructor: <a href="https://sites.google.com/site/chientrinhvn/home"> Dr. Trinh Van Chien</a></>
        ],
        images: [],
      },
    ],
  },   
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Hanoi University of Science and Technology",
        description: <>Master of Data Science (Elitech Program), 2024 – Present. <br /> I am currently supported by the Master, PhD Scholarship Programme
of Vingroup Innovation Foundation (VINIF), code VINIF.2024.ThS.32. </>,
      },
      {
        name: "Hanoi University of Science and Technology",
        description: <>Bachelor of Computer Science (Talent Program), 2020 – 2024.</>,
      },
      {
        name: "Phan Boi Chau High School for the Gifted",
        description: <>Mathematics specialized class, 2017 – 2020.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Courses I am teaching at HUST",
    skills: [
      {
        title: "Applied Algorithms",
        description: <>Introduction to algorithms and data structures, with a focus on practical applications and problem-solving techniques.</>,

        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Object-Oriented Programming",
        description: <>Introduction to object-oriented programming concepts, including classes, inheritance, and polymorphism.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "C/C++ Programming Technique",
        description: <>Introduction to programming techniques in C/C++ languages.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Database Lab",
        description: <>Practice with relational DBMS.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Introduction to Programming",
        description: <>Introduction to programming concepts, including variables, control structures, and basic algorithms.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Books ",
  title: "Books that I published...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Publications",
  title: `Publications – ${person.name}`,
  description: `List of research papers and conference publications by ${person.name}`,
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/30soict-hopxuong.JPEG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Professor2025.PNG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/camranh2025.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/soict2025.JPEG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/SVNCKH2025.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/30soictprofBinh.JPEG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/DamCuoiThayChien.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sinno-bd23.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/haidilao.PNG",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/asiaccs1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/sinno.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/BPAThanksParty.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/MomGrandma.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/twochildren.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/KienGraduation.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/graduation.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/nhoque.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/VinhandMsLanThanh.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Taxua.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cupPhan.JPG",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ChauinSonLa.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Champion.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
