import { Button } from "@/components/ui/button";
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

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-3xl p-12 md:p-16 text-center backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sẵn sàng để cách mạng hóa việc sản xuất video?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Tham gia cùng hàng ngàn nhà sáng tạo và doanh nghiệp đang tiết kiếm thời gian và tạo ra những video ấn tượng hơn bao giờ hết.
          </p>
          
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-[#d946ef] to-[#ec4899] hover:opacity-90 text-white text-lg px-12 py-6 h-auto rounded-full shadow-lg shadow-[#d946ef]/30 hover:shadow-[#d946ef]/50 transition-all"
              >
                Bắt đầu miễn phí ngay hôm nay
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-center mb-2">SRC AI</DialogTitle>
                <DialogDescription className="text-center">
                  Chọn phiên bản phù hợp với bạn
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <Button
                  variant="outline"
                  className="w-full h-16 text-lg"
                  onClick={() => {
                    // User will add their Windows download link here
                    console.log("Windows download link");
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Tải về cho Windows
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-16 text-lg"
                  onClick={() => {
                    // User will add their CapCut download link here
                    console.log("CapCut download link");
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Tải về cho CapCut
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
