import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import AdmissionsSection from '@/components/AdmissionsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProgramsSection />
      <AdmissionsSection />
      <ContactSection />
      <WhatsAppFloat />
      
      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-primary-dark to-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">H</span>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Harvard Academy</h3>
                  <p className="text-white/80">Charsadda</p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Leading educational institution in Charsadda, committed to excellence in academic achievement and character development.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                {['Programs', 'Admissions', 'Faculty', 'Contact'].map((link) => (
                  <a 
                    key={link}
                    href={`#${link.toLowerCase()}`} 
                    className="block text-white/80 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Info</h4>
              <div className="space-y-2 text-white/80">
                <p>📍 Gulbahar #1, Mardan Road, Charsadda</p>
                <p>📞 +92 311 6040400</p>
                <p>💬 WhatsApp: +92 311 6040400</p>
                <p>📧 info@harvardacademychd.edu.pk</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/80">
              © 2024 Harvard Academy Charsadda. All rights reserved. | Designed with ❤️ for educational excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
