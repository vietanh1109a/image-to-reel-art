import { ShoppingCart, Play, Heart, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: ShoppingCart,
    value: "368+",
    label: "Đơn hàng được bán ra",
    gradient: "from-primary to-secondary"
  },
  {
    icon: Play,
    value: "568.9k+",
    label: "Video được tạo",
    gradient: "from-secondary to-accent"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Khách hàng hài lòng về support",
    gradient: "from-accent to-primary"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.08),transparent_60%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Statistics</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Những Con Số </span>
            <span className="gradient-text">Biết Nói</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Kể từ ngày mở bán 1/10/2024, Tsoft đã đồng hành cùng cộng đồng và đạt được những kết quả đáng tự hào.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
              
              <div className="relative glass rounded-3xl p-10 text-center hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${stat.gradient} p-[1px] mx-auto mb-8`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                    <stat.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Value */}
                <h3 className={`text-6xl font-bold font-display mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.value}
                </h3>
                
                <p className="text-lg text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-block glass rounded-full px-8 py-4">
            <p className="text-lg text-muted-foreground">
              Được tin dùng bởi các{" "}
              <span className="gradient-text font-semibold">Admin, trưởng/phó nhóm</span>{" "}
              từ những cộng đồng MMO lớn nhất Việt Nam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;