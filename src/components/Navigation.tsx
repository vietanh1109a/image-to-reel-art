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
    { href: "#how-it-works", label: "Hướng dẫn" },
    { href: "#pricing", label: "Bảng giá" },
    { href: "#contact", label: "Liên hệ" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Video className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-mono font-semibold text-primary">SRC_AI</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className={`px-4 py-2 text-sm transition-colors ${
                  link.active 
                    ? 'text-primary' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                  Dùng thử miễn phí
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md glass-strong">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center font-mono text-primary">
                    SRC_AI
                  </DialogTitle>
                  <DialogDescription className="text-center text-muted-foreground">
                    Chọn phiên bản để tải xuống
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-3 py-4">
                  {[
                    { icon: "windows", title: "Tải cho Windows", desc: "Windows 10/11" },
                    { icon: "capcut", title: "Tải cho CapCut", desc: "Plugin CapCut" },
                    { icon: "book", title: "Hướng dẫn sử dụng", desc: "Tài liệu" },
                    { icon: "users", title: "Nhóm hỗ trợ veo3", desc: "Cộng đồng" },
                  ].map((item, i) => (
                    <button 
                      key={i}
                      className="flex items-center gap-4 p-4 bg-muted/50 border border-border rounded-lg hover:border-primary/50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
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

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  className={`px-4 py-2 text-sm ${
                    link.active ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className="mt-2 bg-primary text-primary-foreground text-sm">
                Dùng thử miễn phí
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;