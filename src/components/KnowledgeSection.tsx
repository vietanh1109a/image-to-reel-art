import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Tool này có phù hợp cho người mới bắt đầu MMO không?",
    answer: "Hoàn toàn phù hợp! Tool được thiết kế với giao diện thân thiện, dễ sử dụng ngay cả với người chưa có kinh nghiệm. Chúng tôi cung cấp hướng dẫn chi tiết và hỗ trợ 24/7."
  },
  {
    question: "Tôi có thể tạo bao nhiêu video mỗi ngày?",
    answer: "Số lượng video không giới hạn tùy thuộc vào gói dịch vụ bạn chọn. Gói miễn phí có giới hạn hợp lý, còn các gói trả phí không giới hạn số lượng video."
  },
  {
    question: "Video được tạo ra có bản quyền không?",
    answer: "Tất cả video được tạo bởi tool đều thuộc quyền sở hữu của bạn. Bạn có thể sử dụng cho mục đích cá nhân và thương mại mà không lo vấn đề bản quyền."
  },
  {
    question: "Tool có hỗ trợ xuất video chất lượng 4K không?",
    answer: "Có, tool hỗ trợ xuất video ở nhiều độ phân giải khác nhau bao gồm HD, Full HD và 4K. Bạn có thể chọn chất lượng phù hợp với nhu cầu của mình."
  },
  {
    question: "Làm sao để tối ưu video cho các nền tảng MMO?",
    answer: "Tool của chúng tôi có các template được tối ưu sẵn cho TikTok, YouTube Shorts, Facebook Reels và các nền tảng khác. Bạn chỉ cần chọn template phù hợp."
  },
  {
    question: "Tôi có được hoàn tiền nếu không hài lòng?",
    answer: "Chúng tôi có chính sách hoàn tiền 100% trong vòng 7 ngày nếu bạn không hài lòng với dịch vụ. Không cần lý do, không đặt câu hỏi."
  }
];

const KnowledgeSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kiến Thức
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hỏi đáp khúc mắc các vấn đề xoay quanh các lĩnh vực MMO
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
