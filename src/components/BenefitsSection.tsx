import { Gift, Sparkles, BookOpen, GraduationCap, Users, HelpCircle, Star } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Tặng Tài Khoản Veo3",
    description: "Tặng miễn phí tài khoản Veo3 khi sử dụng dịch vụ.",
    color: "from-pink-500/20 to-rose-500/10",
    iconColor: "text-pink-400"
  },
  {
    icon: Sparkles,
    title: "Miễn phí Capcut Pro",
    description: "Sử dụng miễn phí các công cụ trả phí của Capcut Pro.",
    color: "from-purple-500/20 to-violet-500/10",
    iconColor: "text-purple-400"
  },
  {
    icon: BookOpen,
    title: "Kho Prompt Khổng Lồ",
    description: "Truy cập miễn phí thư viện prompt đa dạng và phong phú.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400"
  },
  {
    icon: GraduationCap,
    title: "Thư Viện Khóa Học AI",
    description: "Tài liệu và kiến thức chuyên sâu về AI.",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400"
  },
  {
    icon: Users,
    title: "Lớp Học Miễn Phí",
    description: "Tham gia các lớp học miễn phí do chúng tôi tổ chức.",
    color: "from-orange-500/20 to-amber-500/10",
    iconColor: "text-orange-400"
  },
  {
    icon: HelpCircle,
    title: "Hỗ Trợ 24/7",
    description: "Hỏi đáp khúc mắc các vấn đề, phù hợp với người mới bắt đầu.",
    color: "from-cyan-500/20 to-teal-500/10",
    iconColor: "text-cyan-400"
  }
];

const BenefitsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-subtle" />
      <div className="absolute inset-0 noise" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-muted-foreground">Quyền lợi độc quyền</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Nhận </span>
            <span className="gradient-text">nhiều hơn</span>
            <span className="text-foreground"> với SRC AI</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Các quyền lợi đặc biệt chỉ dành cho thành viên
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full glass-card rounded-2xl p-6 hover-lift relative overflow-hidden">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <benefit.icon className={`w-6 h-6 ${benefit.iconColor}`} />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
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