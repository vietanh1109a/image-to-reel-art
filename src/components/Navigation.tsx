import { Button } from "@/components/ui/button";
import { Video, BookOpen, Users, ArrowRight } from "lucide-react";
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

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Video className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">VideoAI</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Trang chủ
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              Hướng dẫn sử dụng
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Bảng giá
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Liên hệ
            </a>
          </div>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Dùng thử miễn phí
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

                <button 
                  className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                  onClick={() => {
                    // Add user guide link logic here
                    console.log("Opening user guide");
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-foreground">Hướng dẫn sử dụng</h3>
                    <p className="text-sm text-muted-foreground">Xem tài liệu hướng dẫn</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </button>

                <button 
                  className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
                  onClick={() => {
                    // Add support group link logic here
                    console.log("Opening support group");
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-foreground">Nhóm hỗ trợ veo3</h3>
                    <p className="text-sm text-muted-foreground">Tham gia cộng đồng hỗ trợ</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
