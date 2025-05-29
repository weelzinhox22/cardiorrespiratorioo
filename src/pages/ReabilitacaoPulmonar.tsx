import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ReabilitacaoPulmonar = () => {
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
            <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg sm:mr-6 mb-4 sm:mb-0 mx-auto sm:mx-0 w-16 h-16 sm:w-auto sm:h-auto flex items-center justify-center">
              <Wind className="h-8 w-8 sm:h-12 sm:w-12 text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Reabilitação{' '}
                <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Pulmonar
                </span>
              </h1>
              <p className="text-base sm:text-xl text-gray-600">
                Protocolos modernos de reabilitação respiratória para diferentes patologias pulmonares
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
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">Definição e Abordagem Multidisciplinar</h3>
                <p>
                  A reabilitação pulmonar é definida como uma terapia complexa e multidisciplinar, que oferece um tratamento amplo e integrado para pacientes com doenças pulmonares crônicas. Essa abordagem engloba tanto a terapia física quanto o suporte emocional, consistindo geralmente em uma combinação de exercícios e educação. A reabilitação pulmonar se caracteriza por uma continuidade multidimensional de serviços, direcionados tanto aos pacientes quanto às suas famílias, e é conduzida por uma equipe de especialistas que atuam de forma interdisciplinar. O propósito fundamental é alcançar e manter o máximo nível de independência e funcionalidade do indivíduo.
                </p>
                <p>
                  A reabilitação busca restaurar o indivíduo ao seu completo potencial clínico, mental, emocional, social e vocacional, conforme definido pelo Conselho de Reabilitação em 1942.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Objetivos da Reabilitação Pulmonar</h3>
                <p>
                  O principal objetivo da reabilitação pulmonar é maximizar a independência funcional do indivíduo em suas atividades de vida diária e minimizar a dependência de outras pessoas ou órgãos comunitários. Dentro desse contexto, avaliamos e iniciamos, quando apropriado, o treinamento físico para aumentar a tolerância ao exercício e encorajar o gasto de energia de forma eficiente. Adicionalmente, proporcionamos sessões educativas a pacientes, familiares e outros envolvidos, abordando o processo da doença, a medicação e as técnicas terapêuticas relevantes.
                </p>
                <p>
                  O paciente com doença pulmonar crônica frequentemente entra em um ciclo vicioso de inatividade, e o objetivo da reabilitação pulmonar é reverter essa tendência, promovendo a atividade física e melhorando a qualidade de vida.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ciclo Vicioso da DPOC</h3>
                <p>
                  Na Doença Pulmonar Obstrutiva Crônica (DPOC), ocorre uma limitação do fluxo expiratório que leva ao aprisionamento aéreo e à hiperinsuflação. Esse processo resulta em falta de ar e diminuição da capacidade de exercício, o que leva ao descondicionamento e à inatividade. Esse ciclo vicioso contribui para a progressão da doença, incapacidade e, em casos mais graves, morte precoce.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tratamento e Benefícios</h3>
                <p>
                  O tratamento da DPOC tem como ponto fundamental a broncodilatação, que proporciona uma melhor capacidade para executar as atividades da vida diária. A reabilitação pulmonar tem como objetivos reduzir as exacerbações, melhorar a capacidade ao exercício, melhorar a percepção de esforço, melhorar a qualidade de vida e reduzir a mortalidade.
                </p>
                <p>
                  Os benefícios da reabilitação pulmonar são vastos e incluem a melhora da tolerância ao exercício, a melhora da qualidade de vida, a redução da ansiedade e da depressão, a melhora da habilidade em realizar atividades de vida diária e a redução da dispneia.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Indicações e Pacientes Elegíveis</h3>
                <p>
                  A reabilitação pulmonar é indicada para pacientes com doença pulmonar crônica que apresentam sintomas persistentes, diminuição da tolerância ao exercício e restrição nas atividades de vida diária, apesar do tratamento médico convencional. As principais condições incluem asma, Doença Pulmonar Obstrutiva Crônica (DPOC), fibrose cística, câncer de pulmão e pós-transplante de pulmão.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">GOLD – Global Initiative For Chronic Obstructive Lung Disease</h3>
                <p>
                  O GOLD (Global Initiative for Chronic Obstructive Lung Disease) é um documento de referência para a prevenção, diagnóstico, classificação e manejo da Doença Pulmonar Obstrutiva Crônica. Ele é revisado anualmente e utilizado por profissionais da saúde em todo o mundo para orientar a prática clínica. O VEF1 (Volume Expiratório Forçado no 1º segundo) é um parâmetro essencial avaliado na espirometria, com valores médios que dependem do sexo e da idade da pessoa, variando geralmente de 2,5 a 4,5 litros.
                </p>
                <p>
                  A classificação da gravidade da DPOC baseada no VEF1 pós-broncodilatador é fundamental para o manejo da doença. Os estágios são classificados da seguinte forma:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>GOLD 1 (Leve): VEF1 ≥ 80% do previsto</li>
                  <li>GOLD 2 (Moderado): VEF1 entre 50% e 80% do previsto</li>
                  <li>GOLD 3 (Grave): VEF1 entre 30% e 50% do previsto</li>
                  <li>GOLD 4 (Muito Grave): VEF1 &lt; 30% do previsto</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Programa de Reabilitação</h3>
                <p>
                  A principal causa da DPOC é o tabagismo, que leva à liberação de substâncias quimiostáticas, estimulação do processo inflamatório e inibição de mecanismos protetores do pulmão. Portanto, a interrupção do hábito de fumar é uma intervenção fundamental no tratamento da DPOC.
                </p>
                <p>
                  O papel da fisioterapia é crucial no programa de reabilitação. As responsabilidades do fisioterapeuta incluem a avaliação funcional do paciente, a definição de objetivos e metas realistas, a prescrição e o acompanhamento de exercícios, e o fornecimento de orientações de manutenção para garantir a continuidade dos benefícios a longo prazo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Efeitos do Exercício</h3>
                <p>
                  O exercício físico é uma parte integrante dos programas de reabilitação pulmonar para pacientes com DPOC, com evidência "A" no tratamento, conforme demonstrado em consensos sobre a doença. Através de um programa de reabilitação pulmonar, um público específico de pacientes é favorecido quanto aos mecanismos fisiológicos que levam à melhora da dispneia e da qualidade de vida, aumentando a força e a resistência muscular.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Prescrição do Exercício</h3>
                <p>
                  Os tipos de treinamento incluem treinamento de força (MMSS e MMII), treinamento de resistência muscular, treinamento aeróbico, treinamento de flexibilidade e treinamento muscular respiratório.
                </p>
                <p>
                  Na prescrição do exercício aeróbico e resistido, é fundamental pautar-se na sintomatologia do paciente e na saturação periférica de oxigênio (SpO2). A intensidade, o volume e a frequência corretos devem ser aplicados, evitando a sobrecarga do paciente. As avaliações da capacidade física são essenciais para garantir que o paciente não seja subestimado ou superestimado durante o programa de exercícios. O exercício resistido pode ser realizado com pesos livres, faixas elásticas e aparelhos de musculação, especialmente para fortalecer músculos com fraqueza muscular e resistência diminuída.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Componentes Educacionais</h3>
                <p>
                  Os componentes educacionais são cruciais e incluem informações sobre a utilização de medicamentos, orientações sobre dieta e nutrição adequadas, retreinamento da respiração, técnicas de conservação de energia e suporte emocional/psicossocial.
                </p>
                <p>
                  Espero que esta aula detalhada tenha fornecido uma compreensão abrangente da reabilitação pulmonar.
                </p>
              </section>
              
              <section className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Entenda Melhor</h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-gray-900">Técnicas Respiratórias Específicas</h4>
                    <p>
                      Além dos exercícios físicos, existem técnicas respiratórias específicas que são fundamentais no programa de reabilitação pulmonar:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Respiração diafragmática:</strong> Fortalece o principal músculo respiratório e melhora a eficiência ventilatória</li>
                      <li><strong>Respiração com lábios franzidos:</strong> Evita o colapso das vias aéreas durante a expiração e reduz a frequência respiratória</li>
                      <li><strong>Respiração em tempos:</strong> Controla o ritmo respiratório, com inspiração em 2 tempos e expiração em 4 tempos</li>
                      <li><strong>Expansão torácica localizada:</strong> Melhora a ventilação em áreas específicas do pulmão</li>
                      <li><strong>Técnica de expiração forçada (huffing):</strong> Auxilia na mobilização de secreções sem aumentar a pressão intratorácica</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Monitoramento da Saturação de Oxigênio</h4>
                    <p>
                      Durante o exercício em pacientes com doenças respiratórias, o monitoramento da SpO2 é fundamental:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Manter SpO2 ≥ 90% durante todo o exercício</li>
                      <li>Queda de SpO2 &gt; 4% do valor basal indica necessidade de reduzir a intensidade</li>
                      <li>SpO2 &lt; 88% pode indicar necessidade de suplementação de O2 durante o exercício</li>
                      <li>Recuperação lenta da SpO2 após o exercício (&gt;2 minutos) sugere baixa reserva respiratória</li>
                    </ul>
                    <p className="mt-2">
                      Em pacientes com hipoxemia induzida pelo exercício, a oxigenoterapia durante o treinamento pode permitir maior intensidade de trabalho e melhores resultados.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Estratégias para Aumentar a Adesão ao Programa</h4>
                    <p>
                      A adesão ao programa de reabilitação pulmonar é um desafio significativo. Algumas estratégias eficazes incluem:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Estabelecimento de metas realistas e mensuráveis em conjunto com o paciente</li>
                      <li>Feedback regular sobre o progresso e os benefícios alcançados</li>
                      <li>Adaptação do programa às preferências e necessidades individuais</li>
                      <li>Inclusão de familiares no processo educativo</li>
                      <li>Utilização de tecnologia (aplicativos, monitoramento remoto) para acompanhamento</li>
                      <li>Grupos de apoio e sessões em grupo para promover socialização e motivação</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Reabilitação Pulmonar em Condições Específicas</h4>
                    <p>
                      Além da DPOC, a reabilitação pulmonar deve ser adaptada para outras condições respiratórias:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Fibrose pulmonar:</strong> Foco em exercícios de menor intensidade, monitoramento rigoroso da SpO2, técnicas de respiração profunda e expansão torácica</li>
                      <li><strong>Bronquiectasias:</strong> Ênfase em técnicas de higiene brônquica, drenagem postural e exercícios de resistência</li>
                      <li><strong>Asma:</strong> Controle da respiração, exercícios em ambiente controlado, educação sobre gatilhos e manejo de crises</li>
                      <li><strong>Pós-COVID-19:</strong> Abordagem gradual, com atenção à fadiga persistente, exercícios respiratórios específicos e monitoramento de sintomas neurológicos</li>
                      <li><strong>Pré e pós-operatório de cirurgia torácica:</strong> Preparação respiratória pré-operatória e mobilização precoce pós-operatória</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Avaliação da Eficácia do Programa</h4>
                    <p>
                      Para avaliar a eficácia do programa de reabilitação pulmonar, diversos parâmetros podem ser mensurados:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Questionários de qualidade de vida:</strong> SGRQ (Saint George's Respiratory Questionnaire), CRQ (Chronic Respiratory Questionnaire)</li>
                      <li><strong>Escalas de dispneia:</strong> mMRC (Modified Medical Research Council), Escala de Borg</li>
                      <li><strong>Testes funcionais:</strong> TC6M (Teste de Caminhada de 6 Minutos), Shuttle Walking Test, teste de subida de degraus</li>
                      <li><strong>Medidas de força muscular:</strong> Dinamometria para força de preensão palmar, teste de 1RM</li>
                      <li><strong>Função pulmonar:</strong> Espirometria, volumes pulmonares, capacidade de difusão</li>
                      <li><strong>Biomarcadores:</strong> Marcadores inflamatórios, estresse oxidativo</li>
                    </ul>
                    <p className="mt-2">
                      A reavaliação periódica desses parâmetros permite ajustes no programa e documentação objetiva dos benefícios alcançados.
                    </p>
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

export default ReabilitacaoPulmonar;

