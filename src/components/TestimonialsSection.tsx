import { ShoppingCart, Play, Heart, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: ShoppingCart,
    value: "368+",
    label: "Đơn hàng đã bán",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400"
  },
  {
    icon: Play,
    value: "568.9K+",
    label: "Video được tạo",
    color: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Khách hàng hài lòng",
    color: "from-orange-500 to-red-500",
    iconColor: "text-orange-400"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 noise" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/5 blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-muted-foreground">Thống kê</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Con số </span>
            <span className="gradient-text">ấn tượng</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Từ ngày mở bán 1/10/2024, SRC AI đã đồng hành cùng cộng đồng
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-card rounded-3xl p-8 text-center hover-lift relative overflow-hidden group">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <stat.icon className={`w-8 h-8 ${stat.iconColor}`} strokeWidth={1.5} />
                  </div>
                  
                  <div className={`text-5xl font-bold mb-3 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badge */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Được tin dùng bởi <span className="text-foreground font-semibold">Admin & Leaders</span> các cộng đồng MMO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;