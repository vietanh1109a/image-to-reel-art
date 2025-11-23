import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const Navigation = () => {
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

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Đăng nhập
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Dùng thử miễn phí
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
