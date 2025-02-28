import { LoadingSpinner } from "@/components/loading-spinner";
import { QuizCard } from "@/components/quiz-card";
import { quizData, TQuizData } from "@/lib/data";
import { useEffect, useState } from "react";

function App() {
  const [currentQuiz, setCurrentQuiz] = useState<TQuizData | null>(null);
  const [loading, setLoading] = useState(true);
  // const [endQuiz, setEndQuiz] = useState(false);

  useEffect(() => {
    // Pretend to request API here with setTimeout to simulate network delay
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Set the quiz to the first item the array
      const fetchedQuiz = quizData[0];
      setCurrentQuiz(fetchedQuiz);
      setLoading(false);
    };
    fetchData();
    // const fetchedQuiz = quizData[0];
    // setCurrentQuiz(fetchedQuiz);
  }, []);

  return (
    <div className="font-poppins font-medium">
      <h1 className="text-center my-10">Seneca Interview Assessment</h1>
      <div className="flex justify-center items-center">
        {/* {currentQuiz && <QuizCard quizData={currentQuiz} />} */}
        {loading ? (
          <div className="h-svh">
            <LoadingSpinner />
          </div>
        ) : currentQuiz ? (
          <QuizCard quizData={currentQuiz} />
        ) : (
          <p>There is no more quizzes to load.</p>
        )}
      </div>
    </div>
  );
}

export default App;
