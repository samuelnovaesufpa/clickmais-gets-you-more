import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-background via-background to-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-hero mb-6 leading-tight">
              Seja bem-vindo ao{" "}
              <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                ClickMais
              </span>
            </h1>
            <p className="text-subsection mb-4 text-muted-foreground max-w-2xl">
              onde seu consumo retorna pra você
            </p>
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl">
              Cashback real, conta digital gratuita, marketplace e muito mais — 
              tudo num só app seguro e fácil de usar.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gradient-orange hover-glow text-lg px-8 py-6">
                <Download className="w-5 h-5 mr-2" />
                Baixe no Google Play
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 hover-lift"
              >
                <Play className="w-5 h-5 mr-2" />
                Saiba como funciona
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Gratuito</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Suporte</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Anuidade</div>
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