import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Send, CheckCircle, Clock, Users, Award } from 'lucide-react';

const AdmissionsSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    fatherName: '',
    program: '',
    phone: '',
    whatsapp: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const programs = [
    'Class 8th', 'Class 9th', 'Class 10th', 
    '1st Year Pre-Medical', '1st Year Pre-Engineering',
    '2nd Year Pre-Medical', '2nd Year Pre-Engineering',
    'MDCAT Preparation', 'ETEA Preparation',
    'English Speaking Course', 'Safety Courses (OSHA/NEBOSH)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Create WhatsApp message
    const message = `🎓 New Admission Inquiry from Harvard Academy Website

👤 Name: ${formData.fullName}
👨‍👦 Father Name: ${formData.fatherName}
📚 Program: ${formData.program}
📱 Phone: ${formData.phone}
💬 WhatsApp: ${formData.whatsapp}
🏙️ City: ${formData.city}

Please contact me for admission details.`;

    const whatsappUrl = `https://wa.me/923116040400?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setFormData({
      fullName: '',
      fatherName: '',
      program: '',
      phone: '',
      whatsapp: '',
      city: ''
    });

    toast({
      title: "✅ Application Submitted Successfully!",
      description: "Our team will contact you soon. Check your WhatsApp for confirmation.",
    });
  };

  const admissionHighlights = [
    {
      icon: CheckCircle,
      title: 'Easy Admission Process',
      description: 'Simple steps to secure your spot'
    },
    {
      icon: Clock,
      title: 'Quick Response',
      description: '24-hour confirmation guarantee'
    },
    {
      icon: Users,
      title: 'Limited Seats',
      description: 'Small batches for personalized attention'
    },
    {
      icon: Award,
      title: 'Merit Scholarships',
      description: 'Financial support for deserving students'
    }
  ];

  return (
    <section id="admissions" className="py-20 relative overflow-hidden">
      {/* Background with floating shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10">
        <div className="floating-shape w-96 h-96 bg-accent/10 rounded-full -top-48 -right-48 blur-3xl"></div>
        <div className="floating-shape w-64 h-64 bg-primary/10 rounded-full top-1/2 -left-32 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6 animate-bounce-in">
            📝 Admissions Open
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up animate-delay-200">
            Secure Your{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Academic Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-300">
            Join thousands of successful students who chose Harvard Academy Charsadda for their educational journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Admission Form */}
          <div className="glass-form animate-slide-in-left">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2 animate-bounce-in">
                Apply Now
              </h3>
              <p className="text-muted-foreground animate-slide-up animate-delay-200">
                Fill out the form below and we'll contact you within 24 hours
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="fatherName">Father Name *</Label>
                  <Input
                    id="fatherName"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleInputChange}
                    placeholder="Enter father's name"
                    required
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="program">Select Program *</Label>
                <select
                  id="program"
                  name="program"
                  value={formData.program}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-3 border border-input rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choose your program</option>
                  {programs.map((program) => (
                    <option key={program} value={program}>
                      {program}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="03xx-xxxxxxx"
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="whatsapp">WhatsApp Number</Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="03xx-xxxxxxx"
                    className="mt-2"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter your city"
                  required
                  className="mt-2"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-hero py-4 text-lg flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Admission Highlights */}
          <div className="space-y-8 animate-slide-in-right">
            <div className="glass-card p-8 text-center hover-lift">
              <div className="w-16 h-16 bg-gradient-to-r from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-in animate-pulse-glow">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 animate-slide-up animate-delay-200">
                Admissions Now Open!
              </h3>
              <p className="text-muted-foreground mb-6 animate-slide-up animate-delay-300">
                Limited seats available. Early bird gets 20% discount on admission fee.
              </p>
              <div className="text-accent font-bold text-lg animate-bounce-in animate-delay-400">
                Deadline: December 31, 2024
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {admissionHighlights.map((highlight, index) => {
                const IconComponent = highlight.icon;
                return (
                  <Card key={index} className={`group hover:shadow-lg transition-all duration-300 hover-lift animate-slide-up animate-delay-${(index + 5) * 100}`}>
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <IconComponent size={24} />
                      </div>
                      <h4 className="font-bold text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionsSection;