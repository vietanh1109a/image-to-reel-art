import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    popular: false
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
    popular: false
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
    popular: true
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
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded text-sm font-mono text-primary mb-6 animate-fade-in">
            <span className="w-1.5 h-1.5 bg-primary rounded-full" />
            PRICING
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="text-foreground">Bảng Giá </span>
            <span className="text-primary">Linh Hoạt</span>
          </h2>
          
          <p className="text-muted-foreground max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Chọn gói phù hợp với nhu cầu của bạn
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative animate-fade-in ${plan.popular ? 'lg:-mt-2 lg:mb-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-mono rounded">
                    RECOMMENDED
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-card border rounded-lg p-6 transition-all duration-300 hover:border-primary/30 ${
                plan.popular ? 'border-primary/50' : 'border-border'
              }`}>
                {/* Header */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-3xl font-semibold ${plan.popular ? 'text-primary' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className="text-sm text-muted-foreground">{plan.period}</span>
                  </div>
                </div>
                
                {/* CTA */}
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                      : 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                  }`}
                  size="sm"
                >
                  {plan.cta}
                </Button>
                
                {/* Features */}
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
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