import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Target,
  Star,
  Award
} from 'lucide-react';

interface QuizResultsProps {
  results: {
    totalQuestions: number;
    correctAnswers: number;
    wrongAnswers: number;
    percentage: number;
  };
  selectedClass: string;
  selectedDifficulty: string;
  onRestart: () => void;
}

const QuizResults = ({ results, selectedClass, selectedDifficulty, onRestart }: QuizResultsProps) => {
  const getPerformanceLevel = (percentage: number) => {
    if (percentage >= 90) return { level: 'Excellent', color: 'text-green-600', icon: Trophy };
    if (percentage >= 80) return { level: 'Great', color: 'text-blue-600', icon: Award };
    if (percentage >= 70) return { level: 'Good', color: 'text-yellow-600', icon: Star };
    if (percentage >= 60) return { level: 'Fair', color: 'text-orange-600', icon: Target };
    return { level: 'Needs Improvement', color: 'text-red-600', icon: RotateCcw };
  };

  const performance = getPerformanceLevel(results.percentage);
  const PerformanceIcon = performance.icon;

  const getClassDisplayName = (classId: string) => {
    const classNames: { [key: string]: string } = {
      '9th': '9th Grade',
      '10th': '10th Grade',
      '1st_year': '1st Year',
      '2nd_year': '2nd Year',
      'mdcat': 'MDCAT'
    };
    return classNames[classId] || classId;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <PerformanceIcon className={`h-16 w-16 mx-auto mb-4 ${performance.color}`} />
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Quiz Completed!</h1>
        <p className="text-lg text-muted-foreground">
          Here's how you performed
        </p>
      </div>

      {/* Score Overview */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            Your Score
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Main Score */}
          <div className="text-center">
            <div className="text-6xl md:text-7xl font-bold text-primary mb-2">
              {results.percentage}%
            </div>
            <Badge variant="secondary" className={`${performance.color} text-lg px-4 py-2`}>
              {performance.level}
            </Badge>
          </div>

          {/* Progress Ring */}
          <div className="max-w-md mx-auto">
            <Progress 
              value={results.percentage} 
              className="h-4 mb-2"
            />
            <p className="text-center text-sm text-muted-foreground">
              {results.correctAnswers} out of {results.totalQuestions} questions correct
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Results */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Stats Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Quiz Statistics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span>Correct Answers</span>
              </div>
              <span className="font-semibold text-green-600">{results.correctAnswers}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
              <div className="flex items-center gap-2">
                <XCircle className="h-5 w-5 text-red-600" />
                <span>Wrong Answers</span>
              </div>
              <span className="font-semibold text-red-600">{results.wrongAnswers}</span>
            </div>

            <div className="flex justify-between items-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-blue-600" />
                <span>Total Questions</span>
              </div>
              <span className="font-semibold text-blue-600">{results.totalQuestions}</span>
            </div>
          </CardContent>
        </Card>

        {/* Quiz Info Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Quiz Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Class:</span>
                <Badge variant="outline">{getClassDisplayName(selectedClass)}</Badge>
              </div>
              
              <div className="flex justify-between">
                <span className="text-muted-foreground">Difficulty:</span>
                <Badge 
                  variant="outline"
                  className={
                    selectedDifficulty === 'easy' ? 'border-green-500 text-green-600' :
                    selectedDifficulty === 'medium' ? 'border-yellow-500 text-yellow-600' :
                    'border-red-500 text-red-600'
                  }
                >
                  {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}
                </Badge>
              </div>

              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span className="font-medium">{new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="mt-6 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm text-center">
                {results.percentage >= 80 
                  ? "🎉 Outstanding performance! Keep up the excellent work!" 
                  : results.percentage >= 60 
                  ? "👍 Good job! With more practice, you'll excel even further!" 
                  : "💪 Don't give up! Practice makes perfect. Try again!"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onRestart}
          size="lg"
          className="flex items-center gap-2 px-8 py-3"
        >
          <RotateCcw className="h-5 w-5" />
          Take Another Quiz
        </Button>
        
        <Button
          variant="outline"
          size="lg"
          onClick={() => window.location.href = '/'}
          className="flex items-center gap-2 px-8 py-3"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default QuizResults;