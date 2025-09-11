import { useState } from 'react';
import Navigation from '@/components/Navigation';
import QuizSelection from '@/components/quiz/QuizSelection';
import QuizQuestion from '@/components/quiz/QuizQuestion';
import QuizResults from '@/components/quiz/QuizResults';
import { Progress } from '@/components/ui/progress';
import quizData from '@/data/quizData.json';

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface QuizState {
  selectedClass: string;
  selectedDifficulty: string;
  currentQuestion: number;
  answers: number[];
  isQuizStarted: boolean;
  isQuizCompleted: boolean;
  questions: Question[];
}

const Quiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    selectedClass: '',
    selectedDifficulty: '',
    currentQuestion: 0,
    answers: [],
    isQuizStarted: false,
    isQuizCompleted: false,
    questions: []
  });

  const startQuiz = (selectedClass: string, difficulty: string) => {
    const questions = quizData[selectedClass as keyof typeof quizData][difficulty as keyof typeof quizData['9th']];
    setQuizState({
      selectedClass,
      selectedDifficulty: difficulty,
      currentQuestion: 0,
      answers: [],
      isQuizStarted: true,
      isQuizCompleted: false,
      questions: questions
    });
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...quizState.answers];
    newAnswers[quizState.currentQuestion] = answerIndex;
    setQuizState(prev => ({ ...prev, answers: newAnswers }));
  };

  const nextQuestion = () => {
    if (quizState.currentQuestion < quizState.questions.length - 1) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    } else {
      setQuizState(prev => ({ ...prev, isQuizCompleted: true }));
    }
  };

  const previousQuestion = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({ ...prev, currentQuestion: prev.currentQuestion - 1 }));
    }
  };

  const restartQuiz = () => {
    setQuizState({
      selectedClass: '',
      selectedDifficulty: '',
      currentQuestion: 0,
      answers: [],
      isQuizStarted: false,
      isQuizCompleted: false,
      questions: []
    });
  };

  const calculateResults = () => {
    let correctAnswers = 0;
    quizState.answers.forEach((answer, index) => {
      if (answer === quizState.questions[index].correctAnswer) {
        correctAnswers++;
      }
    });
    
    return {
      totalQuestions: quizState.questions.length,
      correctAnswers,
      wrongAnswers: quizState.questions.length - correctAnswers,
      percentage: Math.round((correctAnswers / quizState.questions.length) * 100)
    };
  };

  const progressPercentage = quizState.questions.length > 0 
    ? ((quizState.currentQuestion + 1) / quizState.questions.length) * 100 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/10">
      <Navigation />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quiz <span className="text-primary">Challenge</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Test your knowledge with our comprehensive quiz system
            </p>
          </div>

          {/* Progress Bar */}
          {quizState.isQuizStarted && !quizState.isQuizCompleted && (
            <div className="mb-8">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-muted-foreground">
                    Question {quizState.currentQuestion + 1} of {quizState.questions.length}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {Math.round(progressPercentage)}% Complete
                  </span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
              </div>
            </div>
          )}

          {/* Quiz Content */}
          <div className="max-w-4xl mx-auto">
            {!quizState.isQuizStarted && !quizState.isQuizCompleted && (
              <QuizSelection onStartQuiz={startQuiz} />
            )}

            {quizState.isQuizStarted && !quizState.isQuizCompleted && (
              <QuizQuestion
                question={quizState.questions[quizState.currentQuestion]}
                questionNumber={quizState.currentQuestion + 1}
                totalQuestions={quizState.questions.length}
                selectedAnswer={quizState.answers[quizState.currentQuestion]}
                onAnswerSelect={handleAnswer}
                onNext={nextQuestion}
                onPrevious={previousQuestion}
                canGoBack={quizState.currentQuestion > 0}
                isLastQuestion={quizState.currentQuestion === quizState.questions.length - 1}
              />
            )}

            {quizState.isQuizCompleted && (
              <QuizResults
                results={calculateResults()}
                selectedClass={quizState.selectedClass}
                selectedDifficulty={quizState.selectedDifficulty}
                onRestart={restartQuiz}
              />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Quiz;