import aboutImage from "@assets/generated_images/About_section_team_collaboration_cf3f149e.png";

export default function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-background" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={aboutImage}
              alt="فريق العمل"
              className="rounded-2xl shadow-xl w-full"
              data-testid="img-about"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              عن الشركة
            </h2>
            <div className="w-16 h-1 bg-primary mb-8" />
            <div className="space-y-6 text-lg leading-loose text-muted-foreground">
              <p>
                دسيم هي شركة سعودية متخصصة في تقديم  الاستشارات الهندسية في كل من مجال الامن والسلامة والوقاية من الحريق من اعداد المخططات والاشراف واعداد التقاير واصدار التراخيص وتسليم الموقع للدفاع المدني اصدار شهادة استلام من المكتب الهندسي

              </p>
              <p>
                نحن نقدم حلولاً هندسية متكاملة تشمل التصميم المعماري، الهندسة الإنشائية، والإشراف على التنفيذ. فريقنا المتخصص يضم نخبة من المهندسين ذوي الكفاءات العالية.
              </p>
              <p>
                نلتزم بأعلى معايير الجودة والسلامة في جميع مشاريعنا، ونسعى دائماً لتحقيق رضا عملائنا من خلال تقديم خدمات متميزة تفوق التوقعات.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
