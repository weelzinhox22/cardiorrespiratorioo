import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Wind, Activity, Stethoscope, ArrowRight, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Modules = () => {
  const [hoveredModule, setHoveredModule] = useState<number | null>(null);

  const modules = [
    {
      id: 1,
      title: 'Cirurgias Cardiotorácicas',
      description: 'Compreenda os fundamentos e técnicas avançadas em cirurgias do coração e tórax, incluindo pré e pós-operatório.',
      icon: Stethoscope,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      delay: '0s',
      route: '/modules/cirurgias-cardiotoracicas',
      disabled: false
    },
    {
      id: 2,
      title: 'Reabilitação Pulmonar',
      description: 'Protocolos modernos de reabilitação respiratória para diferentes patologias pulmonares.',
      icon: Wind,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      delay: '0.2s',
      route: '/modules/reabilitacao-pulmonar',
      disabled: false
    },
    {
      id: 3,
      title: 'Reabilitação Cardíaca',
      description: 'Estratégias completas para reabilitação cardiovascular em diferentes fases do tratamento.',
      icon: Heart,
      color: 'from-medical-blue to-medical-teal',
      bgColor: 'from-medical-lightBlue to-medical-lightTeal',
      delay: '0.4s',
      route: '/modules/reabilitacao-cardiaca',
      disabled: true,
      alert: 'Atenção: Este conteúdo não será cobrado na prova.'
    },
    {
      id: 4,
      title: 'Prescrições de Exercícios',
      description: 'Metodologias para prescrição segura e eficaz de exercícios em pacientes cardiorrespiratórios.',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      delay: '0.6s',
      route: '/modules/prescricoes-exercicios',
      disabled: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal pt-16">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Módulos de{' '}
            <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
              Especialização
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Aprofunde seus conhecimentos com conteúdo especializado em fisioterapia cardiorrespiratória.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Card 
                key={module.id}
                className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-gradient-to-br ${module.bgColor} animate-slide-up`}
                style={{ animationDelay: module.delay }}
                onMouseEnter={() => setHoveredModule(module.id)}
                onMouseLeave={() => setHoveredModule(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-center mb-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${module.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-medical-blue group-hover:to-medical-teal group-hover:bg-clip-text transition-all duration-300 text-center">
                    {module.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 text-sm sm:text-base leading-relaxed text-center">
                    {module.description}
                  </CardDescription>
                  
                  {module.alert && (
                    <div className="mt-3 flex items-center justify-center text-amber-600 bg-amber-50 p-2 rounded-lg">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">{module.alert}</span>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex justify-center">
                    {module.disabled ? (
                      <Button 
                        className={`bg-gray-300 text-gray-600 shadow-lg transition-all duration-300`}
                        disabled
                      >
                        Indisponível
                      </Button>
                    ) : (
                      <Link to={module.route}>
                        <Button 
                          className={`bg-gradient-to-r ${module.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${
                            hoveredModule === module.id ? 'translate-x-1' : ''
                          }`}
                        >
                          Acessar
                          <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                            hoveredModule === module.id ? 'translate-x-1' : ''
                          }`} />
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-medical-blue/10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Pronto para testar seus conhecimentos?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Após estudar os módulos, faça nossa prova online com 40 questões especializadas 
              e receba feedback imediato sobre seu desempenho.
            </p>
            <Link to="/quiz">
              <Button className="bg-gradient-to-r from-medical-blue to-medical-teal hover:from-medical-blue/90 hover:to-medical-teal/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                Fazer Prova Online
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
