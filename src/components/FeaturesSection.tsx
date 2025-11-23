import { Sparkles, Zap, Shield, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Sparkles,
    title: "AI Thông Minh",
    description: "Công nghệ AI tiên tiến tự động tạo video chất lượng cao từ văn bản và hình ảnh của bạn."
  },
  {
    icon: Zap,
    title: "Nhanh Chóng",
    description: "Tạo video chuyên nghiệp chỉ trong vài phút, không cần kỹ năng chỉnh sửa phức tạp."
  },
  {
    icon: Shield,
    title: "An Toàn & Bảo Mật",
    description: "Dữ liệu của bạn được mã hóa và bảo vệ tuyệt đối với tiêu chuẩn bảo mật cao nhất."
  },
  {
    icon: Workflow,
    title: "Dễ Sử Dụng",
    description: "Giao diện trực quan, đơn giản. Bất kỳ ai cũng có thể tạo video ấn tượng ngay lập tức."
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tính Năng Nổi Bật
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mọi thứ bạn cần để tạo video chuyên nghiệp đều có sẵn trong một nền tảng
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
