import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in Harvard Academy Charsadda programs. Please share more details.";
    const whatsappUrl = `https://wa.me/923116040400?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="btn-whatsapp flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle 
        size={28} 
        className="group-hover:rotate-12 transition-transform duration-300" 
      />
      
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute top-1/2 left-full transform -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
      </div>
    </button>
  );
};

export default WhatsAppFloat;