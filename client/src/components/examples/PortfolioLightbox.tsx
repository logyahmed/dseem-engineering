import PortfolioLightbox from '../PortfolioLightbox';
import bridge from "@assets/generated_images/Portfolio_bridge_infrastructure_project_9f7e5e8f.png";

const mockProject = {
  id: 1,
  title: "جسر الملك فهد",
  description: "تصميم وإشراف على تنفيذ جسر معلق يربط بين ضفتي المدينة بطول 2.5 كم",
  category: "البنية التحتية",
  image: bridge
};

export default function PortfolioLightboxExample() {
  return (
    <PortfolioLightbox
      project={mockProject}
      allProjects={[mockProject]}
      onClose={() => console.log('Close clicked')}
      onNavigate={() => console.log('Navigate clicked')}
    />
  );
}
