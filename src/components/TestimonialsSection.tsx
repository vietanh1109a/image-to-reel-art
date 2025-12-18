import { ShoppingCart, Play, Heart } from "lucide-react";

const stats = [
  {
    icon: ShoppingCart,
    value: "368+",
    label: "Đơn hàng"
  },
  {
    icon: Play,
    value: "568.9k+",
    label: "Videos"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Hài lòng"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            STATISTICS
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Những Con Số </span>
            <span className="text-primary">Biết Nói</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kể từ ngày mở bán 1/10/2024, Tsoft đã đồng hành cùng cộng đồng
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                
                <div className="text-4xl font-mono font-semibold text-primary mb-2">
                  {stat.value}
                </div>
                
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-sm text-muted-foreground">
            Được tin dùng bởi{" "}
            <span className="text-primary font-medium">Admin, trưởng/phó nhóm</span>{" "}
            từ các cộng đồng MMO lớn nhất Việt Nam
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;