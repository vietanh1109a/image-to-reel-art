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
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Quyền Lợi Đặc Biệt Khi Sử Dụng Dịch Vụ
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nhận được nhiều lợi ích độc quyền khi trải nghiệm dịch vụ của chúng tôi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
