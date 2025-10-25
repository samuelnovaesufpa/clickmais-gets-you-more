import { 
  Store, 
  ShoppingBag, 
  Wallet,
  Megaphone,
  CreditCard
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Store,
      title: "E-commerce",
      description: "Nossos parceiros têm acesso a lojas virtuais exclusivas com tecnologia avançada e soluções de pagamentos inovadoras, além de um banco que oferece taxas competitivas para impulsionar seu negócio."
    },
    {
      icon: ShoppingBag,
      title: "Marketplace Integrado",
      description: "Empresas locais, tudo em um só lugar, na palma da sua mão, com cashback garantido em nosso marketplace exclusivo."
    },
    {
      icon: Wallet,
      title: "Cashback em Lojas Físicas",
      description: "Ganhe dinheiro de volta comprando em nossos parceiros locais. Somos o primeiro do Brasil a devolver cashback instantâneo liberado no seu pix."
    },
    {
      icon: Megaphone,
      title: "Publicidade e Indicação",
      description: "Participe de campanhas publicitárias locais remuneradas. Convide amigos e ganhe comissões sempre que eles fizerem compras nos nossos parceiros."
    },
    {
      icon: CreditCard,
      title: "Conta Digital e Pix",
      description: "Conta digital com Cashback e comissões instantâneo, transferência e gestão financeira completa."
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
            Descubra tudo que o Click+ oferece para revolucionar sua experiência financeira
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
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