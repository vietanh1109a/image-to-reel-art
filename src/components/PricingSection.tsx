import { Button } from "@/components/ui/button";
import { Check, Crown, Sparkles } from "lucide-react";

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
    cta: "Bắt đầu",
    popular: false,
    gradient: "from-slate-500/20 to-slate-600/10"
  },
  {
    name: "1 Tháng",
    price: "299K",
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
    gradient: "from-blue-500/20 to-cyan-500/10"
  },
  {
    name: "3 Tháng",
    price: "799K",
    period: "/3 tháng",
    description: "Tiết kiệm 20%",
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
    gradient: "from-purple-500/30 to-pink-500/20"
  },
  {
    name: "6 Tháng",
    price: "1.49M",
    period: "/6 tháng",
    description: "Tiết kiệm 40%",
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
    gradient: "from-orange-500/20 to-amber-500/10"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 mesh-gradient-subtle" />
      <div className="absolute inset-0 noise" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Crown className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-muted-foreground">Bảng giá</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Chọn gói </span>
            <span className="gradient-text">phù hợp</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Linh hoạt nâng cấp hoặc hạ cấp bất cứ lúc nào
          </p>
        </div>
        
        {/* Pricing grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative animate-fade-in ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary to-secondary rounded-full text-primary-foreground text-xs font-semibold shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Phổ biến nhất
                  </div>
                </div>
              )}
              
              <div className={`h-full rounded-2xl p-6 transition-all duration-300 hover-lift relative overflow-hidden ${
                plan.popular 
                  ? 'glass-card border border-primary/30 glow-sm' 
                  : 'glass-card'
              }`}>
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-50`} />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-4xl font-bold ${plan.popular ? 'gradient-text' : 'text-foreground'}`}>
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Button 
                    className={`w-full mb-6 rounded-xl font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground btn-shine' 
                        : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                  
                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                          plan.popular ? 'bg-primary/20' : 'bg-muted'
                        }`}>
                          <Check className={`w-3 h-3 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;