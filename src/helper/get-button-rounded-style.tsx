// For quiz biology layout purposes only per design
export const isQuizBiology = (selectionId: number, quizDataId: number) =>
  quizDataId === 1 && selectionId === 103;

// Not very keen on this implementation because the options array are mapped with layout using flexbox
// Not maintainable having different button styles for a group of selections based on their content
export const getButtonRoundedStyle = (option: string, options: string[]) => {
  if (options.length < 3) {
    if (options[0] === option) return "rounded-t-lg sm:rounded-full";
    if (options[1] === option) return "rounded-b-lg sm:rounded-full";
  }
  if (options[0] === option) return "rounded-t-lg sm:rounded-full";
  if (options[1] === option) return " sm:rounded-full";
  if (options[2] === option) return "rounded-b-lg sm:rounded-full";
};
