import { Sparkles, Zap, Shield, Workflow, ArrowUpRight } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI Thông Minh",
    description: "Công nghệ AI tiên tiến tự động tạo video chất lượng cao từ văn bản và hình ảnh.",
    color: "from-blue-500/20 to-cyan-500/10",
    iconColor: "text-blue-400"
  },
  {
    icon: Zap,
    title: "Siêu Nhanh",
    description: "Tạo video chuyên nghiệp chỉ trong vài phút, tiết kiệm thời gian quý báu.",
    color: "from-yellow-500/20 to-orange-500/10",
    iconColor: "text-yellow-400"
  },
  {
    icon: Shield,
    title: "An Toàn Tuyệt Đối",
    description: "Dữ liệu được mã hóa và bảo vệ với tiêu chuẩn bảo mật cao nhất.",
    color: "from-green-500/20 to-emerald-500/10",
    iconColor: "text-green-400"
  },
  {
    icon: Workflow,
    title: "Dễ Sử Dụng",
    description: "Giao diện trực quan, ai cũng có thể tạo video ấn tượng ngay lập tức.",
    color: "from-purple-500/20 to-pink-500/10",
    iconColor: "text-purple-400"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-subtle" />
      <div className="absolute inset-0 noise" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Tính năng nổi bật</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Mọi thứ bạn cần</span>
            <br />
            <span className="gradient-text">trong một nền tảng</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trải nghiệm sức mạnh của AI trong việc tạo video chuyên nghiệp
          </p>
        </div>
        
        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-full glass-card rounded-2xl p-6 hover-lift relative overflow-hidden`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                    {feature.title}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;