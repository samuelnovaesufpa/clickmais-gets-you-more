import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    "Empresa": [
      "Sobre nós",
      "Carreiras", 
      "Imprensa",
      "Blog"
    ],
    "Produto": [
      "Funcionalidades",
      "Segurança",
      "API",
      "Status"
    ],
    "Suporte": [
      "Central de Ajuda",
      "FAQ",
      "Contato",
      "Suporte Técnico"
    ],
    "Legal": [
      "Política de Privacidade",
      "Termos de Uso", 
      "Cookies",
      "LGPD"
    ]
  };

  return (
    <footer id="contato" className="bg-clickmais-black text-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">C+</span>
                </div>
                <span className="text-2xl font-bold">ClickMais</span>
              </div>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                O super app que revoluciona sua experiência financeira. 
                Cashback, conta digital e marketplace - tudo em um só lugar.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <Mail className="w-4 h-4" />
                  <span>contato@clickmais.com.br</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <Phone className="w-4 h-4" />
                  <span>0800 123 4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-white/70">
                  <MapPin className="w-4 h-4" />
                  <span>São Paulo, SP - Brasil</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              © 2024 ClickMais. Todos os direitos reservados.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 text-white/70 hover:text-white transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-white/70 hover:text-white transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-white/70 hover:text-white transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>

            {/* Legal */}
            <div className="text-white/70 text-sm">
              CNPJ: 12.345.678/0001-90
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;