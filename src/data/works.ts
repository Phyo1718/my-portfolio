import { Work } from '@/types';

export const works: Work[] = [
  {
    id: 1,
    title: 'Electronic Voting System',
    category: 'Web Application',
    thumbnailUrl: '/images/works/evoting.png',
    description: `Developed by a team of five, this secure e-voting system leverages linkable ring signatures and ring confidential transactions to guarantee voter anonymity, ensure ballot integrity, and enable verifiable, tamper-resistant voting.`,
    publishedAt: '22 August 2024',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    videos: ['/videos/projects/FYP-24-S2-19_Marketing_Video.mp4', '/videos/projects/FYP-24-S2-19_All_Functionalites.mp4'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'RingCT Integration',
      'Multi-factor Authentication (Fingerprint, FaceID, Secrity Key)',
      'Mocked Singpass Login Service',
      'Live Voter Count',
      'Candidate File Upload (Election Posters, Profile Pictures)',
      'Election Phase Management',
      'Announment Management',
      'Mobile View Support',
      'Location-Based Voting Restriction (IP-Based Country Filtering)',
      'Double Voting Detection',
    ],
    attributes: [
      {
        name: 'Start Date',
        value: '01 April 2024',
      },
      {
        name: 'End Date',
        value: '30 September 2024',
      },
      {
        name: 'Category',
        value: 'Web Application',
      },
      {
        name: 'Tech Stack',
        value: 'C++, Python, Django, PostgreSQL, Javascript, Tailwind CSS',
      },
      // {
      //   name: 'Current Version',
      //   value: '3.0.0',
      // },
      // {
      //   name: 'Lisence',
      //   value: 'MIT',
      // },
    ],
  },

  {
    id: 2,
    title: 'Cafe Staff Management System',
    category: 'Desktop Application',
    thumbnailUrl: '/images/works/cafestaff1.png',
    description: `A desktop application developed by a team of six to streamline café operations by enabling managers to manage staff and shift allocations while allowing employees to book their preferred work schedules efficiently.`,
    publishedAt: '01 December 2023',
    images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
    videos: ['/videos/projects/NoHugging-Demo.mp4'],
    previewUrl: 'https://pofology.bdlancers.com/',
    featureList: [
      'User Management (System Admin, Cafe Owner, Manager & Staff)',
      'Work Slot Management',
      'Work Slot Bidding System',
      'Work Assignment',
      'Security and Access Control',
      'User Friendly Interface',
    ],
    attributes: [
      {
        name: 'Start Date',
        value: '01 October 2023',
      },
      {
        name: 'End Date',
        value: '31 December 2023',
      },
      {
        name: 'Category',
        value: 'Desktop Application',
      },
      {
        name: 'Tech Stack',
        value: 'Python, Tkinter, BCE Framework',
      },
      // {
      //   name: 'Current Version',
      //   value: '3.0.0',
      // },
      // {
      //   name: 'Lisence',
      //   value: 'MIT',
      // },
    ],
  },
  // {
  //   id: 3,
  //   title: 'Digital Food Ordering System (Hawker Center)',
  //   category: 'App Development',
  //   thumbnailUrl: '/images/works/marketplace-website.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '28 February 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   videos: [''],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Start Date',
  //       value: '01 January 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '28 February 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'App Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Java',
  //     },
  //     // {
  //     //   name: 'Current Version',
  //     //   value: '3.0.0',
  //     // },
  //     // {
  //     //   name: 'Lisence',
  //     //   value: 'MIT',
  //     // },
  //   ],
  // },

  // {
  //   id: 4,
  //   title: 'Garments Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/garments-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },

  // {
  //   id: 5,
  //   title: 'POS System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/point-of-sale.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   title: 'Multi Vendor Ecommerce System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/ecommerce.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   title: 'Digital Ecommerce Website Design',
  //   category: 'UI/UX Design',
  //   thumbnailUrl: '/images/works/ecommerce-website-design.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   title: 'Digital Marketing App & Website',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/digital-marketing-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   title: 'Food Delivery System & Ecommerce',
  //   category: 'Mobile App',
  //   thumbnailUrl: '/images/works/food-delivery-app.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 10,
  //   title: 'Project Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/project-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 11,
  //   title: 'Learning Management System',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/learning-management-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
  // {
  //   id: 12,
  //   title: 'ERP System & Inventory Management',
  //   category: 'Web Development',
  //   thumbnailUrl: '/images/works/erp-system.png',
  //   description: `Cras id dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
  //   Vivamus laoreet. Praesent turpis. Nunc nulla.Praesent nec nisl a purus blandit viverra. Nullam dictum felis
  //   eu pede mollis pretium. Curabitur vestibulum aliquam leo. Sed libero. Praesent metus tellus, elementum eu,
  //   semper a, adipiscing nec Vestibulum ullamcorper mauris at ligula. Phasellus consectetuer vestibulum elit.
  //   Sed a libero. Vivamus consectetuer hendrerit lacus. Quisque ut nisi.Cum sociis natoque penatibus`,
  //   publishedAt: '01 July 2022',
  //   images: ['/images/works/work-01.png', '/images/works/work-02.png', '/images/works/work-03.png'],
  //   previewUrl: 'https://pofology.bdlancers.com/',
  //   featureList: [
  //     '100% Fluid Responsive – Fits any device perfectly',
  //     'Tested on real devices',
  //     'Flexible Layout',
  //     `
  //       Use our demo layout or create your own visually different experience using page Vcamp and feature-rich
  //       backend`,
  //     'Unlimited Sidebars',
  //     'Retina Optimized',
  //     'Advanced Admin Panel',
  //     'Demo Import, Content and Sliders',
  //     'Social Links',
  //     'Bottom Footer Widgets',
  //     'Clean &amp; Commented Code',
  //     'Advanced Typography',
  //     'Google Fonts – 600+ Font families available',
  //     'Custom Font Support',
  //     'Custom Page Templates',
  //     'Pixel Perfect Design',
  //     'Quick &amp; Easy Installation &amp; Setup',
  //     'Custom CSS Ready',
  //     'HTML5 &amp; CSS3',
  //     'Easy Customization With Variable Content Sections',
  //     'Custom Build Theme &amp; Page Options',
  //     'SEO Ready',
  //   ],
  //   attributes: [
  //     {
  //       name: 'Client',
  //       value: 'Pofology',
  //     },
  //     {
  //       name: 'Start Date',
  //       value: '01 July 2022',
  //     },
  //     {
  //       name: 'End Date',
  //       value: '01 October 2022',
  //     },
  //     {
  //       name: 'Category',
  //       value: 'Web Development',
  //     },
  //     {
  //       name: 'Skills',
  //       value: 'Typescript, Next.js & Tailwind CSS',
  //     },
  //     {
  //       name: 'Current Version',
  //       value: '3.0.0',
  //     },
  //     {
  //       name: 'Lisence',
  //       value: 'MIT',
  //     },
  //   ],
  // },
];
