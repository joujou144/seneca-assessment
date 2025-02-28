import { LoadingSpinner } from "@/components/loading-spinner";
import { QuizCard } from "@/components/quiz-card";
import { TQuizData } from "@/lib/data";
import { useState } from "react";

function App() {
  const [currentQuiz, setCurrentQuiz] = useState<TQuizData | null>(null);
  const [loading, setLoading] = useState(true);
  return (
    <div className="grid place-items-center p-6 font-poppins">
      <h1>Seneca Interview Assessment</h1>

      {loading ? (
        <div className="flex justify-center items-center h-svh">
          <LoadingSpinner />
        </div>
      ) : currentQuiz ? (
        <QuizCard />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
