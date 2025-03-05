import { TQuizData } from "@/lib/data";

// For pre-selected answers on render
export const getInitialSelections = (quizData: TQuizData) => {
  const initialState: Record<number, string | null> = {};

  const selections = [...quizData.selections];
  const totalSelections = selections.length;
  // To guarantee that selections have less than 50% correct
  const maxCorrectAllowed = Math.floor(totalSelections / 2) - 1;

  // Shuffle selections to randomize which ones get incorrect answers
  selections.sort(() => Math.random() - 0.5);

  let correctCount = 0;

  selections.forEach((selection) => {
    if (correctCount < maxCorrectAllowed) {
      // Assign correct answer
      initialState[selection.id] = selection.correctAnswer;
      correctCount++;
    } else {
      // Assign incorrect answer (anything that isn't correct)
      const incorrectOption =
        selection.options.find((opt) => opt !== selection.correctAnswer) ||
        selection.options[0];
      initialState[selection.id] = incorrectOption;
    }
  });

  return initialState;
};
