import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, ArrowRight, Sparkles, Rocket, BookOpen, Users } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 noise" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Glow effects */}
          <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
          <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[120px]" />
          
          {/* Main card */}
          <div className="relative glass-card rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-primary via-secondary to-accent opacity-50" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">Bắt đầu ngay</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="text-foreground">Sẵn sàng tạo </span>
                <br className="hidden md:block" />
                <span className="gradient-text">video tuyệt vời?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Tham gia cùng hàng ngàn nhà sáng tạo đang tạo ra những video ấn tượng mỗi ngày
              </p>
              
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground text-lg px-10 py-7 h-auto rounded-2xl font-bold btn-shine glow-md hover:glow-primary transition-all duration-500 group animate-fade-in"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Bắt đầu miễn phí ngay
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass soft-shadow border-border/30">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center gradient-text font-bold">SRC AI</DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Chọn nền tảng của bạn
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4">
                    {[
                      { icon: "windows", title: "Windows", desc: "Windows 10/11", color: "from-blue-500/20 to-blue-600/10" },
                      { icon: "capcut", title: "CapCut", desc: "Plugin Editor", color: "from-purple-500/20 to-purple-600/10" },
                    ].map((item, i) => (
                      <button
                        key={i}
                        className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.color} border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group`}
                      >
                        <div className="w-12 h-12 rounded-xl bg-card flex items-center justify-center group-hover:scale-110 transition-transform">
                          {item.icon === "windows" && <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>}
                          {item.icon === "capcut" && <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/></svg>}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;