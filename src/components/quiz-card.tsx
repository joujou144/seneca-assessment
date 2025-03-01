import { getBackgroundColor, getInitialSelections } from "@/helper";
import { cn } from "@/lib";
import { TQuizData } from "@/lib/data";
import { useState } from "react";

type TQuizCardProps = {
  quizData: TQuizData;
  className?: string;
};

export function QuizCard({ quizData, className }: TQuizCardProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string | null>
  >(getInitialSelections(quizData));

  const [isAllCorrect, setIsAllCorrect] = useState(false);
  const [answerMessage, setAnswerMessage] = useState<string>(
    "The answer is incorrect"
  );

  const handleToggleChange = (selectionId: number, option: string) => {
    const newAnswers = { ...selectedAnswers, [selectionId]: option };
    setSelectedAnswers(newAnswers);

    // Now have to check if all answers are correct
    const allCorrect = quizData.selections.every(
      (selection) => newAnswers[selection.id] === selection.correctAnswer
    );
    setIsAllCorrect(allCorrect);
    setAnswerMessage(`The answer is ${allCorrect ? "correct" : "incorrect"}`);
  };

  // For quiz 1 layout purposes only per design
  const isQuiz1 = (selectionId: number) =>
    quizData.id === 1 && selectionId === 103;

  // Not very keen on this implementation because the options are mapped and using flexbox for layout
  const getButtonRoundedStyle = (
    selectionId: number,
    option: string,
    options: string[]
  ) => {
    if (isQuiz1(selectionId)) {
      if (options[0] === option) return "rounded-t-lg min-[630px]:rounded-full";
      if (options[1] === option) return "rounded-b-lg min-[630px]:rounded-full";
    }
    return "rounded-full";
  };

  return (
    <div
      className={cn(
        className,
        getBackgroundColor(quizData, isAllCorrect, selectedAnswers),
        "rounded-lg shadow-lg transition-colors duration-300"
      )}
    >
      <form className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-lg">{quizData.question}</h2>
        <div className="flex flex-col gap-3">
          {quizData.selections.map((selection) => (
            <div
              key={selection.id}
              className={cn(
                "font-normal border-[2px] flex flex-wrap border-white border-opacity-75 min-[630px]:min-w-[550px] md:min-w-[650px] lg:min-w-[850px]",
                isQuiz1(selection.id) && selection.id === 103
                  ? "rounded-xl min-[630px]:rounded-full"
                  : "rounded-full"
              )}
            >
              {selection.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    handleToggleChange(selection.id, option);
                  }}
                  className={cn(
                    " p-4 text-center transition-colors duration-300 flex-1 min-w-fit min-[630px]:w-full",
                    getButtonRoundedStyle(
                      selection.id,
                      option,
                      selection.options
                    ),
                    selectedAnswers[selection.id] === option
                      ? "bg-white bg-opacity-75 text-zinc-400"
                      : "hover:text-gray-300 bg-transparent"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </div>

        {answerMessage && <p>{answerMessage}</p>}
      </form>
    </div>
  );
}
