import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Project } from "./PortfolioGallery";

interface PortfolioLightboxProps {
  project: Project;
  allProjects: Project[];
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

export default function PortfolioLightbox({
  project,
  allProjects,
  onClose,
  onNavigate
}: PortfolioLightboxProps) {
  const currentIndex = allProjects.findIndex(p => p.id === project.id);
  const hasNext = currentIndex < allProjects.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = () => {
    if (hasNext) {
      onNavigate(allProjects[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (hasPrev) {
      onNavigate(allProjects[currentIndex - 1]);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl p-0 gap-0" data-testid="dialog-portfolio-lightbox">
        <div className="relative">
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 left-4 z-10 bg-black/50 text-white hover:bg-black/70 rounded-full"
            onClick={onClose}
            data-testid="button-close-lightbox"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="grid lg:grid-cols-[60%_40%]">
            <div className="relative bg-black">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain min-h-[400px] max-h-[600px]"
                data-testid="img-lightbox-project"
              />
              
              {hasPrev && (
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full w-12 h-12"
                  onClick={handlePrev}
                  data-testid="button-prev-project"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              )}
              
              {hasNext && (
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full w-12 h-12"
                  onClick={handleNext}
                  data-testid="button-next-project"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>
              )}
            </div>

            <div className="p-8 lg:p-12 space-y-6">
              <Badge variant="secondary" data-testid="badge-lightbox-category">
                {project.category}
              </Badge>
              <h2 className="font-heading font-bold text-3xl lg:text-4xl">
                {project.title}
              </h2>
              <p className="text-lg leading-loose text-muted-foreground">
                {project.description}
              </p>
              
              <div className="pt-6 border-t space-y-4">
                <h3 className="font-semibold text-lg">تفاصيل المشروع</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• التصميم المعماري والإنشائي الكامل</p>
                  <p>• الإشراف على التنفيذ</p>
                  <p>• ضمان الجودة والمطابقة للمواصفات</p>
                  <p>• التسليم في الموعد المحدد</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
