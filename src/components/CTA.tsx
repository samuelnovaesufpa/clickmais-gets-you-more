import { Button } from "@/components/ui/button";
import { Download, Bell } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding gradient-dark text-white">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className="animate-fade-up">
          <h2 className="text-section mb-6 text-white">
            Baixe agora e descubra um novo jeito de consumir
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Simples, seguro e vantajoso. Junte-se a mais de 100 mil brasileiros que já estão economizando com o ClickMais.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 hover-glow">
              <Download className="w-5 h-5 mr-2" />
              Baixar na Google Play
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 hover-lift"
            >
              <Bell className="w-5 h-5 mr-2" />
              Receber novidades para iOS
            </Button>
          </div>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-semibold mb-1">Instalação Rápida</div>
              <div className="text-sm text-white/70">Menos de 2 minutos para começar</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">🔒</div>
              <div className="font-semibold mb-1">100% Seguro</div>
              <div className="text-sm text-white/70">Criptografia de nível bancário</div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="text-2xl mb-2">💰</div>
              <div className="font-semibold mb-1">Cashback Imediato</div>
              <div className="text-sm text-white/70">Ganhos na primeira compra</div>
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="inline-flex items-center space-x-6 p-6 bg-white rounded-2xl">
            <div className="w-24 h-24 bg-black rounded-lg flex items-center justify-center">
              <div className="text-white text-xs text-center">QR CODE<br />DOWNLOAD</div>
            </div>
            <div className="text-left text-black">
              <div className="font-semibold mb-1">Escaneie para baixar</div>
              <div className="text-sm text-gray-600">
                Aponte a câmera para o QR code<br />
                e baixe o app instantaneamente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;