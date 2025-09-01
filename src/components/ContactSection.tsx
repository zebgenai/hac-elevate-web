import { Phone, MessageCircle, Mail, MapPin, Clock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '+92 311 6040400',
      action: () => window.open('tel:+923116040400'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '+92 311 6040400',
      action: () => window.open('https://wa.me/923116040400'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'info@harvardacademychd.edu.pk',
      action: () => window.open('mailto:info@harvardacademychd.edu.pk'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Gulbahar #1, Mardan Road, Charsadda',
      action: () => window.open('https://maps.google.com/?q=Gulbahar+Charsadda'),
      color: 'from-red-500 to-red-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', time: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', time: 'By Appointment' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6 animate-bounce-in">
            📞 Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-slide-up animate-delay-200">
            Contact{' '}
            <span className="bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              Harvard Academy
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up animate-delay-300">
            Ready to start your academic journey? Get in touch with us today for admissions, queries, or campus visits.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index} 
                  className={`group cursor-pointer hover:shadow-xl hover-lift transition-all duration-500 animate-slide-up animate-delay-${(index + 4) * 100}`}
                  onClick={contact.action}
                >
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${contact.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {contact.title}
                    </h3>
                    <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {contact.info}
                    </p>
                    <div className="mt-4 text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to {contact.title.toLowerCase()}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Office Hours & Quick Info */}
          <div className="space-y-6">
            {/* Office Hours */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Quick Info</h3>
                </div>
                <div className="space-y-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">24 Hours</div>
                    <div className="text-muted-foreground text-sm">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-accent/5 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">500+</div>
                    <div className="text-muted-foreground text-sm">Happy Students</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                    <div className="text-muted-foreground text-sm">Success Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-primary to-primary-light p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Visit Our Campus</h3>
                <p className="text-white/90">Gulbahar #1, Mardan Road, Charsadda, Khyber Pakhtunkhwa</p>
              </div>
              <div className="h-64 md:h-96 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map coming soon</p>
                  <button
                    onClick={() => window.open('https://maps.google.com/?q=Gulbahar+Charsadda')}
                    className="mt-4 px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
                  >
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <button
              onClick={() => window.open('https://facebook.com/harvardacademycharsadda')}
              className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <span className="text-xl font-bold">f</span>
            </button>
            <button
              onClick={() => window.open('https://instagram.com/hac_chd')}
              className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <span className="text-xl">📷</span>
            </button>
            <button
              onClick={() => window.open('https://wa.me/923116040400')}
              className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
            >
              <MessageCircle size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;