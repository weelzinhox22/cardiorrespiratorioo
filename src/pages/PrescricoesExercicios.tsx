import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrescricoesExercicios = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <Link to="/modules" className="inline-flex items-center text-medical-blue hover:text-medical-teal transition-colors duration-300 mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar aos Módulos
          </Link>
          
          <div className="flex items-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg mr-6">
              <Activity className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Prescrições de{' '}
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  Exercícios
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Metodologias para prescrição segura e eficaz de exercícios em pacientes cardiorrespiratórios
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Conteúdo do Módulo</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Aula de cárdio Prescrição para cardiopata</h3>
                <p>
                  Sejam bem-vindos à nossa aula sobre prescrição de exercícios para pacientes cardiopatas, baseada nas diretrizes e informações contidas neste material.
                </p>
                <p>
                  Primeiramente, é fundamental entendermos que a reabilitação cardíaca, conforme definida pela Organização Mundial da Saúde, representa um conjunto de atividades essenciais para assegurar que pacientes com cardiopatias possam se reintegrar à comunidade e manter uma vida ativa e produtiva. O objetivo principal é permitir que esses pacientes reconquistem uma posição normal na sociedade, através de seu próprio esforço.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Avaliação do Paciente</h3>
                <p>
                  Para iniciarmos o processo de reabilitação, a avaliação do paciente é crucial. Precisamos realizar uma anamnese estruturada e detalhada, coletando o máximo de informações relevantes. Isso inclui dados como idade, sexo, ocupação, estado civil, comorbidades, medicamentos em uso, hábitos de vida e rotina atual. Além disso, é importante investigar a história clínica do paciente, suas queixas e sua funcionalidade. Não devemos ter pressa nessa etapa, pois ela é fundamental para o sucesso da reabilitação.
                </p>
                <p>
                  Um aspecto importante da avaliação é a determinação da classe funcional do paciente, utilizando a classificação da New York Heart Association (NYHA). Essa classificação nos ajuda a entender o nível de limitação física do paciente:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>NYHA I: Sem limitação física. O cansaço surge apenas aos grandes esforços.</li>
                  <li>NYHA II: Limitação física leve. O cansaço aparece aos esforços moderados.</li>
                  <li>NYHA III: Limitação física moderada. Dispneia surge aos pequenos esforços.</li>
                  <li>NYHA IV: Limitação física grave. Sintomas presentes mesmo em repouso ou aos mínimos esforços.</li>
                </ul>
                <p>
                  É importante lembrar que, quanto mais grave a condição do paciente, mais instável ele estará e maior será o nível de cuidado necessário.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Avaliação Funcional</h3>
                <p>
                  A avaliação funcional também é indispensável. Um dos testes mais utilizados é o Teste de Caminhada de 6 Minutos (TC6m). Esse teste fornece informações valiosas sobre o prognóstico, a prescrição de exercícios e a evolução do paciente. Devemos considerar alguns pontos importantes no TC6m:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Uma distância total percorrida (DT) menor que 300 metros geralmente indica um mau prognóstico.</li>
                  <li>A velocidade média durante o teste pode ser calculada e utilizada para monitorar a evolução do paciente.</li>
                  <li>A redução da frequência cardíaca (FC) no primeiro minuto após o teste, quando maior que 10 bpm, indica um bom prognóstico.</li>
                  <li>A FC no sexto minuto do teste deve ser comparada com a FC máxima, e a percepção de esforço (utilizando a escala de Borg) deve estar entre 6 e 8.</li>
                </ul>
                <p>
                  Além do TC6m, outros testes podem ser utilizados, como o Teste de Sentar e Levantar (TSL). Um tempo maior que 15 segundos para realizar 5 repetições do TSL pode indicar fraqueza muscular ou sarcopenia.
                </p>
                <p>
                  O teste de 1RM (uma repetição máxima) é útil para avaliar a carga máxima suportada pelo paciente e estipular a carga de treino adequada, geralmente prescrevendo entre 40% e 80% da carga máxima. A reavaliação e a verificação dos resultados são importantes para ajustar a prescrição e monitorar o progresso do paciente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Monitorização do Esforço</h3>
                <p>
                  Para monitorar a percepção de esforço do paciente durante o exercício, podemos utilizar escalas como a de Borg ou a escala OMNI. A escala de Borg avalia o esforço cardiorrespiratório, enquanto a escala OMNI avalia o esforço muscular.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prescrição de Exercícios</h3>
                <p>
                  Ao prescrevermos exercícios, devemos considerar alguns pontos importantes:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <strong>Exercícios Resistidos:</strong> Promovem adaptações neurais, musculares e vasculares. A sobrecarga pressórica será maior quanto maior o grupo muscular envolvido e o número de repetições. Geralmente, são recomendados exercícios monoarticulares, duas vezes por semana, focando nos membros superiores e inferiores.
                  </li>
                  <li>
                    <strong>Exercícios Cíclicos:</strong> Elevam substancialmente a FC. Em pacientes mais graves, o treino em esteira pode ser contraindicado.
                  </li>
                  <li>
                    <strong>Treinamento Muscular Inspiratório:</strong> A fraqueza dos músculos inspiratórios é comum em pacientes com insuficiência cardíaca (IC) e está associada à redução da capacidade funcional, prejuízos na qualidade de vida e pior prognóstico. O treinamento desses músculos pode trazer benefícios significativos.
                  </li>
                </ul>
                <p>
                  É crucial individualizar a prescrição de exercícios, considerando as características e necessidades de cada paciente. O princípio da individualidade na fisiologia do exercício reconhece que cada indivíduo responde de forma distinta aos estímulos, mesmo com as mesmas cargas e tipos de treino.
                </p>
                <p>
                  Além disso, é importante considerar a interação entre a contração muscular, a oferta de oxigênio e a ventilação. Um músculo treinado suporta mais carga e exige menos trabalho do sistema cardiorrespiratório, sendo mais eficiente na absorção de oxigênio.
                </p>
                <p>
                  Finalmente, é fundamental lembrar que o exercício físico, quando bem prescrito, atua como um cardioprotetor.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Estudo de Caso</h3>
                <p>
                  Em relação ao caso clínico da paciente M.C.P., de 72 anos, com diagnóstico de IC, hipertensão e sedentária, a prescrição de exercícios deve ser cuidadosa e individualizada. É importante considerar suas dificuldades em realizar as atividades de vida diária (AVDs) devido ao cansaço. Iniciar com exercícios de baixa intensidade e progressão gradual é essencial para garantir a segurança e adesão da paciente ao programa de reabilitação.
                </p>
                <p>
                  Espero que esta aula tenha sido esclarecedora e que as informações apresentadas sejam úteis na prática clínica de vocês. Lembrem-se sempre da importância de uma avaliação criteriosa e individualizada para garantir o sucesso da reabilitação cardíaca de seus pacientes.
                </p>
              </section>
              
              <section className="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Assimile Melhor</h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-gray-900">Parâmetros Fisiológicos para Monitoramento</h4>
                    <p>
                      Durante a prescrição de exercícios para cardiopatas, é fundamental monitorar alguns parâmetros fisiológicos específicos:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Frequência cardíaca de repouso e máxima (FC)</li>
                      <li>Pressão arterial antes, durante e após o exercício (PA)</li>
                      <li>Saturação periférica de oxigênio (SpO2) - deve ser mantida acima de 90%</li>
                      <li>Duplo produto (FC x PA sistólica) - indicador de trabalho cardíaco</li>
                      <li>Variabilidade da frequência cardíaca (VFC) - marcador de adaptação autonômica</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Zonas de Treinamento Seguras</h4>
                    <p>
                      Para pacientes cardiopatas, recomenda-se trabalhar nas seguintes zonas de intensidade:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Fase inicial: 40-50% da FC de reserva ou 11-12 na escala de Borg (6-20)</li>
                      <li>Fase de desenvolvimento: 50-70% da FC de reserva ou 12-14 na escala de Borg</li>
                      <li>Fase de manutenção: 60-80% da FC de reserva ou 13-15 na escala de Borg</li>
                    </ul>
                    <p className="mt-2">
                      Lembre-se que estas zonas devem ser ajustadas individualmente, considerando o uso de medicamentos que afetam a FC, como betabloqueadores.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Progressão do Treinamento</h4>
                    <p>
                      A progressão do treinamento para cardiopatas deve seguir o princípio FITT-VP:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Frequência:</strong> Iniciar com 2-3 sessões semanais, progredindo para 3-5 sessões</li>
                      <li><strong>Intensidade:</strong> Aumentar gradualmente conforme tolerância do paciente</li>
                      <li><strong>Tempo:</strong> Iniciar com 5-10 minutos, progredindo até 20-60 minutos por sessão</li>
                      <li><strong>Tipo:</strong> Combinar exercícios aeróbicos, resistidos e de flexibilidade</li>
                      <li><strong>Volume:</strong> Aumentar primeiro a duração, depois a frequência e por último a intensidade</li>
                      <li><strong>Progressão:</strong> Incrementos de 5-10% a cada 1-2 semanas, conforme adaptação</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Sinais de Alerta Durante o Exercício</h4>
                    <p>
                      É essencial orientar o paciente a reconhecer sinais que indicam a necessidade de interromper o exercício:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Dor ou desconforto no peito, braço, pescoço ou mandíbula</li>
                      <li>Tontura, vertigem ou sensação de desmaio</li>
                      <li>Dispneia desproporcional ao esforço realizado</li>
                      <li>Fadiga extrema ou incomum</li>
                      <li>Palpitações ou sensação de batimentos irregulares</li>
                      <li>Náuseas ou vômitos durante o exercício</li>
                      <li>Palidez ou sudorese fria excessiva</li>
                      <li>Confusão mental ou desorientação</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Benefícios Específicos da Reabilitação Cardíaca</h4>
                    <p>
                      A reabilitação cardíaca baseada em exercícios proporciona diversos benefícios comprovados cientificamente:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Redução de 20-30% na mortalidade cardiovascular</li>
                      <li>Melhora de 11-36% na capacidade funcional</li>
                      <li>Redução de 28-31% nas readmissões hospitalares</li>
                      <li>Melhora significativa na qualidade de vida relacionada à saúde</li>
                      <li>Redução de sintomas de ansiedade e depressão</li>
                      <li>Melhora do perfil lipídico e controle glicêmico</li>
                      <li>Redução da inflamação sistêmica</li>
                      <li>Melhora da função endotelial e da perfusão miocárdica</li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrescricoesExercicios;
