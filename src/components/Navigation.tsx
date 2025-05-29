
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Brain, Heart } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Início', path: '/', icon: Heart },
    { name: 'Módulos', path: '/modules', icon: BookOpen },
    { name: 'Prova Online', path: '/quiz', icon: Brain },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-medical-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-medical-blue to-medical-teal p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              FisioCardio Pro
            </span>
          </Link>

          <div className="flex space-x-8">
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
