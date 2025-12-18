import { Button } from "@/components/ui/button";
import { Video, BookOpen, Users, Menu, X, Download, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <div className="glass rounded-2xl soft-shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px]">
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors">
                    <Video className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                </div>
                <span className="text-lg font-bold gradient-text">SRC AI</span>
              </div>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-1 bg-muted/50 rounded-xl p-1">
                {navLinks.map((link) => (
                  <a 
                    key={link.label}
                    href={link.href} 
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      link.active 
                        ? 'bg-card text-foreground shadow-sm' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-3">
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="hidden sm:flex bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-xl btn-shine">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Dùng thử
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
                        { icon: "capcut", title: "CapCut", desc: "Plugin Editor", color: "from-purple-500/20 to-purple-600/10" },
                        { icon: "book", title: "Hướng Dẫn", desc: "Tài liệu", color: "from-green-500/20 to-green-600/10" },
                        { icon: "users", title: "Cộng Đồng", desc: "Hỗ trợ", color: "from-orange-500/20 to-orange-600/10" },
                      ].map((item, i) => (
                        <button 
                          key={i}
                          className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${item.color} border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center">
                            {item.icon === "windows" && <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" /></svg>}
                            {item.icon === "capcut" && <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18z"/></svg>}
                            {item.icon === "book" && <BookOpen className="w-5 h-5 text-green-400" />}
                            {item.icon === "users" && <Users className="w-5 h-5 text-orange-400" />}
                          </div>
                          <div className="flex-1 text-left">
                            <h3 className="font-medium text-foreground text-sm">{item.title}</h3>
                            <p className="text-xs text-muted-foreground">{item.desc}</p>
                          </div>
                          <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </button>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>

                <button 
                  className="md:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pt-4 border-t border-border/50 animate-fade-in">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a 
                      key={link.label}
                      href={link.href} 
                      className={`px-4 py-3 rounded-lg text-sm ${
                        link.active ? 'bg-card text-foreground' : 'text-muted-foreground'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button className="mt-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-xl">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Dùng thử
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;