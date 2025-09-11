import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Brain, Trophy, Zap } from 'lucide-react';

interface QuizSelectionProps {
  onStartQuiz: (selectedClass: string, difficulty: string) => void;
}

const QuizSelection = ({ onStartQuiz }: QuizSelectionProps) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const classes = [
    { id: '9th', name: '9th Grade', icon: BookOpen, description: 'Foundation concepts' },
    { id: '10th', name: '10th Grade', icon: BookOpen, description: 'Core subjects' },
    { id: '1st_year', name: '1st Year', icon: Brain, description: 'Advanced topics' },
    { id: '2nd_year', name: '2nd Year', icon: Brain, description: 'Pre-university' },
    { id: 'mdcat', name: 'MDCAT', icon: Trophy, description: 'Medical entrance' }
  ];

  const difficulties = [
    { id: 'easy', name: 'Easy', color: 'bg-green-500', description: 'Basic concepts' },
    { id: 'medium', name: 'Medium', color: 'bg-yellow-500', description: 'Moderate challenge' },
    { id: 'hard', name: 'Hard', color: 'bg-red-500', description: 'Advanced level' }
  ];

  const handleStartQuiz = () => {
    if (selectedClass && selectedDifficulty) {
      onStartQuiz(selectedClass, selectedDifficulty);
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Class Selection */}
      <Card className="border-2 border-border/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Choose Your Class
          </CardTitle>
          <CardDescription>
            Select the academic level you want to be tested on
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {classes.map((classOption) => {
              const Icon = classOption.icon;
              return (
                <Card
                  key={classOption.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    selectedClass === classOption.id
                      ? 'ring-2 ring-primary bg-primary/5'
                      : 'hover:bg-accent/50'
                  }`}
                  onClick={() => setSelectedClass(classOption.id)}
                >
                  <CardContent className="p-6 text-center">
                    <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">{classOption.name}</h3>
                    <p className="text-sm text-muted-foreground">{classOption.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Difficulty Selection */}
      <Card className="border-2 border-border/50 shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl flex items-center justify-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            Choose Difficulty Level
          </CardTitle>
          <CardDescription>
            Select the challenge level that suits your preparation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {difficulties.map((difficulty) => (
              <Card
                key={difficulty.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  selectedDifficulty === difficulty.id
                    ? 'ring-2 ring-primary bg-primary/5'
                    : 'hover:bg-accent/50'
                }`}
                onClick={() => setSelectedDifficulty(difficulty.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-full ${difficulty.color} mx-auto mb-3 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">
                      {difficulty.name.charAt(0)}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{difficulty.name}</h3>
                  <p className="text-sm text-muted-foreground">{difficulty.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Selection Summary & Start Button */}
      {selectedClass && selectedDifficulty && (
        <Card className="border-2 border-primary/20 bg-primary/5 shadow-lg animate-scale-in">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Your Selection</h3>
            <div className="flex justify-center gap-4 mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Class: {classes.find(c => c.id === selectedClass)?.name}
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Difficulty: {difficulties.find(d => d.id === selectedDifficulty)?.name}
              </Badge>
            </div>
            <Button
              onClick={handleStartQuiz}
              size="lg"
              className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 transform transition-all duration-300 hover:scale-105"
            >
              Start Quiz Challenge
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default QuizSelection;