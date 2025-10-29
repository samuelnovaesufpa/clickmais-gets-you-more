import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-primary/5 via-orange-500/5 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(254,156,2,0.08),transparent_50%)]"></div>
      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-hero mb-6 leading-tight">
              Seja bem-vindo ao{" "}
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Click+
              </span>
            </h1>
            <p className="text-subsection mb-4 font-semibold">
              O super app mais inovador do Brasil.
            </p>
            <p className="text-lg mb-4 text-muted-foreground max-w-2xl">
              Cashback instantâneo e comércio local digitalizado.
            </p>
            <p className="text-base mb-6 text-muted-foreground max-w-2xl">
              5 mercados em um só lugar: E-commerce, Marketplace, Cashback, Publicidade e Open Banking.
              Economize tempo e dinheiro. O poder do consumo inteligente. Na palma das suas mãos.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-orange hover-glow text-lg px-8 py-6" asChild>
                <a href="https://play.google.com/store/apps/details?id=br.com.clickmais" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  Baixe no Google Play
                </a>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="text-center lg:text-left bg-clickmais-black/90 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-white">Gratuito</div>
              </div>
              <div className="text-center lg:text-left bg-clickmais-black/90 p-4 rounded-xl">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-white">Suporte</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
              <img
                src={heroPhone}
                alt="ClickMais App"
                className="relative w-full max-w-md mx-auto hover-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;