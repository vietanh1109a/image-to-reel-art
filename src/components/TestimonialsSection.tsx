import { ShoppingCart, Play, Heart } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Những Con Số Biết Nói
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kể từ ngày mở bán 1/10/2024, Tsoft đã đồng hành cùng cộng đồng và đạt được những kết quả đáng tự hào.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Orders Card */}
          <div className="bg-card/50 border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in backdrop-blur-sm">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-bold text-foreground mb-3">368+</h3>
            <p className="text-muted-foreground text-lg">Đơn hàng được bán ra</p>
          </div>

          {/* Videos Created Card */}
          <div className="bg-card/50 border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-bold text-foreground mb-3">568.9k+</h3>
            <p className="text-muted-foreground text-lg">Video được tạo</p>
          </div>

          {/* Satisfaction Card */}
          <div className="bg-card/50 border border-border/50 rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 animate-fade-in backdrop-blur-sm" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-5xl font-bold text-foreground mb-3">100%</h3>
            <p className="text-muted-foreground text-lg">Khách hàng hài lòng về support</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground">
            Được tin dùng bởi các{" "}
            <span className="text-primary font-semibold">Admin, trưởng/phó nhóm</span>{" "}
            từ những cộng đồng MMO lớn nhất Việt Nam.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
