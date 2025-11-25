import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "تم إرسال الرسالة بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleWhatsApp = () => {
  const message = encodeURIComponent("مرحبا، أود الاستفسار عن خدماتكم.");
  window.open(`https://wa.link/5liknp?text=${message}`, '_blank');
  };


  return (
    <section className="py-20 lg:py-32 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            تواصل معنا
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-loose">
            نسعد بالتواصل معك والإجابة على استفساراتك
          </p>
        </div>

        <div className="grid lg:grid-cols-[60%_40%] gap-12">
          <Card className="p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم الكامل</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="text-lg"
                  data-testid="input-contact-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="text-lg"
                  data-testid="input-contact-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">رقم الهاتف</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="text-lg"
                  data-testid="input-contact-phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">الرسالة</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="text-lg resize-none"
                  data-testid="input-contact-message"
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto px-12" data-testid="button-submit-contact">
                إرسال
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full md:w-auto gap-3"
                onClick={handleWhatsApp}
                data-testid="button-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5" />
                تواصل عبر واتساب
              </Button>
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">العنوان</h3>
                  <p className="text-muted-foreground leading-loose">
                    الرياض، المملكة العربية السعودية
                    <br />
                    طريق الملك فهد، برج الأعمال
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">الهاتف</h3>
                  <p className="text-muted-foreground" dir="ltr">+966 50 000 0000</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">البريد الإلكتروني</h3>
                  <p className="text-muted-foreground" dir="ltr">info@engineering.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
