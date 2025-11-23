import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import PortfolioLightbox from "@/components/PortfolioLightbox";

import bridge from "@assets/generated_images/Portfolio_bridge_infrastructure_project_9f7e5e8f.png";
import commercial from "@assets/generated_images/Portfolio_commercial_building_project_725d133a.png";
import industrial from "@assets/generated_images/Portfolio_industrial_facility_project_537bf96f.png";
import highway from "@assets/generated_images/Portfolio_highway_infrastructure_project_375900ca.png";
import residential from "@assets/generated_images/Portfolio_residential_complex_project_13498070.png";
import water from "@assets/generated_images/Portfolio_water_facility_project_880f482b.png";

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
    title: "جسر الملك فهد",
    description: "تصميم وإشراف على تنفيذ جسر معلق يربط بين ضفتي المدينة بطول 2.5 كم",
    category: "البنية التحتية",
    image: bridge
  },
  {
    id: 2,
    title: "برج الأعمال المركزي",
    description: "تصميم معماري وإنشائي لمبنى تجاري متعدد الطوابق بارتفاع 45 طابق",
    category: "المباني التجارية",
    image: commercial
  },
  {
    id: 3,
    title: "مجمع الصناعات الثقيلة",
    description: "تصميم وتنفيذ مصنع صناعي متكامل بمساحة 50,000 متر مربع",
    category: "المنشآت الصناعية",
    image: industrial
  },
  {
    id: 4,
    title: "طريق الساحل السريع",
    description: "تصميم شبكة طرق سريعة متعددة المسارات بطول 25 كم",
    category: "البنية التحتية",
    image: highway
  },
  {
    id: 5,
    title: "المجمع السكني الحديث",
    description: "تصميم مجمع سكني متكامل يضم 200 وحدة سكنية مع مرافق خدمية",
    category: "المباني السكنية",
    image: residential
  },
  {
    id: 6,
    title: "محطة معالجة المياه",
    description: "تصميم وتنفيذ محطة معالجة مياه بطاقة إنتاجية 100,000 متر مكعب يومياً",
    category: "البنية التحتية",
    image: water
  }
];

export default function PortfolioGallery() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section className="py-20 lg:py-32 bg-card" id="portfolio">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              معرض المشاريع
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
