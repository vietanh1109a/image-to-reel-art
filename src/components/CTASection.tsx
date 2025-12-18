import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Glow effects */}
          <div className="absolute -top-20 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px]" />
          
          {/* Main card */}
          <div className="relative glass-strong rounded-[2rem] p-12 md:p-20 text-center overflow-hidden">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.2)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Animated gradient border */}
            <div className="absolute inset-0 rounded-[2rem] p-[2px] bg-gradient-to-r from-primary via-secondary to-accent animate-gradient bg-[length:200%_200%] opacity-50" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-medium text-muted-foreground">Start Creating Today</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="text-foreground">Sẵn sàng để </span>
                <span className="gradient-text">cách mạng hóa</span>
                <br />
                <span className="text-foreground">việc sản xuất video?</span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Tham gia cùng hàng ngàn nhà sáng tạo và doanh nghiệp đang tiết kiệm thời gian và tạo ra những video ấn tượng hơn bao giờ hết.
              </p>
              
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground text-lg px-12 py-7 h-auto rounded-full font-bold glow-lg hover:scale-105 transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Bắt đầu miễn phí ngay hôm nay
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass-strong border-border/50">
                  <DialogHeader>
                    <DialogTitle className="text-3xl text-center font-display gradient-text">SRC AI</DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Chọn phiên bản phù hợp với bạn
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <button
                      className="flex items-center gap-4 p-5 glass rounded-xl hover:border-primary/50 transition-all hover:glow-sm group"
                      onClick={() => console.log("Windows download link")}
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
                      onClick={() => console.log("CapCut download link")}
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