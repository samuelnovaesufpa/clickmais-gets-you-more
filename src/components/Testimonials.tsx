import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      location: "São Paulo, SP",
      rating: 5,
      comment: "Incrível como consigo economizar fazendo as mesmas compras de sempre. O cashback é real e chega rápido!"
    },
    {
      name: "João Santos", 
      location: "Rio de Janeiro, RJ",
      rating: 5,
      comment: "Uso o cartão para tudo e ainda ganho dinheiro de volta. Sem anuidade e aceito em todos os lugares."
    },
    {
      name: "Ana Costa",
      location: "Belo Horizonte, MG",
      rating: 5,
      comment: "O suporte 24h salvou minha vida quando precisei de ajuda durante um feriado. App perfeito!"
    },
    {
      name: "Carlos Oliveira",
      location: "Porto Alegre, RS",
      rating: 5,
      comment: "Indiquei vários amigos e já ganhei uma boa grana com os bônus. Aplicativo top demais!"
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-section mb-6">
            O que nossos <span className="text-primary">usuários</span> dizem
          </h2>
          <p className="text-xl text-muted-foreground">
            Mais de 100 mil brasileiros já estão economizando com o ClickMais
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-up">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100k+</div>
            <div className="text-muted-foreground">Usuários ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">4.8</div>
            <div className="text-muted-foreground">Avaliação Play Store</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">R$ 2M</div>
            <div className="text-muted-foreground">Em cashback pago</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">5k+</div>
            <div className="text-muted-foreground">Lojas parceiras</div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-6 rounded-2xl bg-card border hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Comment */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>
              
              {/* Author */}
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="mt-16 animate-fade-up">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">
              Aceito em milhares de estabelecimentos
            </h3>
            <p className="text-muted-foreground">
              Parceiros em todo o Brasil confiam no ClickMais
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 opacity-60">
            {['Magazine Luiza', 'Casas Bahia', 'Extra', 'Pão de Açúcar', 'Carrefour', 'Americanas'].map((partner, index) => (
              <div 
                key={index}
                className="h-16 bg-muted rounded-lg flex items-center justify-center font-medium text-sm hover-lift"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;