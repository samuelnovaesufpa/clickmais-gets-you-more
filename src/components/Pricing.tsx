import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const features = [
    "Conta digital 100% gratuita",
    "Cartão físico e virtual sem anuidade",
    "PIX ilimitado e gratuito",
    "Cashback em lojas físicas",
    "Marketplace com ofertas exclusivas",
    "Pagamento de boletos sem taxa",
    "Ganhe comissões indicando amigos",
    "Suporte 24h por chat e telefone",
    "Criptografia de nível bancário",
    "App para Android e iOS"
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-section mb-6">
            Planos & <span className="text-primary">Preços</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tudo que você precisa, totalmente gratuito
          </p>
        </div>

        <div className="animate-fade-up">
          {/* Main Pricing Card */}
          <div className="relative max-w-md mx-auto">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="gradient-orange text-white px-6 py-2 rounded-full text-sm font-medium">
                🚀 Mais Popular
              </div>
            </div>
            
            <div className="bg-card border-2 border-primary rounded-2xl p-8 hover-lift">
            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Click+ Gratuito</h3>
                <div className="text-5xl font-bold text-primary mb-2">R$ 0</div>
                <div className="text-muted-foreground">Para sempre</div>
              </div>

              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full gradient-orange text-lg py-6 hover-glow">
                Baixar agora - Grátis
              </Button>
            </div>
          </div>

          {/* Future Plans Teaser */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-muted-foreground bg-card px-6 py-3 rounded-full border">
              <span>🔮</span>
              <span>Em breve: planos premium com benefícios exclusivos</span>
            </div>
          </div>

          {/* No Hidden Fees */}
          <div className="mt-12 p-6 bg-primary/5 rounded-2xl border border-primary/20">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-4">
                <span className="text-primary">Zero</span> taxas escondidas
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div>
                  <div className="font-semibold text-primary mb-1">Sem anuidade</div>
                  <div className="text-muted-foreground">Cartão físico e virtual gratuitos</div>
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1">Sem mensalidade</div>
                  <div className="text-muted-foreground">Conta digital 100% gratuita</div>
                </div>
                <div>
                  <div className="font-semibold text-primary mb-1">Sem surpresas</div>
                  <div className="text-muted-foreground">Total transparência nos custos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;