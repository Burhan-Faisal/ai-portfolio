import {
  Code2,
  Brain,
  Cpu,
  MessageSquareText,
  Database,
  Rocket,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "C++", "JavaScript"],
  },
  {
    title: "Machine Learning",
    icon: Brain,
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Random Forest",
      "Gradient Boosting",
      "Feature Engineering",
      "Model Evaluation",
      "Hyperparameter Tuning",
    ],
  },
  {
    title: "Deep Learning / AI",
    icon: Cpu,
    skills: [
      "PyTorch",
      "Transformers",
      "BERT",
      "Sentence Transformers",
      "LLMs",
      "Embeddings",
      "Attention Mechanisms",
    ],
  },
  {
    title: "NLP",
    icon: MessageSquareText,
    skills: [
      "Text Classification",
      "Text Embeddings",
      "Tokenization",
      "Sentiment Analysis",
      "NER",
      "Text Summarization",
      "TF-IDF",
    ],
  },
  {
    title: "Data",
    icon: Database,
    skills: [
      "Pandas",
      "NumPy",
      "SQL",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Feature Engineering",
    ],
  },
  {
    title: "Engineering / Deployment",
    icon: Rocket,
    skills: [
      "Git",
      "GitHub",
      "Flask / FastAPI",
      "REST APIs",
      "Docker",
      "Linux",
      "Model Serving",
    ],
  },
];

export default skillCategories;
