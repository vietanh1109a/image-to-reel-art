import { Video, Heart, ExternalLink } from "lucide-react";

const Footer = () => {
  const links = [
    { label: "Trang chủ", href: "#" },
    { label: "Tính năng", href: "#features" },
    { label: "Bảng giá", href: "#pricing" },
    { label: "Liên hệ", href: "#contact" },
  ];

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="absolute inset-0 mesh-gradient-subtle opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent p-[1px]">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
              </div>
              <span className="text-lg font-bold gradient-text">SRC AI</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
              <span>by SRC AI Team</span>
            </div>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2024 SRC AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;