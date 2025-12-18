import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2 } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Phản ánh dịch vụ",
    description: "Góp ý của bạn giúp chúng tôi tốt hơn.",
    buttonText: "Phản ánh",
    onClick: () => console.log("Feedback link")
  },
  {
    icon: MessageSquare,
    title: "Cộng đồng Zalo",
    description: "Trao đổi & nhận hỗ trợ nhanh nhất.",
    buttonText: "Tham Gia",
    onClick: () => console.log("Zalo group link")
  },
  {
    icon: Share2,
    title: "Fanpage",
    description: "Theo dõi tin tức và cập nhật mới nhất.",
    buttonText: "Theo Dõi",
    onClick: () => console.log("Fanpage link")
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            CONTACT
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Liên Hệ </span>
            <span className="text-primary">Với Chúng Tôi</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactOptions.map((option, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {option.description}
                </p>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                  onClick={option.onClick}
                >
                  {option.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;