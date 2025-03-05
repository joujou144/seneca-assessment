import { TQuizData } from "@/lib/data";

// For pre-selected answers on render
export const getInitialSelections = (quizData: TQuizData) => {
  const initialState: Record<number, string | null> = {};

  // iterate each selection
  quizData.selections.forEach((selection) => {
    // for this biology quiz, ribosome is the only correct pre-selected answer
    if (quizData.id === 1) {
      if (selection.id === 101) {
        // set ribosome as correct
        initialState[selection.id] = selection.correctAnswer;
      } else {
        // for other selections, set them to wrong
        // default to the first element in the options array
        const incorrectOption =
          selection.options.find(
            (option) => option !== selection.correctAnswer
          ) || selection.options[0];

        initialState[selection.id] = incorrectOption;
      }
    } else {
      // for next quizzes, pre-select combination of both correct/incorrect randomly
      const randomIndex = Math.floor(Math.random() * selection.options.length);
      initialState[selection.id] = selection.options[randomIndex];
    }
  });
  return initialState;
};
