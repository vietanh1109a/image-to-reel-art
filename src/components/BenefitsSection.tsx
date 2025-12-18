import { Gift, Sparkles, BookOpen, GraduationCap, Users, HelpCircle, Star } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Tặng Tài Khoản",
    description: "Tặng miễn phí tài khoản Veo3 khi sử dụng dịch vụ.",
    gradient: "from-primary to-secondary",
    iconBg: "from-primary/20 to-secondary/20"
  },
  {
    icon: Sparkles,
    title: "Miễn phí Capcut Pro",
    description: "Được sử dụng miễn phí các công cụ trả phí của Capcut Pro trong thời gian dùng tool.",
    gradient: "from-secondary to-accent",
    iconBg: "from-secondary/20 to-accent/20"
  },
  {
    icon: BookOpen,
    title: "Kho Prompt Khổng Lồ",
    description: "Truy cập miễn phí vào thư viện prompt đa dạng và phong phú.",
    gradient: "from-accent to-primary",
    iconBg: "from-accent/20 to-primary/20"
  },
  {
    icon: GraduationCap,
    title: "Thư Viện Khóa Học AI",
    description: "Cung cấp tài liệu và kiến thức chuyên sâu về AI.",
    gradient: "from-primary via-secondary to-accent",
    iconBg: "from-primary/20 to-accent/20"
  },
  {
    icon: Users,
    title: "Lớp Học Miễn Phí",
    description: "Tham gia các lớp học miễn phí do chúng tôi tổ chức.",
    gradient: "from-secondary to-primary",
    iconBg: "from-secondary/20 to-primary/20"
  },
  {
    icon: HelpCircle,
    title: "Kiến Thức",
    description: "Hỏi đáp khúc mắc các vấn đề xoay quanh các lĩnh vực mmo miễn phí phù hợp với người mới bắt đầu.",
    gradient: "from-accent via-primary to-secondary",
    iconBg: "from-accent/20 to-secondary/20"
  }
];

const BenefitsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Exclusive Benefits</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Quyền Lợi </span>
            <span className="gradient-text">Đặc Biệt</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Nhận được nhiều lợi ích độc quyền khi trải nghiệm dịch vụ của chúng tôi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${benefit.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-500`} />
              
              <div className="relative glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 h-full">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold font-display text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Gradient line at bottom */}
                <div className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r ${benefit.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;