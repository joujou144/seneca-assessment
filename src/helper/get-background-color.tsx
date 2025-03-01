import { TQuizData } from "@/lib/data";

export const getBackgroundColor = (
  quizData: TQuizData,
  isAllCorrect: boolean,
  selectedAnswers: Record<number, string | null>
) => {
  const totalSelections: number = quizData.selections.length;
  const correctCount: number = quizData.selections.filter(
    (selection) => selectedAnswers[selection.id] === selection.correctAnswer
  ).length;

  const correctPercentage: number = (correctCount / totalSelections) * 100;

  if (isAllCorrect) return "seagreen-gradient";
  if (correctPercentage >= 75) return "yellow-gradient";
  if (correctPercentage >= 50) return "amber-gradient";
  return "sunset-gradient";
};
