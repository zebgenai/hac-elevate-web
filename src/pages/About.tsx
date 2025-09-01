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
  Phone,
  Instagram
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import aboutHeroDark from '@/assets/about-hero-dark.jpg';

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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-600/80 to-accent/90"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url(${aboutHeroDark})` }}></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl top-20 -left-48 animate-float"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-full blur-3xl bottom-20 -right-40 animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute w-64 h-64 bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-full blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          <div className="backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up bg-gradient-to-r from-white via-accent-light to-white bg-clip-text text-transparent">
              About Harvard Academy
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-accent-light animate-slide-up" style={{ animationDelay: '0.3s' }}>
              Charsadda
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-accent-glow mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.5s' }}></div>
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-up leading-relaxed" style={{ animationDelay: '0.7s' }}>
              Empowering Students for a <span className="text-accent-light font-semibold">Brighter Future</span>
            </p>
            <p className="text-lg mb-10 max-w-3xl mx-auto animate-slide-up opacity-80 leading-relaxed" style={{ animationDelay: '0.9s' }}>
              Harvard Academy Charsadda is committed to academic excellence and skill-building in the heart of Charsadda, where innovation meets tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '1.1s' }}>
              <Button 
                onClick={scrollToPrograms}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-glow text-white text-lg px-10 py-4 rounded-full shadow-2xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Explore Programs
              </Button>
              <Button 
                onClick={handleWhatsApp}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-4 rounded-full"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced floating elements */}
        <div className="absolute w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full top-20 left-20 animate-float blur-sm"></div>
        <div className="absolute w-24 h-24 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full bottom-32 right-16 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-16 h-16 bg-gradient-to-r from-accent/20 to-purple-500/20 rounded-full top-1/3 right-1/4 animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
        <div className="absolute w-20 h-20 bg-gradient-to-bl from-white/10 to-accent/10 rounded-full top-1/4 left-1/3 animate-float blur-sm" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Mission, Vision, Values */}
      <section id="values" data-animate className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-primary/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">OUR VALUES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Our Foundation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The principles that guide our academic journey and shape tomorrow's leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={value.title}
                className={`group relative overflow-hidden border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 cursor-pointer ${
                  visibleSections.has('values') ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <CardContent className="relative p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {value.icon}
                      </div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {value.description}
                  </p>
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
      <section id="features" data-animate className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-background to-accent/5"></div>
        <div className="absolute inset-0">
          <div className="absolute w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl -top-48 -right-48 animate-pulse-glow"></div>
          <div className="absolute w-80 h-80 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-3xl -bottom-40 -left-40 animate-pulse-glow" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full">EXCELLENCE</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent">
              Why Choose HAC?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Excellence in every aspect of education, creating leaders for tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className={`group relative p-8 rounded-2xl bg-gradient-to-br from-card/60 to-card/20 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-500 cursor-pointer ${
                  visibleSections.has('features') ? 'animate-bounce-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative text-center">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
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
                  <div className="w-32 h-32 rounded-full mx-auto lg:mx-0 mb-6 overflow-hidden border-4 border-primary/20">
                    <img 
                      src="/lovable-uploads/1fd8e40a-9189-4df8-b497-e128731fd09c.png" 
                      alt="Atif Zeb - Cybersecurity Analyst & AI Developer"
                      className="w-full h-full object-cover"
                    />
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
                      onClick={() => window.open('https://www.instagram.com/atifzeb_/', '_blank')}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
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
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"></div>
        
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <div className="mb-6">
              <Star className="w-16 h-16 text-accent-glow mx-auto mb-4 animate-pulse-glow" />
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Ready to Start Your 
              <span className="block bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
                Journey with HAC?
              </span>
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-accent-light to-accent-glow mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful students who have achieved their dreams with 
              <span className="font-semibold text-accent-light"> Harvard Academy Charsadda</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                onClick={scrollToAdmissions}
                size="lg"
                className="bg-white text-primary hover:bg-accent-light hover:text-white text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <GraduationCap className="w-6 h-6 mr-3" />
                Apply Now
              </Button>
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm text-xl px-12 py-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                WhatsApp Us
              </Button>
            </div>
            
            <div className="mt-10 flex justify-center items-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-accent-light" />
                <span>Excellence</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent-light" />
                <span>Trust</span>
              </div>
              <div className="w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-accent-light" />
                <span>Community</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute w-20 h-20 bg-white/10 rounded-full top-20 left-20 animate-float blur-sm"></div>
        <div className="absolute w-16 h-16 bg-accent/20 rounded-full bottom-20 right-20 animate-float blur-sm" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-12 h-12 bg-white/15 rounded-full top-1/2 left-10 animate-float blur-sm" style={{ animationDelay: '4s' }}></div>
      </section>

      <WhatsAppFloat />
    </div>
  );
};

export default About;