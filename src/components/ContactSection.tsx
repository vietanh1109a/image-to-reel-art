import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2, Mail, ExternalLink } from "lucide-react";

const contactOptions = [
  {
    icon: Phone,
    title: "Phản ánh dịch vụ",
    description: "Góp ý giúp chúng tôi tốt hơn",
    buttonText: "Gửi phản ánh",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400",
    onClick: () => console.log("Feedback link")
  },
  {
    icon: MessageSquare,
    title: "Cộng đồng Zalo",
    description: "Trao đổi & hỗ trợ nhanh nhất",
    buttonText: "Tham gia ngay",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400",
    onClick: () => console.log("Zalo group link")
  },
  {
    icon: Share2,
    title: "Fanpage",
    description: "Tin tức và cập nhật mới",
    buttonText: "Theo dõi",
    color: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400",
    onClick: () => console.log("Fanpage link")
  }
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 noise" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Liên hệ</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Kết nối </span>
            <span className="gradient-text">với chúng tôi</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn
          </p>
        </div>

        {/* Contact options */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactOptions.map((option, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full glass-card rounded-2xl p-8 text-center hover-lift relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <option.icon className={`w-8 h-8 ${option.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {option.description}
                  </p>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl font-semibold btn-shine"
                    onClick={option.onClick}
                  >
                    {option.buttonText}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;