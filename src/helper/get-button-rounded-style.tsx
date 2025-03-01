// For quiz 1 layout purposes only per design
export const isQuiz1 = (selectionId: number, quizDataId: number) =>
  quizDataId === 1 && selectionId === 103;

// Not very keen on this implementation because the options are mapped and using flexbox for layout
export const getButtonRoundedStyle = (
  selectionId: number,
  option: string,
  options: string[]
) => {
  if (isQuiz1(selectionId, 1)) {
    if (options[0] === option) return "rounded-t-lg min-[630px]:rounded-full";
    if (options[1] === option) return "rounded-b-lg min-[630px]:rounded-full";
  }
  return "rounded-full";
};
