import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download } from "lucide-react";
import clickmaisLogo from "@/assets/clickmais-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", href: "#inicio" },
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Segurança", href: "#seguranca" },
    { name: "FAQ", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={clickmaisLogo} 
              alt="ClickMais" 
              className="h-8 w-8 lg:h-10 lg:w-10 rounded-lg"
            />
            <span className="text-xl lg:text-2xl font-bold text-foreground">
              Click+
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              App Store
            </Button>
            <Button size="sm" className="gradient-orange">
              <Download className="w-4 h-4 mr-2" />
              Google Play
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  App Store
                </Button>
                <Button size="sm" className="gradient-orange">
                  <Download className="w-4 h-4 mr-2" />
                  Google Play
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;