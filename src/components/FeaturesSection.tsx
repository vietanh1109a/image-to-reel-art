import { Sparkles, Zap, Shield, Workflow, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Thông Minh",
    description: "Công nghệ AI tiên tiến tự động tạo video chất lượng cao từ văn bản và hình ảnh của bạn.",
    gradient: "from-primary to-secondary",
    delay: "0s"
  },
  {
    icon: Zap,
    title: "Nhanh Chóng",
    description: "Tạo video chuyên nghiệp chỉ trong vài phút, không cần kỹ năng chỉnh sửa phức tạp.",
    gradient: "from-secondary to-accent",
    delay: "0.1s"
  },
  {
    icon: Shield,
    title: "An Toàn & Bảo Mật",
    description: "Dữ liệu của bạn được mã hóa và bảo vệ tuyệt đối với tiêu chuẩn bảo mật cao nhất.",
    gradient: "from-accent to-primary",
    delay: "0.2s"
  },
  {
    icon: Workflow,
    title: "Dễ Sử Dụng",
    description: "Giao diện trực quan, đơn giản. Bất kỳ ai cũng có thể tạo video ấn tượng ngay lập tức.",
    gradient: "from-primary via-secondary to-accent",
    delay: "0.3s"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Powerful Features</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Tính Năng </span>
            <span className="gradient-text">Nổi Bật</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Mọi thứ bạn cần để tạo video chuyên nghiệp đều có sẵn trong một nền tảng
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative h-full glass rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon container */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold font-display text-foreground mb-3 flex items-center gap-2">
                  {feature.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Bottom line accent */}
                <div className={`absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r ${feature.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;