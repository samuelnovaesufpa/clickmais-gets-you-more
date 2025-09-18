import { Download, Store, Wallet, CreditCard, Users } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Baixe o app e crie sua conta",
      description: "Download gratuito na Google Play. Cadastro rápido e seguro em poucos minutos."
    },
    {
      icon: Store,
      title: "Ative cashback em lojas parceiras",
      description: "Escolha entre milhares de lojas físicas ou compre no nosso marketplace."
    },
    {
      icon: Wallet,
      title: "Receba ganhos instantâneos",
      description: "Cashback aparece automaticamente na sua carteira após confirmação da compra."
    },
    {
      icon: CreditCard,
      title: "Use cartão, PIX ou pagamentos",
      description: "Acesse sua conta digital, faça transferências e pague boletos."
    },
    {
      icon: Users,
      title: "Indique amigos e multiplique",
      description: "Convide pessoas e receba bônus por cada novo usuário ativo."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-section mb-6">
            Como <span className="text-primary">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cinco passos simples para começar a ganhar dinheiro com o ClickMais
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4 hover-glow">
                    {index + 1}
                  </div>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto hover-lift">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-up">
          <div className="inline-flex items-center space-x-2 text-sm text-muted-foreground mb-4">
            <span>⏱️</span>
            <span>Processo completo em menos de 5 minutos</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="gradient-orange text-white px-8 py-4 rounded-xl font-medium hover-glow transition-all duration-300">
              Começar agora
            </button>
            <button className="border border-border px-8 py-4 rounded-xl font-medium hover-lift transition-all duration-300">
              Ver demonstração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;