import { Gift, Sparkles, BookOpen, GraduationCap, Users, HelpCircle } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Tặng Tài Khoản",
    description: "Tặng miễn phí tài khoản Veo3 khi sử dụng dịch vụ."
  },
  {
    icon: Sparkles,
    title: "Miễn phí Capcut Pro",
    description: "Được sử dụng miễn phí các công cụ trả phí của Capcut Pro trong thời gian dùng tool."
  },
  {
    icon: BookOpen,
    title: "Kho Prompt Khổng Lồ",
    description: "Truy cập miễn phí vào thư viện prompt đa dạng và phong phú."
  },
  {
    icon: GraduationCap,
    title: "Thư Viện Khóa Học AI",
    description: "Cung cấp tài liệu và kiến thức chuyên sâu về AI."
  },
  {
    icon: Users,
    title: "Lớp Học Miễn Phí",
    description: "Tham gia các lớp học miễn phí do chúng tôi tổ chức."
  },
  {
    icon: HelpCircle,
    title: "Kiến Thức",
    description: "Hỏi đáp khúc mắc các vấn đề xoay quanh các lĩnh vực mmo miễn phí phù hợp với người mới bắt đầu."
  }
];

const BenefitsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            BENEFITS
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Quyền Lợi </span>
            <span className="text-primary">Đặc Biệt</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Nhận được nhiều lợi ích độc quyền khi trải nghiệm dịch vụ của chúng tôi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;