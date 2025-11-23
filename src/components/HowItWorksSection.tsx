import { FileText, Image, Video, Download } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Nhập Văn Bản",
    description: "Viết hoặc dán nội dung văn bản bạn muốn chuyển thành video"
  },
  {
    icon: Image,
    number: "02",
    title: "Thêm Hình Ảnh",
    description: "Upload hình ảnh hoặc chọn từ thư viện có sẵn"
  },
  {
    icon: Video,
    number: "03",
    title: "AI Xử Lý",
    description: "AI tự động tạo video với hiệu ứng và chuyển cảnh đẹp mắt"
  },
  {
    icon: Download,
    number: "04",
    title: "Tải Xuống",
    description: "Xem trước và tải video chất lượng cao về máy của bạn"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Cách Hoạt Động
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chỉ 4 bước đơn giản để tạo video chuyên nghiệp
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
                  <div className="flex flex-col items-center text-center">
                    {/* Number badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mt-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
