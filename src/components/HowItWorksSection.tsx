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
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 tech-dots opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            PROCESS
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Cách </span>
            <span className="text-primary">Hoạt Động</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Chỉ 4 bước đơn giản để tạo video chuyên nghiệp
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-border">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-primary to-primary/50 scale-x-0 animate-[scale-in_2s_ease-out_forwards]" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number */}
                <div className="w-12 h-12 rounded-lg bg-card border border-primary/30 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="text-lg font-mono font-semibold text-primary">{step.number}</span>
                </div>
                
                {/* Card */}
                <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
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