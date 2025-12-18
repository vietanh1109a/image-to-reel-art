import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen, Users, Sparkles } from "lucide-react";
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
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/15 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-40 w-3 h-3 bg-secondary rounded-full animate-float-slow opacity-50" />
      <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-20 w-4 h-4 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-primary text-sm font-medium">Công nghệ AI Tiên Tiến Nhất 2024</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">Từ Văn Bản &</span>
              <br />
              <span className="text-foreground">Hình Ảnh thành</span>
              <br />
              <span className="gradient-text-glow">Video Không Giới Hạn</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Chuyển đổi nội dung của bạn thành video chuyên nghiệp chỉ trong vài phút. 
              <span className="text-foreground font-medium"> Không cần kỹ năng chỉnh sửa</span>, không giới hạn sáng tạo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] hover:animate-shimmer text-primary-foreground font-semibold px-8 py-6 text-lg group glow-md hover:glow-lg transition-all duration-300"
                  >
                    <span className="relative z-10 flex items-center">
                      Dùng Thử Miễn Phí
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass-strong border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-center font-display gradient-text">
                      SRC AI
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Chọn phiên bản để tải xuống
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4">
                    <button 
                      className="flex items-center gap-4 p-5 glass rounded-xl hover:border-primary/50 transition-all hover:glow-sm group"
                      onClick={() => console.log("Downloading Windows version")}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">Tải cho Windows</h3>
                        <p className="text-sm text-muted-foreground">Phiên bản Windows 10/11</p>
                      </div>
                      <Download className="w-5 h-5 text-primary group-hover:animate-bounce" />
                    </button>

                    <button 
                      className="flex items-center gap-4 p-5 glass rounded-xl hover:border-primary/50 transition-all hover:glow-sm group"
                      onClick={() => console.log("Downloading CapCut version")}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/>
                          <path d="M12 8l-4 2v4l4 2 4-2v-4l-4-2zm0 1.82l2 1v2.36l-2 1-2-1V10.82l2-1z"/>
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">Tải cho CapCut</h3>
                        <p className="text-sm text-muted-foreground">Plugin CapCut Editor</p>
                      </div>
                      <Download className="w-5 h-5 text-primary group-hover:animate-bounce" />
                    </button>

                    <button 
                      className="flex items-center gap-4 p-5 glass rounded-xl hover:border-primary/50 transition-all hover:glow-sm group"
                      onClick={() => console.log("Opening user guide")}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">Hướng dẫn sử dụng</h3>
                        <p className="text-sm text-muted-foreground">Xem tài liệu hướng dẫn</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button 
                      className="flex items-center gap-4 p-5 glass rounded-xl hover:border-primary/50 transition-all hover:glow-sm group"
                      onClick={() => console.log("Opening support group")}
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">Nhóm hỗ trợ veo3</h3>
                        <p className="text-sm text-muted-foreground">Tham gia cộng đồng hỗ trợ</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="glass border-border/50 hover:border-primary/50 hover:glow-sm group px-8 py-6 text-lg"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Tìm hiểu thêm
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-sm animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { text: "Miễn phí trải nghiệm", color: "text-primary" },
                { text: "Giao diện thân thiện", color: "text-secondary" },
                { text: "Tính năng vượt trội", color: "text-accent" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 glass rounded-full">
                  <span className={`${item.color} text-lg`}>✦</span>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-3xl scale-90 animate-glow-pulse" />
            
            <div className="relative">
              {/* Main image container */}
              <div className="relative rounded-3xl overflow-hidden gradient-border p-[2px]">
                <div className="rounded-3xl overflow-hidden bg-card">
                  <img 
                    src={heroImage} 
                    alt="Video creation interface" 
                    className="w-full h-auto hover:scale-105 transition-transform duration-700"
                  />
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                    <div className="glass rounded-xl px-4 py-3 flex-1">
                      <div className="text-2xl font-bold text-primary">10K+</div>
                      <div className="text-xs text-muted-foreground">Videos Created</div>
                    </div>
                    <div className="glass rounded-xl px-4 py-3 flex-1">
                      <div className="text-2xl font-bold text-secondary">99%</div>
                      <div className="text-xs text-muted-foreground">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-foreground">AI Active</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-float-slow">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">4K Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;