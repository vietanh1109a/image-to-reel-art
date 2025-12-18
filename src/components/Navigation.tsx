import { Button } from "@/components/ui/button";
import { Video, BookOpen, Users, ArrowRight, Menu, X } from "lucide-react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#", label: "Trang chủ", active: true },
    { href: "#how-it-works", label: "Hướng dẫn sử dụng" },
    { href: "#pricing", label: "Bảng giá" },
    { href: "#contact", label: "Liên hệ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                <Video className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <span className="text-xl font-bold font-display gradient-text">SRC AI</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                  link.active 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                  link.active 
                    ? 'bg-primary/10' 
                    : 'bg-transparent group-hover:bg-muted/50'
                }`} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="hidden sm:flex relative overflow-hidden bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold glow-sm hover:glow-md transition-all duration-300">
                  Dùng thử miễn phí
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

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg glass"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className={`px-4 py-3 rounded-lg transition-all ${
                    link.active 
                      ? 'text-primary bg-primary/10' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="mt-2 w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold">
                    Dùng thử miễn phí
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;