import { Button } from "@/components/ui/button";
import { ArrowRight, Play, BookOpen, Users, Sparkles, Zap, Star } from "lucide-react";
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
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 mesh-gradient animated-gradient" />
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent blur-[80px] animate-float-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/10 via-transparent to-transparent blur-[120px] animate-pulse-soft" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI Video Creation</span>
              <Sparkles className="w-4 h-4 text-primary/60" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="text-foreground">Tạo Video</span>
              <br />
              <span className="gradient-text">Không Giới Hạn</span>
              <br />
              <span className="text-foreground/80 text-4xl lg:text-5xl">từ AI</span>
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Biến ý tưởng thành video chuyên nghiệp trong vài phút. 
              <span className="text-foreground"> Không cần kỹ năng</span> chỉnh sửa phức tạp.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="relative bg-gradient-to-r from-primary via-primary to-secondary text-primary-foreground font-semibold px-8 py-6 text-base rounded-2xl btn-shine glow-sm hover:glow-md transition-all duration-500 group"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Bắt Đầu Miễn Phí
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass soft-shadow border-border/30">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center gradient-text font-bold">
                      SRC AI
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Chọn nền tảng của bạn
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4">
                    {[
                      { icon: "windows", title: "Windows", desc: "Windows 10/11", color: "from-blue-500/20 to-blue-600/10" },
                      { icon: "capcut", title: "CapCut Plugin", desc: "Tích hợp CapCut", color: "from-purple-500/20 to-purple-600/10" },
                      { icon: "book", title: "Hướng Dẫn", desc: "Tài liệu chi tiết", color: "from-green-500/20 to-green-600/10" },
                      { icon: "users", title: "Cộng Đồng", desc: "Nhóm hỗ trợ", color: "from-orange-500/20 to-orange-600/10" },
                    ].map((item, i) => (
                      <button 
                        key={i}
                        className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.color} border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center group-hover:scale-110 transition-transform">
                          {item.icon === "windows" && <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>}
                          {item.icon === "capcut" && <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/></svg>}
                          {item.icon === "book" && <BookOpen className="w-6 h-6 text-green-400" />}
                          {item.icon === "users" && <Users className="w-6 h-6 text-orange-400" />}
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                        <Download className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border/50 bg-card/50 hover:bg-card hover:border-primary/30 group px-8 py-6 text-base rounded-2xl transition-all duration-300"
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 w-5 h-5 text-primary" />
                Xem Demo
              </Button>
            </div>
            
            {/* Feature highlights */}
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {[
                { icon: Star, text: "Miễn phí dùng thử", color: "text-yellow-400" },
                { icon: Zap, text: "Xử lý nhanh", color: "text-primary" },
                { icon: Sparkles, text: "Chất lượng 4K", color: "text-secondary" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-card/50 border border-border/30">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right content - Hero visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Glow behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10 rounded-3xl blur-3xl scale-90" />
            
            {/* Main card */}
            <div className="relative gradient-border rounded-3xl overflow-hidden">
              <div className="bg-card p-2">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="AI Video Creation" 
                    className="w-full h-auto"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  
                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-3">
                      <div className="flex-1 glass rounded-xl px-4 py-3 text-center">
                        <div className="text-2xl font-bold gradient-text">10K+</div>
                        <div className="text-xs text-muted-foreground">Videos</div>
                      </div>
                      <div className="flex-1 glass rounded-xl px-4 py-3 text-center">
                        <div className="text-2xl font-bold gradient-text">99%</div>
                        <div className="text-xs text-muted-foreground">Hài lòng</div>
                      </div>
                      <div className="flex-1 glass rounded-xl px-4 py-3 text-center">
                        <div className="text-2xl font-bold gradient-text">4K</div>
                        <div className="text-xs text-muted-foreground">Quality</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 animate-float soft-shadow">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">AI Online</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 animate-float-slow soft-shadow">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">HD Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;