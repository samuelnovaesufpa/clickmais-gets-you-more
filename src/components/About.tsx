const About = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className="animate-fade-up">
          <h2 className="text-section mb-8">
            Sobre o <span className="text-primary">Click+</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-card border hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cashback Real</h3>
              <p className="text-muted-foreground">
                Somos o primeiro banco digital no Brasil a oferecer cashback instantâneo e geolocalizado, 
                diretamente na sua conta pix, ao consumir em nossos parceiros locais.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Conta Digital</h3>
              <p className="text-muted-foreground">
                Conta gratuita com PIX, cartão sem anuidade e pagamento de boletos.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl bg-card border hover-lift">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Segurança Total</h3>
              <p className="text-muted-foreground">
                Criptografia bancária e suporte 24h para sua tranquilidade.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              O <strong className="text-foreground">Click+</strong> é o super app que revoluciona 
              a forma como você consome e gerencia seu dinheiro. Nossa missão é colocar poder e liberdade 
              nas mãos dos nossos consumidores e parceiros.
            </p>
            <p>
              Com foco na <strong className="text-foreground">inovação</strong>, 
              <strong className="text-foreground"> economia</strong> e 
              <strong className="text-foreground"> segurança</strong>, oferecemos uma experiência 
              completa que combina ecomerce, marketplace, cashback, publicidade e serviços bancários em uma única plataforma.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;