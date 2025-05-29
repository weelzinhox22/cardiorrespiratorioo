import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Brain, Heart, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Quando o menu estiver aberto, impedir o scroll da página
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  // Detectar scroll para mudar o estilo da navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Limpar o overflow do body quando o componente é desmontado
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const navItems = [
    { name: 'Início', path: '/', icon: Heart },
    { name: 'Módulos', path: '/modules', icon: BookOpen },
    { name: 'Prova Online', path: '/quiz', icon: Brain },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled || isMenuOpen 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-md shadow-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group z-20">
            <div className="bg-gradient-to-r from-medical-blue to-medical-teal p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              FisioCardio Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-4 lg:space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-medical-lightBlue/50 hover:scale-105 ${
                    isActive 
                      ? 'bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-lg' 
                      : 'text-gray-700 hover:text-medical-blue'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none z-50 transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-medical-blue text-white' 
                  : 'bg-medical-lightBlue/30 text-medical-blue hover:bg-medical-lightBlue/60'
              }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menu principal</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ paddingTop: '4rem' }}
      >
        <div className="overflow-y-auto h-full pb-16">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => {
                  setIsMenuOpen(false);
                  document.body.style.overflow = 'auto';
                }}
                className={`flex items-center space-x-3 px-6 py-5 mx-4 my-2 rounded-xl transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-medical-blue to-medical-teal text-white shadow-lg' 
                    : 'text-gray-700 hover:text-medical-blue hover:bg-medical-lightBlue/30'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="h-6 w-6" />
                <span className="text-lg font-medium">{item.name}</span>
              </Link>
            );
          })}
          
          {/* Decorative elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 opacity-10 pointer-events-none">
            <div className="absolute bottom-10 left-10 w-20 h-20 bg-medical-blue rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-16 h-16 bg-medical-teal rounded-full"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
