import { cn } from "@/lib";
import { TQuizData } from "@/lib/data";
import { useState } from "react";

type TQuizCardProps = {
  quizData: TQuizData;
  className?: string;
};

export function QuizCard({ quizData, className }: TQuizCardProps) {
  // For pre-selected answers on render
  const getInitialSelections = () => {
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
        const randomIndex = Math.floor(
          Math.random() * quizData.selections.length
        );
        initialState[selection.id] = selection.options[randomIndex];
      }
    });
    return initialState;
  };

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string | null>
  >(getInitialSelections());
  const [isAllCorrect, setIsAllCorrect] = useState(false);
  const [answerMessage, setAnswerMessage] = useState<string>(
    "The answer is incorrect"
  );

  const handleToggleChange = (selectionId: number, option: string) => {
    const newAnswerSelections = { ...selectedAnswers, [selectionId]: option };
    setSelectedAnswers(newAnswerSelections);

    // Now check if all answers are correct
    const allCorrect = quizData.selections.every(
      (selection) =>
        newAnswerSelections[selection.id] === selection.correctAnswer
    );
    setIsAllCorrect(allCorrect);
    setAnswerMessage(`The answer is ${allCorrect ? "correct" : "incorrect"}`);
  };

  const isSelected = (selectionId: number, option: string) => {
    return quizData.selections.some(
      (selection) =>
        selection.id === selectionId && selection.correctAnswer === option
    );
  };

  // useEffect(() => {
  //   getInitialSelections();
  //   console.log("selectedAnswers:", selectedAnswers);
  // }, [selectedAnswers]);

  return (
    <div
      className={cn(
        className,
        isAllCorrect ? "bg-cyan-400" : "bg-amber-500",
        "rounded-lg shadow-lg transition-colors duration-300 w-[90%] mx-auto py-10 px-6 h-full text-white"
      )}
    >
      <form className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-lg">{quizData.question}</h2>
        <div className="flex flex-col gap-3">
          {quizData.selections.map((selection) => (
            <div
              key={selection.id}
              className="font-normal border-[2px] flex flex-col gap-3 rounded-full max-lg:border-none border-white border-opacity-75 lg:gap-0 lg:flex-row lg:min-w-[850px]"
            >
              {selection.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    handleToggleChange(selection.id, option);
                  }}
                  className={cn(
                    " p-4 rounded-full text-center transition-colors duration-300 flex-1 min-w-fit lg:w-full border-[2px] border-white border-opacity-70 lg:border-none",

                    selectedAnswers[selection.id] === option
                      ? "bg-white bg-opacity-75 text-gray-500"
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
