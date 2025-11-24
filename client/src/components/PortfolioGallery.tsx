import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import PortfolioLightbox from "@/components/PortfolioLightbox";

import bridge from "@assets/generated_images/diriya-nights.jpg";
import commercial from "@assets/generated_images/groves-night.jpg";
import industrial from "@assets/generated_images/city-walk-jeddah.jpg";
import highway from "@assets/generated_images/Boulevard-World.jpg";
import residential from "@assets/generated_images/Boulevard-city.jpg";
import water from "@assets/generated_images/Yacht-Club.jpg";

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: " ليالي الدرعية",
    description: "تصميم واعتماد المخططات الهندسية لأنظمة الإنذار والإطفاء وفق الكود السعودي.",
    category: "الرياض",
    image: bridge
  },
  {
    id: 2,
    title: "ذا جروفز",
    description: "تصميم أنظمة الإنذار والإطفاء بما يتناسب مع طبيعة الأنشطة المفتوحة",
    category: "الرياض",
    image: commercial
  },
  {
    id: 3,
    title: "سيتي ووك",
    description: "تحديد نقاط التجمع ومخارج الطوارئ بدقة وفق معايير الدفاع المدني السعودي",
    category: "جدة",
    image: industrial
  },
  {
    id: 4,
    title: "بوليفارد ورلد",
    description: "إعداد خطة شاملة لإدارة المخاطر (Integrated Safety & Risk Plan) تغطي كل منطقة من مناطق المشروع.",
    category: "االرياض",
    image: highway
  },
  {
    id: 5,
    title: "بوليفارد سيتي",
    description: "وضع خطة أمن وسلامة متكاملة تغطي جميع مراحل التشغيل والفعاليات",
    category: "االرياض",
    image: residential
  },
  {
    id: 6,
    title: "نادي اليخوت", 

    description: "إعداد خطة طوارئ بحرية وبرية متكاملة (Integrated Marine Safety Plan) تشمل المرسى والمنشآت البرية.اً",
    category: "االرياض",
    image: water
  }
];
export { default as PortfolioGallery } from "./PortfolioGallery";

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="py-20 lg:py-32 bg-card" id="portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
             معرض مشاريع دسيم

            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose">
              نفخر بتقديم مجموعة من أبرز مشاريعنا الهندسية التي نفذناها بنجاح
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer group"
                onClick={() => setSelectedProject(project)}
                data-testid={`card-project-${project.id}`}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <Badge variant="secondary" data-testid={`badge-category-${project.id}`}>
                    {project.category}
                  </Badge>
                  <h3 className="font-heading font-semibold text-xl">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-loose line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <PortfolioLightbox
          project={selectedProject}
          allProjects={projects}
          onClose={() => setSelectedProject(null)}
          onNavigate={setSelectedProject}
        />
      )}
    </>
  );
}
