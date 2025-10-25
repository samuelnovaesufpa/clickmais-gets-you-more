import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O app é gratuito?",
      answer: "Sim, o Click+ é 100% gratuito para download e uso. Não há taxas escondidas, mensalidades ou custos de manutenção."
    },
    {
      question: "Quanto tempo demora para receber o cashback?",
      answer: "O cashback aparece automaticamente na sua carteira logo após a confirmação da compra pela loja parceira, geralmente em poucos segundos."
    },
    {
      question: "Onde posso usar o cartão físico/virtual?",
      answer: "Nossos cartões podem ser usados em qualquer estabelecimento que aceite a bandeira do cartão, tanto no Brasil quanto no exterior."
    },
    {
      question: "Posso transferir meu saldo para outra conta?",
      answer: "Sim, você pode transferir seu saldo via PIX de forma rápida e segura para qualquer conta bancária no Brasil."
    },
    {
      question: "Existe limite de transações?",
      answer: "Não há limite de transações. O uso é ilimitado, respeitando sempre as normas de segurança e compliance financeiro."
    },
    {
      question: "Quais lojas oferecem cashback?",
      answer: "Estamos em fase de expansão, ative sempre seu localizador para buscar as lojas parceiras na cidade e no estado em que você estiver."
    },
    {
      question: "Posso pagar qualquer boleto?",
      answer: "Sim, você pode pagar desde contas de consumo (luz, água, telefone) até boletos bancários e impostos."
    },
    {
      question: "Como funciona a indicação de amigos?",
      answer: "Convide amigos para o app usando seu código de indicação. Você recebe comissões sempre que eles fizerem compras pelo Click+."
    },
    {
      question: "O app tem suporte humano?",
      answer: "Sim, oferecemos suporte humano 24 horas por dia, 7 dias por semana, diretamente integrado no aplicativo."
    },
    {
      question: "Meus dados estão seguros?",
      answer: "Absolutamente. O Click+ usa criptografia de nível bancário e segue todas as práticas de segurança da indústria financeira, incluindo compliance com a LGPD."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-section mb-6">
            Perguntas <span className="text-primary">Frequentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tire suas dúvidas sobre o Click+
          </p>
        </div>

        <div className="animate-fade-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border rounded-xl px-6 hover-lift"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors duration-200">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up">
          <p className="text-muted-foreground mb-6">
            Não encontrou sua resposta? Nosso suporte está disponível 24h
          </p>
          <button className="gradient-orange text-white px-8 py-3 rounded-xl font-medium hover-glow transition-all duration-300">
            Falar com suporte
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;