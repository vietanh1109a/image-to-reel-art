import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Miễn Phí",
    price: "0đ",
    period: "/tháng",
    description: "Hoàn hảo để bắt đầu",
    features: [
      "5 video mỗi tháng",
      "Độ phân giải 720p",
      "Thư viện mẫu cơ bản",
      "Hỗ trợ email"
    ],
    cta: "Bắt đầu miễn phí",
    popular: false
  },
  {
    name: "Pro",
    price: "299,000đ",
    period: "/tháng",
    description: "Cho người sáng tạo nội dung",
    features: [
      "50 video mỗi tháng",
      "Độ phân giải 1080p",
      "Toàn bộ thư viện mẫu",
      "Không có watermark",
      "Hỗ trợ ưu tiên",
      "Export nhiều định dạng"
    ],
    cta: "Dùng thử 7 ngày",
    popular: true
  },
  {
    name: "Business",
    price: "999,000đ",
    period: "/tháng",
    description: "Cho doanh nghiệp",
    features: [
      "Không giới hạn video",
      "Độ phân giải 4K",
      "API truy cập",
      "Tùy chỉnh thương hiệu",
      "Hỗ trợ 24/7",
      "Quản lý team",
      "Phân tích nâng cao"
    ],
    cta: "Liên hệ sales",
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Bảng Giá Linh Hoạt
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chọn gói phù hợp với nhu cầu của bạn. Nâng cấp hoặc hạ cấp bất cứ lúc nào
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative p-8 bg-card border-border hover:shadow-xl transition-all duration-300 animate-fade-in ${
                plan.popular 
                  ? 'border-primary shadow-lg shadow-primary/20 scale-105' 
                  : 'hover:border-primary/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-4 py-1 rounded-full">
                  <span className="text-sm font-semibold text-primary-foreground">PHỔ BIẾN NHẤT</span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
              </div>
              
              <Button 
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-card border border-border hover:bg-muted'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
              
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
