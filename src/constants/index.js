import { meta, shopify, starbucks, tesla, cg,bitcoin, blockchain } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
  
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
   
   
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    }
    
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "Capgemini",
        icon: cg,
        iconBg: "#accbe1",
        date: "May 2022 - Currnet",
        points: [
            "Create Microsites, RFP's and Websites using UI Development technologies HTML, CSS, Bootstrap, JS, jQuery, React, Node, MongoDB",
            "Responsive Web Animation and Interaction Design with skills in creating engaging and interactive user experiences through animations and interactions.",
            "Develop, Maintain and Deploy Chat bots on the cloud (Microsoft Azure). Design, deploy, and manage applications in cloud, leveraging various cloud services and architectures. Stay updated with latest trends and best practices in cloud computing.",
        ],
    },
    {
        title: "Cryptocurrencies Analyst",
        company_name: "ECA - Excellence Club Ambassadors, Paris",
        icon: bitcoin,
        iconBg: "#fbc3bc",
        date: "Jan 2022 - May 2022",
        points: [
            "Spot & Perpetual Futures Trading using Cryptocurrencies.",
            "Identifying and understanding digital assets that are profitable and hold long term value",
            "Investing in various form of value generation (Staking, Savings, Crypto loans dynamics, yield farming solutions, Mining pools",
            
        ],
    },
    {
        title: "Blockchain Developer",
        company_name: "NFT Challenge , Paris",
        icon: blockchain,
        iconBg: "#b7e4c7",
        date: "Oct 2021 - Mar 2022",
        points: [
            "Design, Develop and Code a Web3 enabled NFT marketplace using React Framework for the UI/UX, IPFS, Axios and integrating the website with the Ethereum Blockchain Network.",
            " Design ERC721 & ERC1155 Smart contract models for the NFT marketplace.",
        ],
    },
    {
        title: "Blockchain Engineer Intern",
        company_name: "ISEP, Paris",
        icon: blockchain,
        iconBg: "#a2d2ff",
        date: "Mar 2021 - Nov 2021",
        points: [
            " Understanding and implementing various distributed ledger technologies, testing smart contracts in the web3 ecosystem.",
            "Coded an Internet of Medical Things (IoMT) Application which ensures accuracy, privacy, transparency and confidentiality of the private medical data using the Hyperledger blockchain framework."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];