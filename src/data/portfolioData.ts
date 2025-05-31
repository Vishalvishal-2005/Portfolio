import { EducationItem, ProjectItem, SkillCategory, AchievementItem } from '../types';

export const personalInfo = {
  name: "Vishal P",
  title: "AI & Data Science Student",
  location: "Madurai, Tamil Nadu, India",
  email: "vishal.p.prof@gmail.com",
  phone: "+91 8148374326",
  linkedin: "https://linkedin.com/in/vishal-p-5026a8312/",
  github: "https://github.com/Vishalvishal-2005",
  leetcode: "https://leetcode.com/u/VISHALP2005",
  geeksforgeeks: "https://geeksforgeeks.org/user/727822t4465/",
  summary: "I am passionate about leveraging technology to create impactful and efficient systems, with a particular interest in machine learning, data-driven insights, and problem-solving.",
  profileImage: "/WhatsApp Image 2025-05-31 at 17.40.28_6f1bf0f2.jpg"
};

export const education: EducationItem[] = [
  {
    institution: "Sri Krishna College of Technology",
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence and Data Science",
    location: "Coimbatore",
    startDate: "10/2022",
    endDate: "Present",
  },
  {
    institution: "M.L.W.A. Hr Sec School",
    degree: "Higher Secondary",
    field: "Computer Science",
    location: "Madurai",
    startDate: "06/2020",
    endDate: "04/2022",
    score: "89.66%"
  },
  {
    institution: "M.L.W.A. Hr Sec School",
    degree: "Secondary",
    field: "",
    location: "Madurai",
    startDate: "06/2018",
    endDate: "04/2020",
    score: "85.7%"
  }
];

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", proficiency: 85 },
      { name: "Java", proficiency: 75 },
      { name: "C++", proficiency: 80 },
      { name: "JavaScript", proficiency: 70 },
    ]
  },
  {
    category: "Web Technologies",
    items: [
      { name: "React.js", proficiency: 80 },
      { name: "Spring Boot", proficiency: 75 },
      { name: "MySQL", proficiency: 70 },
      { name: "FastAPI", proficiency: 65 },
      { name: "HTML/CSS", proficiency: 85 },
    ]
  },
  {
    category: "Core Concepts",
    items: [
      { name: "Data Structures", proficiency: 90 },
      { name: "Algorithms", proficiency: 85 },
      { name: "OOP", proficiency: 80 },
      { name: "Machine Learning", proficiency: 75 },
    ]
  },
  {
    category: "Data Science",
    items: [
      { name: "Data Visualization", proficiency: 85 },
      { name: "Data Analysis", proficiency: 80 },
      { name: "Machine Learning", proficiency: 75 },
      { name: "Predictive Modeling", proficiency: 70 },
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: "Optimal Route Planner for College Events",
    description: "Developed an intelligent system using Graph algorithms (Dijkstra, TSP) to help students plan optimal routes between college events. Implemented real-time pathfinding with time and location constraints, reducing travel time by 40%.",
    technologies: ["React.js", "Spring Boot", "Graph Algorithms", "MySQL"],
    link: "https://github.com/your-username/route-planner",
    date: "03/2024",
    type: "WebApp",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
  },
  {
    title: "Museum Ticket Booking Chatbot",
    description: "Built an intelligent chatbot using Dialogflow for National Museums of India, enabling voice and text-based ticket booking. Reduced peak-time queues by 60% through automated bookings and intelligent queue management.",
    technologies: ["Dialogflow", "React.js", "Node.js", "Natural Language Processing"],
    link: "https://github.com/your-username/museum-chatbot",
    date: "03/2024",
    type: "AI/ML",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Hall Booking Management System",
    description: "Developed a full-stack system for hall bookings with real-time user authentication and database integration. Integrated a chatbot assistant using Dialogflow to enhance booking process automation.",
    technologies: ["React.js", "Spring Boot", "MySQL", "Dialogflow"],
    link: "https://github.com/Vishalvishal-2005/App_Developement",
    date: "02/2024",
    type: "WebApp",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
  },
  {
    title: "Sustainability Predictive Model",
    description: "Built during a 40-hour hackathon (Hack Sprint) using machine learning to forecast company sustainability metrics. Applied linear regression on historical datasets and visualized insights using Matplotlib frontend charts.",
    technologies: ["React.js", "ML", "Pandas", "Spring Boot"],
    link: "https://novapredicts.netlify.app/ui",
    date: "02/2024",
    type: "AI/ML",
    image: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg"
  }
];

export const achievements: AchievementItem[] = [
  {
    title: "GDSC Ideathon - 1st Place",
    organization: "PSG iTech",
    description: "Won for developing a mobile app to optimize waste management and transportation routes.",
    date: "03/2024"
  },
  {
    title: "Hack Sprint Hackathon - 3rd Place",
    organization: "I am Neo Company",
    description: "Built a machine learning-powered sustainability predictor using React, Spring Boot, and Linear Regression during a 40-hour hackathon.",
    date: "10/2024"
  }
];

export const certifications = [
  "Excel Tools - Infosys Springboard",
  "Java",
  "Command Line in Linux - Coursera",
  "Facial Recognition - Udemy",
  "SQL",
  "Generative AI in Copilot - Microsoft",
  "Approaches to Cognitive Learning",
  "MongoDB Basics",
  "Data Visualizations - Infosys Springboard"
];

export const interests = [
  "Problem Solving",
  "Working Out",
  "Maintaining an Active Lifestyle"
];