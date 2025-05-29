import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-16 bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-medical-blue rounded-full animate-float"></div>
        <div className="absolute top-40 right-10 sm:right-32 w-16 sm:w-24 h-16 sm:h-24 bg-medical-teal rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-medical-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-20 pb-10 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Domine a{' '}
              <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                Fisioterapia
              </span>
              <br />
              Cardiorrespiratória
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed animate-fade-in-delayed">
              Plataforma completa de estudos com módulos especializados, questões práticas e 
              conteúdo atualizado para profissionais e estudantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up">
              <Link to="/modules" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-medical-blue to-medical-teal hover:from-medical-blue/90 hover:to-medical-teal/90 text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  Explorar Módulos
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link to="/quiz" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-4 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-105">
                  Fazer Prova Online
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent text-2xl sm:text-3xl font-bold">4</div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">Módulos</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent text-2xl sm:text-3xl font-bold">40+</div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">Questões</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent text-2xl sm:text-3xl font-bold">2025</div>
                <div className="text-gray-600 text-xs sm:text-sm md:text-base font-medium">Atualizado</div>
              </div>
            </div>
          </div>

          {/* Visual Elements - Hidden on small screens, visible on medium and up */}
          <div className="relative hidden sm:block md:animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-blue to-medical-teal rounded-3xl transform rotate-6 animate-pulse-slow"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-medical-lightBlue to-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                    <Heart className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <h3 className="font-bold text-medical-blue">Cardíaca</h3>
                  </div>
                  <div className="bg-gradient-to-br from-medical-lightTeal to-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                    <BookOpen className="h-12 w-12 text-medical-teal mx-auto mb-3" />
                    <h3 className="font-bold text-medical-teal">Pulmonar</h3>
                  </div>
                  <div className="bg-gradient-to-br from-medical-lightBlue to-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                    <Brain className="h-12 w-12 text-medical-blue mx-auto mb-3" />
                    <h3 className="font-bold text-medical-blue">Exercícios</h3>
                  </div>
                  <div className="bg-gradient-to-br from-medical-lightTeal to-white p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
                    <Users className="h-12 w-12 text-medical-teal mx-auto mb-3" />
                    <h3 className="font-bold text-medical-teal">Cirurgias</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Visual Elements - Small Grid for xs screens */}
          <div className="sm:hidden grid grid-cols-2 gap-3 mt-6">
            <div className="bg-gradient-to-br from-medical-lightBlue to-white p-4 rounded-xl text-center">
              <Heart className="h-8 w-8 text-medical-blue mx-auto mb-1" />
              <h3 className="font-bold text-sm text-medical-blue">Cardíaca</h3>
            </div>
            <div className="bg-gradient-to-br from-medical-lightTeal to-white p-4 rounded-xl text-center">
              <BookOpen className="h-8 w-8 text-medical-teal mx-auto mb-1" />
              <h3 className="font-bold text-sm text-medical-teal">Pulmonar</h3>
            </div>
            <div className="bg-gradient-to-br from-medical-lightBlue to-white p-4 rounded-xl text-center">
              <Brain className="h-8 w-8 text-medical-blue mx-auto mb-1" />
              <h3 className="font-bold text-sm text-medical-blue">Exercícios</h3>
            </div>
            <div className="bg-gradient-to-br from-medical-lightTeal to-white p-4 rounded-xl text-center">
              <Users className="h-8 w-8 text-medical-teal mx-auto mb-1" />
              <h3 className="font-bold text-sm text-medical-teal">Cirurgias</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
