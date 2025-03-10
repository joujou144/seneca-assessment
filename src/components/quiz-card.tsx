import {
  getBackgroundColor,
  getButtonRoundedStyle,
  getInitialSelections,
} from "@/helper";
import { cn } from "@/lib";
import { TQuizData } from "@/lib/data";
import { useState } from "react";

type TQuizCardProps = {
  quizData: TQuizData;
  className?: string;
  getNextQuiz?: () => void;
};

export function QuizCard({ quizData, className, getNextQuiz }: TQuizCardProps) {
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

    if (allCorrect && getNextQuiz) {
      setTimeout(() => {
        getNextQuiz();
      }, 1300);
    }
  };

  return (
    <div
      className={cn(
        className,
        getBackgroundColor(quizData, isAllCorrect, selectedAnswers),
        "rounded-lg shadow-lg transition-colors duration-300"
      )}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-lg">{quizData.question}</h2>
        <div className="flex flex-col gap-3">
          {quizData.selections.map((selection) => (
            <div
              key={selection.id}
              className="selection-container rounded-xl sm:rounded-full"
            >
              {selection.options.map((option) => (
                <button
                  disabled={isAllCorrect}
                  key={option}
                  type="button"
                  onClick={() => {
                    handleToggleChange(selection.id, option);
                  }}
                  className={cn(
                    "p-4 text-center transition-colors duration-300 flex-1 min-w-full sm:min-w-fit",
                    getButtonRoundedStyle(option, selection.options),

                    selectedAnswers[selection.id] === option
                      ? "bg-white bg-opacity-75 text-zinc-400"
                      : "hover:text-gray-300 bg-transparent disabled:text-gray-300"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          ))}
        </div>

        {answerMessage && <p>{answerMessage}</p>}
      </div>
    </div>
  );
}
