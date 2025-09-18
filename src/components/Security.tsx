import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Criptografia Bancária",
      description: "Dados protegidos com criptografia de nível bancário em trânsito e em repouso."
    },
    {
      icon: Lock,
      title: "Política Transparente",
      description: "Política de privacidade clara e acessível. Você sabe exatamente como seus dados são usados."
    },
    {
      icon: Eye,
      title: "Sem Compartilhamento",
      description: "Seus dados nunca são compartilhados com terceiros sem seu consentimento explícito."
    },
    {
      icon: UserCheck,
      title: "Controle Total",
      description: "Você tem controle completo sobre seus dados e pode gerenciar suas preferências a qualquer momento."
    }
  ];

  return (
    <section id="seguranca" className="section-padding gradient-dark text-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-section mb-6 text-white">
            Segurança & <span className="text-primary">Privacidade</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Sua segurança é nossa prioridade. Protegemos seus dados com a mesma tecnologia usada pelos maiores bancos do mundo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <div 
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-6 hover-lift">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Security Certifications */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 animate-fade-up">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Certificações e Compliance
            </h3>
            <p className="text-white/70">
              Seguimos os mais rigorosos padrões de segurança da indústria financeira
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl mb-2">🏦</div>
              <div className="font-semibold text-white mb-1">LGPD</div>
              <div className="text-sm text-white/70">Lei Geral de Proteção de Dados</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🔐</div>
              <div className="font-semibold text-white mb-1">SSL/TLS</div>
              <div className="text-sm text-white/70">Criptografia de ponta a ponta</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">✅</div>
              <div className="font-semibold text-white mb-1">ISO 27001</div>
              <div className="text-sm text-white/70">Gestão de Segurança da Informação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;