import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Brain } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Módulos Especializados',
      description: 'Conteúdo estruturado em 4 módulos principais com foco em fisioterapia cardiorrespiratória.',
      delay: '0s'
    },
    {
      icon: Brain,
      title: 'Prova Online',
      description: 'Sistema de avaliação com 40+ questões e feedback imediato para testar seus conhecimentos.',
      delay: '0.2s'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal">
      <Navigation />
      <Hero />
      
      {/* Features Section */}
      <section className="py-10 sm:py-16 md:py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              Desenvolvido com base{' '}
              <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                nos slides da professora Elóa Queiroz
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              Desenvolvido para oferecer a melhor experiência de aprendizado em fisioterapia cardiorrespiratória.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm animate-slide-up group mx-2 sm:mx-0"
                  style={{ animationDelay: feature.delay }}
                >
                  <CardHeader className="pt-6 pb-2 px-4 sm:px-6">
                    <div className="mx-auto mb-3 sm:mb-4 p-3 sm:p-4 bg-gradient-to-r from-medical-blue to-medical-teal rounded-2xl w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-medical-blue transition-colors duration-300">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-4 sm:px-6 pb-6">
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
              <div className="bg-gradient-to-r from-medical-blue to-medical-teal p-1.5 sm:p-2 rounded-lg">
                <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold">FisioCardio Pro</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
              Plataforma de estudos especializada em fisioterapia cardiorrespiratória
            </p>
            <div className="border-t border-gray-800 pt-4 sm:pt-6">
              <p className="text-xs sm:text-sm text-gray-400">
                © 2025 FisioCardio Pro. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
