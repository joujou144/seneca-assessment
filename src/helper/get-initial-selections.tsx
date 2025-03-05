import { TQuizData } from "@/lib/data";

// For pre-selected answers on render
export const getInitialSelections = (quizData: TQuizData) => {
  const initialState: Record<number, string | null> = {};

  const selectionsArray = [...quizData.selections];
  const totalSelections: number = selectionsArray.length;
  // To guarantee that selections are less than 50% correct
  const maxCorrectAllowed: number = Math.floor(totalSelections / 2) - 1;

  // Randomly select incorrect options
  selectionsArray.sort(() => Math.random() * 0.5);

  let correctCount = 0;

  selectionsArray.forEach((selection) => {
    if (correctCount < maxCorrectAllowed) {
      // assign one with correct answer
      initialState[selection.id] = selection.correctAnswer;
      correctCount++;
    } else {
      const incorrectOption =
        selection.options.find(
          (option) => option !== selection.correctAnswer
        ) || selection.options[0];
      initialState[selection.id] = incorrectOption;
    }
  });

  return initialState;
};
