// ============================================================
// PORTFOLIO CONFIGURATION
// ============================================================
// Update this file with your personal information.
// All components read from this config — no need to edit component files.
// ============================================================

const portfolioConfig = {
  // Personal
  name: "Burhan Faisal",
  shortName: "Burhan",
  role: "AI Engineer",
  tagline: "AI ENGINEER • MACHINE LEARNING • NLP",

  // Contact & Social — REPLACE THESE
  email: "kh.m.burhan@gmail.com",  
  github: "https://github.com/Burhan-Faisal",
  linkedin: "https://linkedin.com/in/burhanfaisal",

  // Profile Photo — place your photo in public/ and update the path
  // Use a square photo (e.g. 400x400) for best results
  profilePhoto: "/WhatsApp Image 2026-07-30 at 8.54.20 PM.jpeg",

  // Education — REPLACE THESE
  university: "University of Sargodha",
  degree: "Bachelor's in Computer Science",
  universityStart: "2024",
  universityEnd: "Expected 2028",

  // Hero
  heroBadge: "AI ENGINEER • MACHINE LEARNING • NLP",
  heroHeadline: "Building Intelligent Systems That Turn Data Into Decisions.",
  heroSubtext:
    "I build practical AI and machine learning systems — from data preparation and model training to evaluation, deployment, and production-ready applications.",

  // About
  aboutParagraphs: [
    "I'm a Computer Science student focused on becoming an AI Engineer. My work sits at the intersection of machine learning, natural language processing, data science, and software engineering.",
    "I enjoy taking problems through the complete pipeline — from raw data and feature engineering to model training, evaluation, and deployment. I believe the best AI systems are the ones that solve real problems reliably.",
    "I'm continuously learning and building, with a focus on bridging the gap between research and production-grade ML systems.",
  ],
  currentFocus: [
    "Machine Learning",
    "NLP",
    "LLMs",
    "Model Deployment",
    "MLOps",
    "Backend Engineering",
  ],

  // Terminal — Hero Visual
  terminalLines: [
    { text: "$ python train_model.py", type: "command" },
    { text: "", type: "blank" },
    { text: "Loading dataset...", type: "output" },
    { text: "Generating embeddings...", type: "output" },
    { text: "Training model...", type: "output" },
    { text: "Evaluating model...", type: "output" },
    { text: "", type: "blank" },
    { text: "Model Accuracy: 0.99%", type: "success" },
    { text: "Status: Production Ready", type: "success" },
  ],

  // Pipeline steps shown in hero visual
  pipelineSteps: [
    "Data",
    "Preprocessing",
    "Embeddings",
    "Model",
    "Evaluation",
    "Deployment",
  ],

  // Contact section
  contactHeadline: "Let's Build Something Intelligent.",
  contactDescription:
    "I'm always interested in discussing AI engineering, machine learning projects, research, and opportunities to build useful intelligent systems.",

  // Footer
  footerTagline: "AI Engineer • Machine Learning • NLP",
  copyright: `© ${new Date().getFullYear()} Burhan. Built with React & Tailwind CSS.`,
};

export default portfolioConfig;
