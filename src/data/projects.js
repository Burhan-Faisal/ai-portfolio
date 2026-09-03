const projects = [
  {
    id: 1,
    title: "Stock Market Drawdown Prediction",
    description:
      "Machine learning system designed to predict the eventual maximum depth of stock market drawdowns using historical market behavior and engineered financial features.",
    approach:
      "Engineered temporal and statistical features from historical price data. Trained and compared multiple regression models with cross-validation and hyperparameter tuning.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "Feature Engineering",
    ],
    metrics: [
      { label: "R² Score", value: "{REPLACE}" },
      { label: "RMSE", value: "{REPLACE}" },
    ],
    pipeline: [
      "Historical Data",
      "Feature Engineering",
      "Model Training",
      "Evaluation",
      "Prediction",
    ],
    github: "YOUR_GITHUB_REPO_URL",
    demo: null,
    status: "completed",
  },
  {
    id: 2,
    title: "News Classification with NLP",
    description:
      "Natural language processing pipeline for classifying financial news titles using transformer-based text representations and machine learning models.",
    approach:
      "Used BERT and Sentence Transformers to generate text embeddings from news headlines. Trained classifiers on the embeddings with systematic evaluation.",
    technologies: [
      "Python",
      "BERT",
      "Sentence Transformers",
      "Scikit-learn",
      "NLP",
    ],
    metrics: [
      { label: "Accuracy", value: "{REPLACE}" },
      { label: "F1 Score", value: "{REPLACE}" },
    ],
    pipeline: null,
    github: "YOUR_GITHUB_REPO_URL",
    demo: null,
    status: "completed",
  },
  {
    id: 3,
    title: "Financial News + Market Movement Prediction",
    description:
      "An end-to-end pipeline combining financial news timestamps with market data to investigate short-term market movement following news events.",
    approach:
      "Aligned news publication timestamps with minute-level market data. Built features combining text signals and market indicators for movement prediction.",
    technologies: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "NLP",
      "Time Series",
    ],
    metrics: [
      { label: "Accuracy", value: "{REPLACE}" },
      { label: "AUC", value: "{REPLACE}" },
    ],
    pipeline: null,
    github: "YOUR_GITHUB_REPO_URL",
    demo: null,
    status: "completed",
  },
  {
    id: 4,
    title: "AI Application / LLM Project",
    description:
      "A production-oriented AI application demonstrating LLM integration, retrieval, inference, and deployment.",
    approach:
      "Placeholder — update with your actual technical approach once the project is complete.",
    technologies: ["Python", "LLMs", "FastAPI", "Docker", "RAG"],
    metrics: [],
    pipeline: null,
    github: "#",
    demo: null,
    status: "coming-soon",
  },
];

export default projects;
