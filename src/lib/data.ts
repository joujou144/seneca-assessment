export type TAnswerSelection = {
  id: number;
  options: string[];
  correctAnswer: string;
};

export interface TQuizData {
  id: number;
  category: string;
  question: string;
  selections: TAnswerSelection[];
}

export const quizData: TQuizData[] = [
  {
    id: 1,
    category: "biology",
    question: "An animal cell contains:",
    selections: [
      {
        id: 101,
        options: ["Cell wall", "Ribosomes"],
        correctAnswer: "Ribosomes",
      },
      {
        id: 102,
        options: ["Cytoplasm", "Chloroplast"],
        correctAnswer: "Cytoplasm",
      },
      {
        id: 103,
        options: ["Partially permeable membrane", "Impermeable membrane"],
        correctAnswer: "Partially permeable membrane",
      },
      {
        id: 104,
        options: ["Cellulose", "Mitochondria"],
        correctAnswer: "Mitochondria",
      },
    ],
  },
  {
    id: 2,
    category: "sports",
    question: "Which are the best sports people & teams?",
    selections: [
      {
        id: 201,
        options: ["Liverpool", "Chelsea", "Man Utd"],
        correctAnswer: "Chelsea",
      },
      {
        id: 202,
        options: ["Serena Williams", "Naomi Osaka"],
        correctAnswer: "Naomi Osaka",
      },
    ],
  },
  {
    id: 3,
    category: "general",
    question: "What are the ideal conditions inside an office?",
    selections: [
      {
        id: 301,
        options: ["Good pay", "Bad pay"],
        correctAnswer: "Good pay",
      },
      {
        id: 302,
        options: ["Lot of meetings", "Less meetings"],
        correctAnswer: "Less meetings",
      },
      {
        id: 303,
        options: ["Free coffee", "Expensive coffee"],
        correctAnswer: "Free coffee",
      },
      {
        id: 304,
        options: ["Bear in office", "Dog in office"],
        correctAnswer: "Bear in office",
      },
    ],
  },
];
