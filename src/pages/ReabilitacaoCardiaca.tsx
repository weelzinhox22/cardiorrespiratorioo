import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReabilitacaoCardiaca = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal pt-16">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <Link to="/modules" className="inline-flex items-center text-medical-blue hover:text-medical-teal transition-colors duration-300 mb-4 sm:mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Módulos
          </Link>
          
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-6">
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-medical-blue to-medical-teal shadow-lg sm:mr-6 mb-4 sm:mb-0 mx-auto sm:mx-0 w-16 h-16 sm:w-auto sm:h-auto flex items-center justify-center">
              <Heart className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Reabilitação{' '}
                <span className="bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">
                  Cardíaca
                </span>
              </h1>
              <p className="text-base sm:text-xl text-gray-600">
                Estratégias completas para reabilitação cardiovascular em diferentes fases do tratamento
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-slide-up">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Conteúdo do Módulo</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-sm sm:prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <section>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Introdução à Reabilitação Cardíaca</h3>
                <p>
                  A reabilitação cardíaca é um programa supervisionado que inclui atividade física, educação sobre 
                  saúde do coração e redução do estresse para pessoas com doenças cardíacas. É um componente essencial 
                  do cuidado integral ao paciente cardiopata, com benefícios comprovados na redução da mortalidade, 
                  melhora da qualidade de vida e diminuição de reinternações hospitalares.
                </p>
                <p>
                  Os programas de reabilitação cardíaca são baseados em evidências científicas sólidas e 
                  representam uma intervenção custo-efetiva no tratamento de diversas cardiopatias.
                </p>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Fases da Reabilitação Cardíaca</h3>
                <p>
                  A reabilitação cardíaca é tradicionalmente dividida em quatro fases distintas:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Fase I - Hospitalar</h4>
                    <p>
                      Inicia-se ainda durante a internação hospitalar, com mobilização precoce, exercícios respiratórios 
                      e educação do paciente e familiares sobre a doença cardíaca e mudanças no estilo de vida.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fase II - Ambulatorial Supervisionada</h4>
                    <p>
                      Período de 2-3 meses após a alta hospitalar, com exercícios supervisionados, monitorização 
                      eletrocardiográfica e educação continuada.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fase III - Não Supervisionada</h4>
                    <p>
                      Exercícios realizados em casa ou academia, com acompanhamento periódico da equipe médica 
                      e ajustes no programa conforme necessário.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fase IV - Manutenção</h4>
                    <p>
                      Programa de longo prazo para manutenção dos benefícios obtidos, com foco na prevenção 
                      secundária e qualidade de vida.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Prescrição de Exercícios Cardíacos</h3>
                <p>
                  A prescrição de exercícios deve ser individualizada e baseada na avaliação clínica e 
                  no teste ergométrico. Os componentes incluem:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Frequência:</strong> 3-5 sessões por semana</li>
                  <li><strong>Intensidade:</strong> 40-80% da frequência cardíaca de reserva</li>
                  <li><strong>Duração:</strong> 20-60 minutos por sessão</li>
                  <li><strong>Tipo:</strong> Exercícios aeróbicos (caminhada, bicicleta, natação)</li>
                  <li><strong>Progressão:</strong> Aumento gradual conforme tolerância</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Monitorização e Segurança</h3>
                <p>
                  A segurança é primordial na reabilitação cardíaca. Os aspectos de monitorização incluem:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Monitorização eletrocardiográfica:</strong> Especialmente na Fase II</li>
                  <li><strong>Controle de pressão arterial:</strong> Antes, durante e após exercícios</li>
                  <li><strong>Avaliação de sintomas:</strong> Dor torácica, dispneia, tontura</li>
                  <li><strong>Escala de percepção de esforço:</strong> Controle subjetivo da intensidade</li>
                  <li><strong>Protocolos de emergência:</strong> Equipe treinada em ressuscitação cardiopulmonar</li>
                </ul>
                <p>
                  As contraindicações absolutas incluem angina instável, arritmias não controladas, 
                  estenose aórtica severa e insuficiência cardíaca descompensada.
                </p>
              </section>

              <section>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Educação e Mudanças de Estilo de Vida</h3>
                <p>
                  Além do componente de exercício, a reabilitação cardíaca aborda fatores de risco modificáveis:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Cessação do tabagismo</li>
                  <li>Controle do peso corporal</li>
                  <li>Manejo do diabetes e hipertensão</li>
                  <li>Controle do estresse e aspectos psicológicos</li>
                  <li>Adesão ao tratamento medicamentoso</li>
                  <li>Orientações nutricionais</li>
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReabilitacaoCardiaca;
