import { 
  Store, 
  Users, 
  CreditCard, 
  ShoppingBag, 
  Banknote, 
  FileText, 
  Headphones 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Store,
      title: "Cashback em Lojas Físicas",
      description: "Ganhe dinheiro de volta em milhares de lojas parceiras espalhadas pelo Brasil."
    },
    {
      icon: Users,
      title: "Indicação e Publicidade",
      description: "Convide amigos e receba bônus. Participe de campanhas publicitárias remuneradas."
    },
    {
      icon: CreditCard,
      title: "Conta Digital & PIX",
      description: "Conta gratuita com PIX instantâneo, transferências e gestão financeira completa."
    },
    {
      icon: ShoppingBag,
      title: "Marketplace Integrado",
      description: "Compre produtos com cashback garantido em nosso marketplace exclusivo."
    },
    {
      icon: Banknote,
      title: "Cartão Físico e Virtual",
      description: "Cartões sem anuidade para usar em qualquer lugar do mundo."
    },
    {
      icon: FileText,
      title: "Pagamento de Boletos",
      description: "Pague contas de consumo, impostos e boletos bancários direto pelo app."
    },
    {
      icon: Headphones,
      title: "Atendimento 24h",
      description: "Suporte humano disponível 24 horas por dia, 7 dias por semana."
    }
  ];

  return (
    <section id="funcionalidades" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-section mb-6">
            Funcionalidades <span className="text-primary">Principais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra tudo que o ClickMais oferece para revolucionar sua experiência financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;