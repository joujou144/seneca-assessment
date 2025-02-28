import { TQuizData } from "@/lib/data";
import { useState } from "react";

type TQuizCardProps = {
  quizData: TQuizData;
};

export function QuizCard({ quizData }: TQuizCardProps) {
  const getRandomInitialSelections = () => {
    const initialSelections: Record<number, string | null> = {};
    // code here
    return initialSelections;
  };
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string | null>
  >(getRandomInitialSelections());
  const [isAllCorrect, setIsAllCorrect] = useState(false);
  const [answerMessage, setAnswerMessage] = useState<string | null>(null);

  const handleToggleChange = (selectionId: number, selectedOption: string) => {
    console.log("selection", selectedOption);
    setSelectedAnswers((prev) => ({ ...prev, [selectionId]: selectedOption }));
  };

  return (
    <div className="rounded-lg shadow-lg transition-colors duration-300 bg-gray-300 w-[90%] mx-auto py-10 px-6 h-full text-white">
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
                  className={` hover:text-gray-100 p-4 rounded-full text-center transition-colors duration-300 flex-1 min-w-fit lg:w-full border-[2px] border-white border-opacity-75 lg:border-none
                  
                  `}
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
