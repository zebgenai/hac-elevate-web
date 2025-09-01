import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  GraduationCap, 
  Trophy, 
  Shield, 
  MapPin,
  Calendar,
  Star,
  Award,
  Brain,
  Globe,
  MessageCircle,
  ExternalLink,
  Linkedin,
  Phone
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const About = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToPrograms = () => {
    window.location.href = '/#programs';
  };

  const scrollToAdmissions = () => {
    window.location.href = '/#admissions';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/923116040400', '_blank');
  };

  const handleDeveloperWhatsApp = () => {
    window.open('https://wa.me/923099194338', '_blank');
  };

  const timelineData = [
    {
      year: '2018',
      title: 'Institute Founded',
      description: 'Harvard Academy Charsadda was established in the heart of Charsadda to provide quality education.'
    },
    {
      year: '2020',
      title: 'MDCAT/ETEA Launch',
      description: 'Launched specialized test preparation programs for MDCAT and ETEA with expert faculty.'
    },
    {
      year: '2022',
      title: 'English & Skills',
      description: 'Introduced English Speaking courses and skill-based training programs.'
    },
    {
      year: '2024',
      title: 'Advanced Certifications',
      description: 'Expanded to advanced safety and international certification programs.'
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Mission',
      description: 'To provide concept-based learning and prepare students for future challenges with excellence and innovation.'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vision',
      description: 'To become the most trusted and result-oriented academy in the region, empowering students for success.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Values',
      description: 'Quality • Discipline • Excellence • Innovation • Integrity • Student Success'
    }
  ];

  const features = [
    { icon: <Users className="w-12 h-12" />, title: 'Top Faculty', description: 'Experienced and dedicated teachers' },
    { icon: <GraduationCap className="w-12 h-12" />, title: 'Concept-Based Teaching', description: 'Deep understanding over memorization' },
    { icon: <Trophy className="w-12 h-12" />, title: 'Proven Results', description: 'Outstanding MDCAT/ETEA success rates' },
    { icon: <Shield className="w-12 h-12" />, title: 'Scholarships', description: 'Financial support for talented students' },
    { icon: <MapPin className="w-12 h-12" />, title: 'Friendly Environment', description: 'Supportive and inclusive campus' }
  ];

  const developerSkills = [
    { icon: <Shield className="w-6 h-6" />, title: 'Cybersecurity & Ethical Hacking', subtitle: 'CEH, CHFI certified' },
    { icon: <Brain className="w-6 h-6" />, title: 'Artificial Intelligence & ML', subtitle: 'Advanced AI solutions' },
    { icon: <MessageCircle className="w-6 h-6" />, title: 'Custom Chatbot Development', subtitle: 'Dialogflow, Kommunicate, Azure' },
    { icon: <Globe className="w-6 h-6" />, title: 'Networking & System Admin', subtitle: 'Enterprise solutions' },
    { icon: <Award className="w-6 h-6" />, title: 'Web Development & Automation', subtitle: 'Modern tech stack' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-secondary opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-bg.jpg')] bg-cover bg-center"></div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            About Harvard Academy Charsadda
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Empowering Students for a Brighter Future
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            Harvard Academy Charsadda is committed to academic excellence and skill-building in the heart of Charsadda.
          </p>
          <Button 
            onClick={scrollToPrograms}
            className="btn-hero text-lg px-8 py-4 animate-fade-in"
            style={{ animationDelay: '0.9s' }}
          >
            Explore Programs
          </Button>
        </div>

        {/* Floating shapes */}
        <div className="floating-shape w-20 h-20 bg-white/10 rounded-full absolute top-20 left-20"></div>
        <div className="floating-shape w-16 h-16 bg-accent/20 rounded-full absolute bottom-32 right-16" style={{ animationDelay: '2s' }}></div>
        <div className="floating-shape w-12 h-12 bg-white/15 rounded-full absolute top-1/3 right-1/4" style={{ animationDelay: '4s' }}></div>
      </section>

      {/* Mission, Vision, Values */}
      <section id="values" data-animate className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Foundation</h2>
            <p className="text-xl text-muted-foreground">The principles that guide our academic journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`glass-card hover:scale-105 transition-all duration-500 group cursor-pointer ${
                  visibleSections.has('values') ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History & Journey Timeline */}
      <section id="timeline" data-animate className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Journey</h2>
            <p className="text-xl text-muted-foreground">Milestones in our educational excellence</p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
            
            {timelineData.map((item, index) => (
              <div 
                key={item.year}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                } ${visibleSections.has('timeline') ? 'animate-slide-in-right' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <Card className={`glass-card w-full max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Calendar className="w-5 h-5 text-primary mr-2" />
                      <span className="text-2xl font-bold text-primary">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="features" data-animate className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Why Choose HAC?</h2>
            <p className="text-xl text-muted-foreground">Excellence in every aspect of education</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`text-center group ${
                  visibleSections.has('features') ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex justify-center mb-6 text-primary group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section id="message" data-animate className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Director's Message</h2>
          </div>

          <Card className={`glass-card ${visibleSections.has('message') ? 'animate-scale-in' : 'opacity-0'}`}>
            <CardContent className="p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-8 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <blockquote className="text-xl md:text-2xl italic text-foreground mb-6 leading-relaxed">
                "At Harvard Academy Charsadda, we believe in shaping future leaders through knowledge, discipline, and innovation. Our commitment to excellence drives us to provide the best educational experience for every student."
              </blockquote>
              <p className="text-lg font-semibold text-primary">Director, Harvard Academy Charsadda</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" data-animate className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Website Developer</h2>
            <p className="text-xl text-muted-foreground">Meet the technology expert behind this platform</p>
          </div>

          <Card className={`glass-card max-w-4xl mx-auto ${visibleSections.has('developer') ? 'animate-fade-in' : 'opacity-0'}`}>
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto lg:mx-0 mb-6 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">AZ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Atif Zeb</h3>
                  <p className="text-lg text-primary mb-4">Cybersecurity Analyst | AI & Chatbot Developer</p>
                  <p className="text-muted-foreground mb-6">
                    Passionate about building secure, intelligent, and user-friendly digital solutions. From designing AI-powered chatbots to implementing advanced networking systems.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                    <Button 
                      onClick={() => window.open('https://www.linkedin.com/in/atif-zeb-76b866290', '_blank')}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </Button>
                    <Button 
                      onClick={handleDeveloperWhatsApp}
                      className="btn-hero flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      WhatsApp: 03099194338
                    </Button>
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="text-xl font-bold text-foreground mb-6">Expertise Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {developerSkills.map((skill, index) => (
                      <div 
                        key={skill.title}
                        className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                      >
                        <div className="text-primary mt-1">
                          {skill.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-foreground">{skill.title}</h5>
                          <p className="text-sm text-muted-foreground">{skill.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleDeveloperWhatsApp}
                    className="btn-secondary mt-6 w-full sm:w-auto"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hire Me for Your Project
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary via-primary-light to-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey with HAC?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful students who have achieved their dreams with Harvard Academy Charsadda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToAdmissions}
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
            >
              Apply Now
            </Button>
            <Button 
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default About;