import { FileText, Image, Video, Download, ChevronRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Nhập Văn Bản",
    description: "Viết hoặc dán nội dung bạn muốn chuyển thành video",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Image,
    number: "02",
    title: "Thêm Hình Ảnh",
    description: "Upload hình ảnh hoặc chọn từ thư viện có sẵn",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Video,
    number: "03",
    title: "AI Xử Lý",
    description: "AI tự động tạo video với hiệu ứng đẹp mắt",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Download,
    number: "04",
    title: "Tải Xuống",
    description: "Xem trước và tải video chất lượng cao",
    color: "from-green-500 to-emerald-500"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute inset-0 noise" />
      
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-secondary/5 blur-[100px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <ChevronRight className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Quy trình đơn giản</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Chỉ </span>
            <span className="gradient-text">4 bước</span>
            <span className="text-foreground"> đơn giản</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Tạo video chuyên nghiệp chưa bao giờ dễ dàng đến thế
          </p>
        </div>
        
        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-primary/50 via-secondary/50 to-accent/50 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number badge */}
                <div className="flex justify-center mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold text-lg shadow-lg relative z-10`}>
                    {step.number}
                  </div>
                </div>
                
                {/* Card */}
                <div className="glass-card rounded-2xl p-6 text-center hover-lift h-full">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
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