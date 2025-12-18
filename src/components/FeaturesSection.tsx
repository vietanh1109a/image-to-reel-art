import { Sparkles, Zap, Shield, Workflow } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Thông Minh",
    description: "Công nghệ AI tiên tiến tự động tạo video chất lượng cao từ văn bản và hình ảnh của bạn.",
    code: "ai.process()"
  },
  {
    icon: Zap,
    title: "Nhanh Chóng",
    description: "Tạo video chuyên nghiệp chỉ trong vài phút, không cần kỹ năng chỉnh sửa phức tạp.",
    code: "render.fast()"
  },
  {
    icon: Shield,
    title: "An Toàn & Bảo Mật",
    description: "Dữ liệu của bạn được mã hóa và bảo vệ tuyệt đối với tiêu chuẩn bảo mật cao nhất.",
    code: "secure.data()"
  },
  {
    icon: Workflow,
    title: "Dễ Sử Dụng",
    description: "Giao diện trực quan, đơn giản. Bất kỳ ai cũng có thể tạo video ấn tượng ngay lập tức.",
    code: "ui.simple()"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            FEATURES
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Tính Năng </span>
            <span className="text-primary">Nổi Bật</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Mọi thứ bạn cần để tạo video chuyên nghiệp đều có sẵn trong một nền tảng
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-full bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all duration-300">
                {/* Code tag */}
                <div className="text-xs font-mono text-primary/60 mb-4">{`// ${feature.code}`}</div>
                
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;