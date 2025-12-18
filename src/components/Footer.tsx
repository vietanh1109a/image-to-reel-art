import { Video, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Video className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold font-display gradient-text">SRC AI</span>
          </div>
          
          {/* Divider */}
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          {/* Copyright */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>by SRC AI Team</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 SRC AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;