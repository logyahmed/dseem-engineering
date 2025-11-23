import { Card } from "@/components/ui/card";
import { Target, Eye } from "lucide-react";

export default function VisionMissionSection() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 md:p-12 space-y-6" data-testid="card-vision">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Eye className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-3xl">رؤيتنا</h3>
            <p className="text-lg leading-loose text-muted-foreground">
              أن نكون الخيار الأول للاستشارات الهندسية في المنطقة، ونساهم في بناء مستقبل مستدام من خلال حلول هندسية مبتكرة تواكب التطور التقني والعمراني.
            </p>
          </Card>
          
          <Card className="p-8 md:p-12 space-y-6" data-testid="card-mission">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-3xl">رسالتنا</h3>
            <p className="text-lg leading-loose text-muted-foreground">
              تقديم خدمات استشارية هندسية متميزة تلبي احتياجات عملائنا وتتجاوز توقعاتهم، من خلال فريق محترف والتزام صارم بمعايير الجودة والسلامة والابتكار.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
