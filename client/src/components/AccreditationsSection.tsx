import { useState } from "react";
import { Card } from "@/components/ui/card";

import hcisLogo from "@assets/generated_images/hcis-logo.png";
import aramcoLogo from "@assets/generated_images/aramco-logo.png";
import civilDefenseLogo from "@assets/generated_images/civil-defense-logo.png";
import sceLogo from "@assets/generated_images/sce-logo.png";

interface AccreditationItem {
  id: number;
  title: string;
  body: string;
  logo: string;
}

const items: AccreditationItem[] = [
  {
    id: 1,
    title: "هيئة المهندسين",
    body:
      "نحن معتمدون من هيئة المهندسين، مما يعكس التزامنا بالجودة والمعايير العالية في جميع مشاريعنا.",
    logo: sceLogo,
  },
  {
    id: 2,
    title: "الدفاع المدني",
    body:
      "تعاوننا مع الدفاع المدني يضمن تطبيق أعلى معايير السلامة في جميع الفعاليات والمشاريع التي نديرها.",
    logo: civilDefenseLogo,
  },
  {
    id: 3,
    title: "أرامكو",
    body:
      "شراكتنا مع أرامكو تعكس ثقة كبيرة في خدماتنا وقدرتنا على تنفيذ مشاريع ضخمة بكفاءة واحترافية.",
    logo: aramcoLogo,
  },
  {
    id: 4,
    title: "الهيئة العليا للأمن الصناعي",
    body:
      "نلتزم بتطبيق متطلبات الهيئة العليا للأمن الصناعي باعتبارها الجهة المرجعية لتنظيم معايير الحماية والأمن في المملكة.",
    logo: hcisLogo,
  },
];

export default function AccreditationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <section
      className="py-20 lg:py-32 bg-muted/30"
      id="accreditations"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            اعتمادنا
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose">
            نفتخر بشراكات واعتمادات رسمية تعكس التزامنا بأعلى معايير الجودة
            والأمن والسلامة في مشاريعنا.
          </p>
        </div>

        {/* نسخة الديسكتوب: أربع كروت جنب بعض */}
        <div className="hidden lg:grid grid-cols-4 gap-8">
          {items.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col items-center text-center p-6 lg:p-8 hover:elevate transition-all"
            >
              <img
                src={item.logo}
                alt={item.title}
                className="h-20 object-contain mb-6"
              />
              <h3 className="font-heading font-semibold text-xl mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.body}
              </p>
            </Card>
          ))}
        </div>

        {/* نسخة الموبايل / التابلت: سلايدر بكروت تتحرك يمين/يسار */}
        <div className="lg:hidden">
          <div className="relative">
            <Card className="flex flex-col items-center text-center p-8">
              <img
                src={items[activeIndex].logo}
                alt={items[activeIndex].title}
                className="h-20 object-contain mb-6"
              />
              <h3 className="font-heading font-semibold text-xl mb-3">
                {items[activeIndex].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {items[activeIndex].body}
              </p>
            </Card>

            {/* أزرار التنقل */}
            <button
              type="button"
              onClick={prev}
              className="absolute top-1/2 -translate-y-1/2 right-2 bg-background/80 border rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute top-1/2 -translate-y-1/2 left-2 bg-background/80 border rounded-full w-9 h-9 flex items-center justify-center shadow-sm"
            >
              ›
            </button>
          </div>

          {/* نقاط توضح أي سلايد شغال */}
          <div className="flex justify-center gap-2 mt-4">
            {items.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  index === activeIndex ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

