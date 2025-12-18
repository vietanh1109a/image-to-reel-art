import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2, Mail } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Phản ảnh chất lượng dịch vụ",
    description: "Góp ý của bạn giúp chúng tôi tốt hơn.",
    buttonText: "Phản ánh",
    gradient: "from-primary to-secondary",
    buttonClass: "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
    onClick: () => console.log("Feedback link")
  },
  {
    icon: MessageSquare,
    title: "Cộng đồng Zalo",
    description: "Trao đổi & nhận hỗ trợ nhanh nhất.",
    buttonText: "Tham Gia Ngay",
    gradient: "from-[#0068FF] to-[#0084FF]",
    buttonClass: "bg-gradient-to-r from-[#0068FF] to-[#0084FF] text-white",
    onClick: () => console.log("Zalo group link")
  },
  {
    icon: Share2,
    title: "Fanpage",
    description: "Theo dõi tin tức và cập nhật mới nhất.",
    buttonText: "Theo Dõi",
    gradient: "from-secondary to-accent",
    buttonClass: "bg-gradient-to-r from-secondary to-accent text-primary-foreground",
    onClick: () => console.log("Fanpage link")
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Liên Hệ </span>
            <span className="gradient-text">Với Chúng Tôi</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Bạn có câu hỏi hoặc cần hỗ trợ? Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactOptions.map((option, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${option.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative glass rounded-2xl p-10 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col items-center text-center">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${option.gradient} p-[1px] mb-8`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <option.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold font-display text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mb-8 flex-grow">
                  {option.description}
                </p>
                
                <Button 
                  size="lg"
                  className={`w-full max-w-xs ${option.buttonClass} font-semibold glow-sm hover:glow-md transition-all duration-300`}
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