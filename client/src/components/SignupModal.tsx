import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2 } from "lucide-react";

interface SignupModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SignupModal({ open, onOpenChange }: SignupModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signup submitted:', formData);
    setSubmitted(true);
    toast({
      title: "تم التسجيل بنجاح!",
      description: "شكراً لاشتراكك، سنتواصل معك قريباً",
    });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ email: "", phone: "", consent: false });
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md" data-testid="dialog-signup">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading text-center">
                اشترك للحصول على آخر التحديثات
              </DialogTitle>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">البريد الإلكتروني *</Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="email@example.com"
                  dir="ltr"
                  data-testid="input-signup-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-phone">رقم الهاتف *</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  placeholder="+966 50 000 0000"
                  dir="ltr"
                  data-testid="input-signup-phone"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                  required
                  data-testid="checkbox-consent"
                />
                <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                  أوافق على تلقي الرسائل الإلكترونية والرسائل النصية من الشركة
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={!formData.consent}
                data-testid="button-submit-signup"
              >
                اشترك الآن
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                يمكنك إلغاء الاشتراك في أي وقت
              </p>
            </form>
          </>
        ) : (
          <div className="py-12 text-center space-y-6" data-testid="success-message">
            <CheckCircle2 className="w-16 h-16 text-primary mx-auto" />
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">تم التسجيل بنجاح!</h3>
              <p className="text-muted-foreground">شكراً لاشتراكك معنا</p>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
