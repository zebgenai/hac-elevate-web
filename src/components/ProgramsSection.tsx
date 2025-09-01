import { BookOpen, GraduationCap, Target, Users, Globe, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: 'School Classes',
      description: 'Complete foundation for Classes 8th, 9th & 10th',
      features: ['Conceptual Learning', 'Regular Tests', 'Individual Attention'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Intermediate',
      description: 'Pre-Medical & Pre-Engineering (1st & 2nd Year)',
      features: ['Expert Faculty', 'Lab Facilities', 'Career Guidance'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Target,
      title: 'MDCAT & ETEA',
      description: 'Comprehensive test preparation program',
      features: ['Mock Tests', 'Performance Analysis', 'Success Guarantee'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Users,
      title: 'English Speaking',
      description: 'Professional communication skills development',
      features: ['Conversation Practice', 'Grammar Mastery', 'Confidence Building'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Globe,
      title: 'Safety Courses',
      description: 'OSHA, NEBOSH & IOSH Certifications',
      features: ['International Standards', 'Industry Recognition', 'Career Advancement'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Special Programs',
      description: 'Scholarships & Merit-based admissions',
      features: ['Financial Support', 'Academic Excellence', 'Community Service'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gradient-to-br from-secondary via-white to-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-bounce-in">
            📚 Academic Programs
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up animate-delay-200">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Academic Path
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-300">
            Comprehensive educational programs designed to unlock your potential and secure your future success
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card 
                key={index} 
                className={`program-card group h-full hover-lift transition-all duration-500 animate-slide-up animate-delay-${(index + 4) * 100}`}
              >
                <CardContent className="p-0 h-full">
                  {/* Icon Header */}
                  <div className={`relative p-6 bg-gradient-to-r ${program.color} text-white rounded-t-2xl`}>
                    <div className="flex items-center justify-between">
                      <IconComponent size={40} className="group-hover:scale-110 transition-transform duration-300" />
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                        <span className="text-2xl">✨</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                          <span className="text-foreground font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-6 pt-6 border-t border-border">
                      <button
                        onClick={() => window.open('https://wa.me/923116040400', '_blank')}
                        className="w-full py-3 px-6 bg-primary/5 hover:bg-primary text-primary hover:text-white border border-primary/20 hover:border-primary rounded-full font-semibold transition-all duration-300 group-hover:scale-105"
                      >
                        Get Info
                      </button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card inline-block p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our academic counselors are here to help you choose the perfect path for your goals.
            </p>
            <button
              onClick={() => window.open('https://wa.me/923116040400', '_blank')}
              className="btn-hero"
            >
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;