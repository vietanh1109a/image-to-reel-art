import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Share2 } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Liên hệ với chúng tôi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bạn có câu hỏi hoặc cần hỗ trợ? Đội ngũ của chúng tôi luôn sẵn sàng giúp đỡ.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Feedback Section */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <Phone className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Phản ảnh chất lượng dịch vụ
              </h3>
              <p className="text-muted-foreground mb-6">
                Góp ý của bạn giúp chúng tôi tốt hơn.
              </p>
              <Button 
                size="lg"
                className="w-full max-w-xs bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  // User will add their feedback link here
                  console.log("Feedback link");
                }}
              >
                Phản ánh
              </Button>
            </div>
          </div>

          {/* Zalo Community Section */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mb-6">
                <MessageSquare className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Cộng đồng Zalo
              </h3>
              <p className="text-muted-foreground mb-6">
                Trao đổi & nhận hỗ trợ nhanh nhất.
              </p>
              <Button 
                size="lg"
                className="w-full max-w-xs bg-gradient-to-r from-[#0068FF] to-[#0084FF] hover:opacity-90 text-white"
                onClick={() => {
                  // User will add their Zalo group link here
                  console.log("Zalo group link");
                }}
              >
                Tham Gia Ngay
              </Button>
            </div>
          </div>

          {/* Fanpage Section */}
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <Share2 className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Fanpage
              </h3>
              <p className="text-muted-foreground mb-6">
                Theo dõi tin tức và cập nhật mới nhất.
              </p>
              <Button 
                size="lg"
                className="w-full max-w-xs bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => {
                  // User will add their Fanpage link here
                  console.log("Fanpage link");
                }}
              >
                Theo Dõi
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
