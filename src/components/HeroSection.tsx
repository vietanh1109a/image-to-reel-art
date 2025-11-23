import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
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
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 animate-pulse" 
           style={{ animationDuration: '4s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-primary text-sm font-medium">✨ Công nghệ AI Tiên Tiến</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Từ Văn Bản & Hình Ảnh thành{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Video Không Giới Hạn
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Chuyển đổi nội dung của bạn thành video chuyên nghiệp chỉ trong vài phút. 
              Không cần kỹ năng chỉnh sửa, không giới hạn sáng tạo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                  >
                    Dùng Thử Miễn Phí
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      SRC AI
                    </DialogTitle>
                    <DialogDescription className="text-center">
                      Chọn phiên bản để tải xuống
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <button 
                      className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                      onClick={() => {
                        // Add Windows download logic here
                        console.log("Downloading Windows version");
                      }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">Tải cho Windows</h3>
                        <p className="text-sm text-muted-foreground">Phiên bản Windows 10/11</p>
                      </div>
                      <Download className="w-5 h-5 text-primary" />
                    </button>

                    <button 
                      className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                      onClick={() => {
                        // Add CapCut download logic here
                        console.log("Downloading CapCut version");
                      }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/>
                          <path d="M12 8l-4 2v4l4 2 4-2v-4l-4-2zm0 1.82l2 1v2.36l-2 1-2-1V10.82l2-1z"/>
                        </svg>
                      </div>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-foreground">Tải cho CapCut</h3>
                        <p className="text-sm text-muted-foreground">Plugin CapCut Editor</p>
                      </div>
                      <Download className="w-5 h-5 text-primary" />
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-card group"
              >
                <Play className="mr-2 w-5 h-5" />
                Tìm hiểu thêm
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span> Miễn phí 7 ngày
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span> Không cần thẻ tín dụng
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">✓</span> Hủy bất cứ lúc nào
              </div>
            </div>
          </div>
          
          {/* Right content - Hero image */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50">
              <img 
                src={heroImage} 
                alt="Video creation interface" 
                className="w-full h-auto"
              />
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" 
                 style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
