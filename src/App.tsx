import { LoadingSpinner } from "@/components/loading-spinner";
import { QuizCard } from "@/components/quiz-card";
import { quizData, TQuizData } from "@/lib/data";
import { useEffect, useState } from "react";

function App() {
  const [currentQuiz, setCurrentQuiz] = useState<TQuizData | null>(null);
  const [currentQuizIdx, setCurrentQuizIdx] = useState(0);
  const [loading, setLoading] = useState<boolean>(true);

  // async function just to pretend to make API req
  const getQuiz = async (index: number) => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (index < quizData.length) {
      const fetchedQuiz = quizData[index];
      setCurrentQuiz(fetchedQuiz);
      setCurrentQuizIdx(index);
    } else {
      setCurrentQuiz(null);
    }
    setLoading(false);
  };

  const loadNextQuiz = () => {
    getQuiz(currentQuizIdx + 1);
  };

  useEffect(() => {
    getQuiz(0);
  }, []);

  return (
    <div className="font-poppins font-medium">
      <h1 className="text-center my-10">Seneca Interview Assessment</h1>
      <div className="flex justify-center items-center h-[calc(100vh-120px)]">
        {loading ? (
          <div className="flex flex-col justify-center items-center">
            <LoadingSpinner />
          </div>
        ) : currentQuiz ? (
          <QuizCard
            quizData={currentQuiz}
            onAllCorrect={loadNextQuiz}
            className="w-[90%] mx-auto py-10 px-6 text-white"
          />
        ) : (
          <p>There is no more quizzes to load.</p>
        )}
      </div>
    </div>
  );
}

export default App;
