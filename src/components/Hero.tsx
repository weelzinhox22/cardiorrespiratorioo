
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Brain, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 bg-medical-blue rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-medical-teal rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-medical-green rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Domine a{' '}
              <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                Fisioterapia
              </span>
              <br />
              Cardiorrespiratória
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-delayed">
              Plataforma completa de estudos com módulos especializados, questões práticas e 
              conteúdo atualizado para profissionais e estudantes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
              <Link to="/modules">
                <Button className="bg-gradient-to-r from-medical-blue to-medical-teal hover:from-medical-blue/90 hover:to-medical-teal/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                  Explorar Módulos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link to="/quiz">
                <Button variant="outline" className="border-2 border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105">
                  Fazer Prova Online
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent text-3xl font-bold">4</div>
                <div className="text-gray-600 font-medium">Módulos</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent text-3xl font-bold">40+</div>
                <div className="text-gray-600 font-medium">Questões</div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent text-3xl font-bold">2025</div>
                <div className="text-gray-600 font-medium">Atualizado</div>
              </div>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
