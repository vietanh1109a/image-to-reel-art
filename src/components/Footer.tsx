import { Video } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Video className="w-4 h-4 text-primary" />
            </div>
            <span className="text-sm font-mono font-semibold text-primary">SRC_AI</span>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2024 SRC AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;