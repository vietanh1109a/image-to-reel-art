import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download, ArrowRight, BookOpen, Users } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Main card */}
          <div className="bg-card border border-border rounded-lg p-12 md:p-16 text-center relative overflow-hidden">
            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-primary/30" />
            <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-primary/30" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-primary/30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-primary/30" />
            
            {/* Grid overlay */}
            <div className="absolute inset-0 tech-grid opacity-20" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
                <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                START_NOW
              </div>
              
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <span className="text-foreground">Sẵn sàng để </span>
                <span className="text-primary">cách mạng hóa</span>
                <br />
                <span className="text-foreground">việc sản xuất video?</span>
              </h2>
              
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Tham gia cùng hàng ngàn nhà sáng tạo đang tạo ra những video ấn tượng
              </p>
              
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-base group glow-sm hover:glow-md transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: '0.3s' }}
                  >
                    Bắt đầu miễn phí ngay
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md glass-strong">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center font-mono text-primary">SRC_AI</DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                      Chọn phiên bản phù hợp
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-3 py-4">
                    {[
                      { icon: "windows", title: "Windows", desc: "Windows 10/11" },
                      { icon: "capcut", title: "CapCut", desc: "Plugin Editor" },
                    ].map((item, i) => (
                      <button
                        key={i}
                        className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          {item.icon === "windows" && <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>}
                          {item.icon === "capcut" && <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/></svg>}
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                        <Download className="w-4 h-4 text-primary" />
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