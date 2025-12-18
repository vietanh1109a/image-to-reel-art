import { FileText, Image, Video, Download, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    number: "01",
    title: "Nhập Văn Bản",
    description: "Viết hoặc dán nội dung văn bản bạn muốn chuyển thành video",
    gradient: "from-primary to-primary"
  },
  {
    icon: Image,
    number: "02",
    title: "Thêm Hình Ảnh",
    description: "Upload hình ảnh hoặc chọn từ thư viện có sẵn",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Video,
    number: "03",
    title: "AI Xử Lý",
    description: "AI tự động tạo video với hiệu ứng và chuyển cảnh đẹp mắt",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Download,
    number: "04",
    title: "Tải Xuống",
    description: "Xem trước và tải video chất lượng cao về máy của bạn",
    gradient: "from-accent to-primary"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.05),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Simple Process</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Cách </span>
            <span className="gradient-text">Hoạt Động</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Chỉ 4 bước đơn giản để tạo video chuyên nghiệp
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-[88px] left-[12%] right-[12%] h-[2px]">
            <div className="w-full h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-30" />
            <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary to-secondary animate-shimmer" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-in group"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Number badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center font-display text-xl font-bold text-primary-foreground shadow-lg glow-sm group-hover:glow-md transition-all duration-300`}>
                    {step.number}
                  </div>
                </div>
                
                {/* Card */}
                <div className="glass rounded-2xl pt-12 pb-8 px-6 mt-4 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full glass mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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