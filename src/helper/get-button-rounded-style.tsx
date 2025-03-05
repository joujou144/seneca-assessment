export const getButtonRoundedStyle = (option: string, options: string[]) => {
  if (options.length <= 2) {
    if (options[0] === option) return "rounded-t-lg sm:rounded-full";
    if (options[1] === option) return "rounded-b-lg sm:rounded-full";
  }
  if (options[0] === option) return "rounded-t-lg sm:rounded-full";
  if (options[1] === option) return " sm:rounded-full";
  if (options[2] === option) return "rounded-b-lg sm:rounded-full";
};
