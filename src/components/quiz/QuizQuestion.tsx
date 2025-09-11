import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Question } from '@/pages/Quiz';

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onAnswerSelect: (answerIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoBack: boolean;
  isLastQuestion: boolean;
}

const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onPrevious,
  canGoBack,
  isLastQuestion
}: QuizQuestionProps) => {
  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Question Card */}
      <Card className="border-2 border-border/50 shadow-lg">
        <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardTitle className="text-xl md:text-2xl">
            Question {questionNumber} of {totalQuestions}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <h2 className="text-lg md:text-xl font-semibold text-center mb-8 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <Card
                key={index}
                className={`cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${
                  selectedAnswer === index
                    ? 'ring-2 ring-primary bg-primary/10 border-primary/50'
                    : 'hover:bg-accent/50 border-border/50'
                }`}
                onClick={() => onAnswerSelect(index)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      selectedAnswer === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {optionLabels[index]}
                    </div>
                    <span className="text-lg flex-1">{option}</span>
                    {selectedAnswer === index && (
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!canGoBack}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {selectedAnswer !== undefined ? (
              <span className="text-primary font-medium">Answer selected</span>
            ) : (
              'Select an answer to continue'
            )}
          </p>
        </div>

        <Button
          onClick={onNext}
          disabled={selectedAnswer === undefined}
          className="flex items-center gap-2 bg-primary hover:bg-primary/90"
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next'}
          {!isLastQuestion && <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>

      {/* Question Progress */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-secondary/20 rounded-full px-4 py-2">
          <div className="flex gap-1">
            {Array.from({ length: totalQuestions }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i < questionNumber
                    ? 'bg-primary'
                    : i === questionNumber - 1
                    ? 'bg-primary/60'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground ml-2">
            {questionNumber}/{totalQuestions}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;