import { Button } from "@/components/ui/button";
import { Check, Sparkles, Crown } from "lucide-react";

const plans = [
  {
    name: "Miễn Phí",
    price: "0đ",
    period: "",
    description: "Hoàn hảo để bắt đầu",
    features: [
      "5 video mỗi tháng",
      "Độ phân giải 720p",
      "Thư viện mẫu cơ bản",
      "Hỗ trợ email"
    ],
    cta: "Đặt mua",
    popular: false,
    gradient: "from-muted to-muted"
  },
  {
    name: "1 Tháng",
    price: "299,000đ",
    period: "/tháng",
    description: "Gói theo tháng linh hoạt",
    features: [
      "50 video mỗi tháng",
      "Độ phân giải 1080p",
      "Toàn bộ thư viện mẫu",
      "Không có watermark",
      "Hỗ trợ ưu tiên"
    ],
    cta: "Đặt mua",
    popular: false,
    gradient: "from-primary/50 to-secondary/50"
  },
  {
    name: "3 Tháng",
    price: "799,000đ",
    period: "/3 tháng",
    description: "Tiết kiệm hơn với gói 3 tháng",
    features: [
      "Không giới hạn video",
      "Độ phân giải 1080p",
      "Toàn bộ thư viện mẫu",
      "Không có watermark",
      "Hỗ trợ ưu tiên",
      "Export nhiều định dạng"
    ],
    cta: "Đặt mua",
    popular: true,
    gradient: "from-primary via-secondary to-accent"
  },
  {
    name: "6 Tháng",
    price: "1,499,000đ",
    period: "/6 tháng",
    description: "Giá tốt nhất cho 6 tháng",
    features: [
      "Không giới hạn video",
      "Độ phân giải 4K",
      "API truy cập",
      "Tùy chỉnh thương hiệu",
      "Hỗ trợ 24/7",
      "Quản lý team",
      "Phân tích nâng cao"
    ],
    cta: "Đặt mua",
    popular: false,
    gradient: "from-secondary to-accent"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6 animate-fade-in">
            <Crown className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">Pricing Plans</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold font-display mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Bảng Giá </span>
            <span className="gradient-text">Linh Hoạt</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Chọn gói phù hợp với nhu cầu của bạn. Nâng cấp hoặc hạ cấp bất cứ lúc nào
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`group relative animate-fade-in ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-full text-primary-foreground text-sm font-semibold shadow-lg glow-md">
                    <Sparkles className="w-4 h-4" />
                    PHỔ BIẾN NHẤT
                  </div>
                </div>
              )}
              
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-0 ${plan.popular ? 'opacity-30' : 'group-hover:opacity-20'} transition-opacity duration-500`} />
              
              <div className={`relative h-full rounded-2xl p-8 transition-all duration-500 group-hover:-translate-y-2 ${
                plan.popular 
                  ? 'glass-strong border-primary/50 glow-sm' 
                  : 'glass hover:border-primary/30'
              }`}>
                {/* Plan header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-display text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-bold font-display ${plan.popular ? 'gradient-text' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground text-lg">{plan.period}</span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full mb-8 py-6 font-semibold text-base transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary via-secondary to-accent text-primary-foreground glow-sm hover:glow-md' 
                      : 'glass border-border/50 hover:border-primary/50 hover:glow-sm'
                  }`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
                
                {/* Features */}
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-secondary' 
                          : 'bg-primary/20'
                      }`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;