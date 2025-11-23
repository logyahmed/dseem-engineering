import { SiLinkedin, SiX, SiFacebook, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading font-bold text-2xl mb-6">الهندسة المتقدمة</h3>
            <p className="text-muted-foreground leading-loose">
              شركة استشارات هندسية متخصصة في تصميم وتنفيذ المشاريع الهندسية الكبرى
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  عن الشركة
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                  المشاريع
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">معلومات الاتصال</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>الرياض، المملكة العربية السعودية</li>
              <li dir="ltr">+966 50 000 0000</li>
              <li dir="ltr">info@engineering.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">تابعنا</h4>
            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover-elevate"
                data-testid="button-social-linkedin"
              >
                <SiLinkedin className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover-elevate"
                data-testid="button-social-twitter"
              >
                <SiX className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover-elevate"
                data-testid="button-social-facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full hover-elevate"
                data-testid="button-social-instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} الهندسة المتقدمة. جميع الحقوق محفوظة.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
