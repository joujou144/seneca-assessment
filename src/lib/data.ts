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
        options: ["cell wall", "ribosomes"],
        correctAnswer: "ribosomes",
      },
      {
        id: 102,
        options: ["cytoplasm", "chloroplast"],
        correctAnswer: "cytoplasm",
      },
      {
        id: 103,
        options: ["partially permeable membrane", "impermeable membrane"],
        correctAnswer: "partially permeable membrane",
      },
      {
        id: 104,
        options: ["cellulose", "mitochondria"],
        correctAnswer: "mitochondria",
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
        options: ["liverpool", "chelsea", "man utd"],
        correctAnswer: "chelsea",
      },
      {
        id: 202,
        options: ["serena williams", "naomi osaka"],
        correctAnswer: "naomi osaka",
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
        options: ["good pay", "bad pay"],
        correctAnswer: "good pay",
      },
      {
        id: 302,
        options: ["lot of meetings", "less meetings"],
        correctAnswer: "less meetings",
      },
      {
        id: 303,
        options: ["free coffee", "expensive coffee"],
        correctAnswer: "free coffee",
      },
      {
        id: 304,
        options: ["bear in office", "dog in office"],
        correctAnswer: "bear in office",
      },
    ],
  },
];
