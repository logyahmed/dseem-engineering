import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Lightbulb, Clock, TrendingUp } from "lucide-react";

const principles = [
  {
    icon: Shield,
    title: "الجودة والسلامة",
    description: "الالتزام بأعلى معايير الجودة والسلامة في جميع مراحل المشروع"
  },
  {
    icon: Award,
    title: "التميز المهني",
    description: "فريق من المهندسين المحترفين ذوي الخبرات الواسعة"
  },
  {
    icon: Users,
    title: "رضا العملاء",
    description: "تحقيق رضا العملاء من خلال خدمات تفوق التوقعات"
  },
  {
    icon: Lightbulb,
    title: "الابتكار",
    description: "حلول هندسية مبتكرة تواكب أحدث التقنيات"
  },
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    description: "تسليم المشاريع في الوقت المحدد دون تأخير"
  },
  {
    icon: TrendingUp,
    title: "التطوير المستمر",
    description: "تحسين مستمر للخدمات ومواكبة التطورات الهندسية"
  }
];

export default function PrinciplesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            قيمنا ومبادئنا
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all"
                data-testid={`card-principle-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground leading-loose">
                  {principle.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
