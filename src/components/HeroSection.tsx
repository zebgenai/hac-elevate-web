import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowDown } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToAdmissions = () => {
    document.getElementById('admissions')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Harvard Academy Charsadda Campus" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary-light/80"></div>
      </div>

      {/* Floating Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-shape w-64 h-64 bg-accent/10 rounded-full -top-32 -left-32 blur-3xl"></div>
        <div className="floating-shape w-96 h-96 bg-accent/5 rounded-full top-1/4 -right-48 blur-3xl"></div>
        <div className="floating-shape w-48 h-48 bg-white/10 rounded-full bottom-1/4 left-1/4 blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8">
            🏆 #1 Academy in Charsadda
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Join{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Harvard Academy
            </span>
            <br />
            Charsadda — Secure your{' '}
            <span className="inline-block animate-pulse">Spot</span> & Shine
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Concept-based learning with top faculty at{' '}
            <span className="font-semibold text-accent">Gulbahar #1, Mardan Road, Charsadda</span>
            <br />
            Your pathway to academic excellence starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              onClick={() => window.open('https://wa.me/923116040400', '_blank')}
              className="btn-hero text-lg px-10 py-5 flex items-center gap-3 group"
            >
              <MessageCircle size={22} className="group-hover:rotate-12 transition-transform" />
              WhatsApp Us Now
            </Button>
            
            <Button
              onClick={scrollToAdmissions}
              className="btn-secondary text-lg px-10 py-5 flex items-center gap-3 group"
            >
              Apply Now
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: '500+', label: 'Students' },
              { number: '15+', label: 'Expert Faculty' },
              { number: '95%', label: 'Success Rate' },
              { number: '8+', label: 'Years Excellence' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;