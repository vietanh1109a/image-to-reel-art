import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen, Users, Terminal } from "lucide-react";
import heroImage from "@/assets/hero-video-creation.jpg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Tech background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 tech-grid opacity-50" />
      
      {/* Subtle gradient orb */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Tech badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg animate-fade-in">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-mono">AI_TECHNOLOGY_2024</span>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-semibold leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">Từ Văn Bản &</span>
              <br />
              <span className="text-foreground">Hình Ảnh thành</span>
              <br />
              <span className="text-primary">Video Không Giới Hạn</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Chuyển đổi nội dung của bạn thành video chuyên nghiệp chỉ trong vài phút. 
              <span className="text-foreground"> Không cần kỹ năng chỉnh sửa</span>, không giới hạn sáng tạo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base group glow-sm hover:glow-md transition-all duration-300"
                  >
                    Dùng Thử Miễn Phí
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass-strong">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center text-primary font-mono">
                      SRC_AI
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Chọn phiên bản để tải xuống
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4">
                    {[
                      { icon: "windows", title: "Tải cho Windows", desc: "Windows 10/11", action: () => console.log("Windows") },
                      { icon: "capcut", title: "Tải cho CapCut", desc: "Plugin CapCut", action: () => console.log("CapCut") },
                      { icon: "book", title: "Hướng dẫn sử dụng", desc: "Tài liệu hướng dẫn", action: () => console.log("Guide") },
                      { icon: "users", title: "Nhóm hỗ trợ veo3", desc: "Cộng đồng hỗ trợ", action: () => console.log("Support") },
                    ].map((item, i) => (
                      <button 
                        key={i}
                        className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 transition-all group"
                        onClick={item.action}
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          {item.icon === "windows" && <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>}
                          {item.icon === "capcut" && <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/></svg>}
                          {item.icon === "book" && <BookOpen className="w-5 h-5 text-primary" />}
                          {item.icon === "users" && <Users className="w-5 h-5 text-primary" />}
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                        <Download className="w-4 h-4 text-primary opacity-50 group-hover:opacity-100" />
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:border-primary/50 hover:bg-primary/5 group px-8 py-6 text-base"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5" />
                Tìm hiểu thêm
              </Button>
            </div>
            
            {/* Tech stats */}
            <div className="flex flex-wrap items-center gap-8 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { label: "Miễn phí", value: "FREE" },
                { label: "Videos/ngày", value: "∞" },
                { label: "Chất lượng", value: "4K" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-mono text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Tech frame */}
            <div className="relative">
              {/* Corner decorations */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
              
              {/* Main image container */}
              <div className="relative rounded-lg overflow-hidden border border-border bg-card">
                <img 
                  src={heroImage} 
                  alt="Video creation interface" 
                  className="w-full h-auto"
                />
                {/* Scanline overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
                
                {/* Stats overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/95 to-transparent">
                  <div className="flex gap-4">
                    <div className="bg-card/80 backdrop-blur border border-border rounded px-3 py-2">
                      <div className="text-lg font-mono text-primary">10K+</div>
                      <div className="text-xs text-muted-foreground">Videos</div>
                    </div>
                    <div className="bg-card/80 backdrop-blur border border-border rounded px-3 py-2">
                      <div className="text-lg font-mono text-primary">99%</div>
                      <div className="text-xs text-muted-foreground">Success</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Status indicator */}
              <div className="absolute -top-4 right-4 flex items-center gap-2 bg-card border border-border rounded px-3 py-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-muted-foreground">SYSTEM_ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;