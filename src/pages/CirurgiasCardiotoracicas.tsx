import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CirurgiasCardiotoracicas = () => {
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
            <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-pink-500 shadow-lg mr-6">
              <Stethoscope className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                Cirurgias{' '}
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  Cardiotorácicas
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Compreenda os fundamentos e técnicas avançadas em cirurgias do coração e tórax
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
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Introdução às Cirurgias Cardiotorácicas</h3>
                <p>
                  As cirurgias cardiotorácicas representam uma das especialidades médicas mais complexas e desafiadoras, 
                  envolvendo procedimentos no coração, pulmões, esôfago e outras estruturas do tórax. Para fisioterapeutas 
                  que trabalham nesta área, é fundamental compreender os diferentes tipos de procedimentos e suas 
                  implicações para o processo de reabilitação.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Anatomia Cardiovascular Aplicada</h3>
                <p>
                  O conhecimento detalhado da anatomia cardiovascular é essencial para compreender as alterações 
                  provocadas pelas cirurgias. O coração é dividido em quatro câmaras: dois átrios e dois ventrículos, 
                  conectados por válvulas que garantem o fluxo unidirecional do sangue.
                </p>
                <p>
                  As principais estruturas envolvidas nas cirurgias cardíacas incluem as artérias coronárias, 
                  responsáveis pela irrigação do músculo cardíaco, as válvulas cardíacas (mitral, tricúspide, 
                  aórtica e pulmonar) e o sistema de condução elétrica do coração.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Principais Técnicas Cirúrgicas</h3>
                <p>
                  As cirurgias cardiotorácicas podem ser classificadas em diferentes categorias:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Revascularização do miocárdio:</strong> Procedimento para restabelecer o fluxo sanguíneo 
                  para o músculo cardíaco através de pontes de safena ou artérias mamárias.</li>
                  <li><strong>Cirurgias valvares:</strong> Reparo ou substituição de válvulas cardíacas defeituosas, 
                  podendo ser realizadas com próteses biológicas ou mecânicas.</li>
                  <li><strong>Cirurgias congênitas:</strong> Correção de malformações cardíacas presentes desde o nascimento.</li>
                  <li><strong>Transplante cardíaco:</strong> Substituição do coração doente por um coração saudável de doador.</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cuidados Pré-operatórios</h3>
                <p>
                  A preparação do paciente para cirurgia cardiotorácica é fundamental para o sucesso do procedimento. 
                  Os cuidados pré-operatórios incluem avaliação clínica completa, exames laboratoriais, 
                  eletrocardiograma, ecocardiograma e cateterismo cardíaco quando necessário.
                </p>
                <p>
                  O fisioterapeuta desempenha papel importante nesta fase, realizando avaliação respiratória, 
                  orientando exercícios respiratórios e educando o paciente sobre os cuidados pós-operatórios, 
                  contribuindo para melhor recuperação e redução de complicações.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Complicações Pós-operatórias</h3>
                <p>
                  As principais complicações que podem ocorrer após cirurgias cardiotorácicas incluem:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Complicações respiratórias (atelectasias, pneumonia, derrame pleural)</li>
                  <li>Complicações cardiovasculares (arritmias, baixo débito cardíaco)</li>
                  <li>Complicações neurológicas (AVC, delirium)</li>
                  <li>Complicações da ferida operatória (infecção, deiscência)</li>
                </ul>
                <p>
                  O conhecimento dessas complicações permite ao fisioterapeuta desenvolver estratégias preventivas 
                  e terapêuticas adequadas para cada situação clínica.
                </p>
              </section>
              
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Material Completo da Aula</h3>
                <p>
                  Primeiramente, é importante entender que a cirurgia cardiotorácica engloba intervenções tanto no tórax quanto no coração. Dentro dessa especialidade, temos as cirurgias torácicas, que são realizadas em casos de acometimentos que necessitam de intervenções cirúrgicas no tórax e no sistema respiratório, envolvendo a parede torácica, traqueia, brônquios, pulmões e pleuras.
                </p>
              </section>
                <p>
                  Dentro das cirurgias torácicas, podemos citar alguns procedimentos minimamente invasivos, como as biópsias da pleura, do pulmão e do mediastino, que são realizadas rotineiramente por meio de pequenas incisões, muitas vezes dispensando até o uso de anestesia geral em casos selecionados. Outros procedimentos incluem a toracocentese, que é a retirada de líquido da cavidade pleural, a drenagem pleural, que envolve a colocação de um dreno no tórax, e a pleurodese, utilizada para controlar o derrame pleural através do colabamento dos folhetos pleurais.
                </p>
                <p>
                  Ainda nas cirurgias torácicas, temos a lobectomia, que é a ressecção de um lobo pulmonar, e a segmentectomia, que consiste na ressecção de um segmento do pulmão. Esses procedimentos são frequentemente utilizados no tratamento do câncer de pulmão e tumores do mediastino, sendo muitas vezes realizados de forma minimamente invasiva por videotoracoscopia. A lobectomia por cirurgia torácica videoassistida (CTVA) tem sido cada vez mais adotada devido aos seus benefícios, como menores incisões, menor intensidade da dor, menor índice de complicações ventilatórias, menor liberação de mediadores inflamatórios e menor período de internação.
                </p>
                <p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transplante Pulmonar</h3>
                  Outra opção dentro das cirurgias torácicas é o transplante pulmonar, que se apresenta como uma alternativa terapêutica para pacientes com doença pulmonar avançada e em progressão, que não respondem a outras terapias clínicas e cirúrgicas e que possuem uma expectativa de vida reduzida. Existem diferentes tipos de transplante pulmonar, como o bilateral (em bloco ou sequencial), o unilateral e o lobar, cada um dependendo da extensão e gravidade do comprometimento pulmonar. O transplante pulmonar é geralmente indicado para doenças pulmonares não neoplásicas, quando não há alternativas de tratamento médico com melhoras funcionais ou clínicas, e quando o paciente tem uma expectativa de vida menor do que dois ou três anos. É importante que o paciente seja capaz de realizar reabilitação ambulatorial, apresente um estado nutricional aceitável e esteja dentro das faixas de idade recomendadas para cada tipo de transplante.
                </p>
                <p>
                  Passando para as cirurgias cardíacas, um dos procedimentos diagnósticos importantes é o cateterismo cardíaco, também conhecido como angiografia coronária. Este exame invasivo é utilizado para verificar a existência de obstrução coronariana, consistindo na punção de uma artéria periférica para a introdução de um cateter até o coração e artérias coronárias. O objetivo do cateterismo cardíaco é avaliar o grau de obstrução das artérias coronárias, sendo útil no diagnóstico de anomalias congênitas, dissecção aórtica, miocardiopatias e valvulopatias.
                </p>
                <p>
                  Quando o cateterismo cardíaco identifica uma lesão significativa nas artérias coronárias, com uma obstrução que excede 50% do diâmetro do vaso normal, pode ser indicada a angioplastia coronária. Este tratamento envolve a introdução de um cateter com balão, com o objetivo de restaurar a normalidade do fluxo sanguíneo, diminuindo ou evitando a isquemia miocárdica e seus sintomas. Após a desobstrução da artéria coronária, pode ser realizada a colocação de um stent no interior do vaso com a obstrução. A introdução dos stents coronários promoveu elevadas taxas de sucesso no procedimento e praticamente eliminou as complicações imediatas. Atualmente, existem dois tipos de stents: os convencionais e os farmacológicos.
                </p>
                <p>
                  Outra cirurgia cardíaca importante é a revascularização do miocárdio (RM), também conhecida como cirurgia de ponte de safena ou ponte mamária. Esta é uma cirurgia reconstrutora em que um vaso sanguíneo é anastomosado distalmente ao ponto de oclusão da aorta ascendente, de maneira a isolar o local do vaso obstruído e restabelecer a perfusão arterial. O objetivo da RM é aumentar ou restabelecer o fluxo sanguíneo prejudicado pela diminuição da luz das artérias coronárias. Os enxertos utilizados nessa cirurgia podem ser a ponte de safena ou a ponte mamária, sendo a escolha do enxerto um fator importante para o sucesso a longo prazo da cirurgia.
                </p>
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Transplante Cardíaco</h3>
                <p>
                  Por fim, temos o transplante cardíaco, que é indicado para pacientes em estágio final de doença cardíaca refratária, em que, mesmo após a otimização máxima do tratamento clínico, o paciente permanece sintomático, com evidências de progressão da doença, piora da qualidade de vida e alta taxa de mortalidade em um período de um ano. O transplante cardíaco é realizado por meio de uma esternotomia mediana com circulação extracorpórea, onde o coração do receptor é substituído pelo coração saudável do doador. Ao final da cirurgia, são colocados drenos torácicos e de mediastino para evitar o acúmulo de líquido e sangue na cavidade cirúrgica. As principais complicações podem estar relacionadas ao procedimento cirúrgico em si ou ao transplante cardíaco, e após o procedimento, o paciente deve ser encaminhado para a unidade de terapia intensiva (UTI) para estabilização do quadro clínico e retirada dos drenos.
                </p>
              </section>
              <section>
                <h3 className="text-x1 font-semibold text-gray-900 mb-3">Conclusão</h3>
                <p>
                  Espero que esta visão geral das cirurgias cardiotorácicas tenha sido esclarecedora. Cada um desses procedimentos tem suas particularidades e indicações específicas, e o conhecimento aprofundado de cada um é fundamental para a prática da fisioterapia cardiorrespiratória.
                </p>
              </section>
              
              <section className="mt-8 p-6 bg-red-50 rounded-xl border border-red-200">
                <h3 className="text-xl font-semibold text-red-800 mb-3">Aprofunde seu Conhecimento</h3>
                
                <div className="space-y-5">
                  <div>
                    <h4 className="font-semibold text-gray-900">Avanços em Cirurgias Minimamente Invasivas</h4>
                    <p>
                      As técnicas minimamente invasivas revolucionaram as cirurgias cardiotorácicas nas últimas décadas:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Cirurgia Robótica:</strong> Utiliza o sistema Da Vinci para maior precisão e visualização tridimensional, permitindo incisões menores e manipulação mais precisa dos tecidos</li>
                      <li><strong>TAVI (Implante Valvar Aórtico Transcateter):</strong> Alternativa à cirurgia aberta para substituição da válvula aórtica, especialmente em pacientes de alto risco</li>
                      <li><strong>MitraClip:</strong> Dispositivo percutâneo para reparo da válvula mitral em pacientes com regurgitação mitral significativa</li>
                      <li><strong>VATS (Cirurgia Torácica Videoassistida):</strong> Permite realizar ressecções pulmonares com mínimo trauma cirúrgico</li>
                      <li><strong>Cirurgia Cardíaca Minimamente Invasiva (MICS):</strong> Realizada através de pequenas incisões intercostais, evitando a esternotomia mediana completa</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Circulação Extracorpórea (CEC)</h4>
                    <p>
                      A CEC é fundamental em muitas cirurgias cardíacas, mas apresenta riscos e considerações importantes:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li>Composta por bomba propulsora, oxigenador, reservatório venoso, filtros e sistema de tubos</li>
                      <li>Permite manter a perfusão sistêmica enquanto o coração está parado</li>
                      <li>Riscos associados: resposta inflamatória sistêmica, microembolização, coagulopatias</li>
                      <li>Técnicas para minimizar complicações: hipotermia controlada, hemodiluição, cardioplegia</li>
                      <li>Cirurgias "off-pump" (sem CEC) podem ser realizadas em casos selecionados de revascularização miocárdica</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Fisioterapia no Pós-operatório Imediato</h4>
                    <p>
                      A intervenção fisioterapêutica precoce é crucial para a recuperação do paciente:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Fase I (UTI):</strong> Monitorização respiratória, manobras de higiene brônquica, posicionamento adequado, mobilização precoce</li>
                      <li><strong>Ventilação mecânica:</strong> Estratégias protetoras, desmame ventilatório, prevenção de pneumonia associada à ventilação</li>
                      <li><strong>Dor pós-operatória:</strong> Avaliação e manejo adequado para permitir tosse eficaz e mobilização</li>
                      <li><strong>Mobilização precoce:</strong> Sentar à beira do leito no primeiro dia pós-operatório quando possível</li>
                      <li><strong>Exercícios respiratórios:</strong> Respiração diafragmática, expansão torácica localizada, espirometria de incentivo</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Particularidades das Próteses Valvares</h4>
                    <p>
                      A escolha entre próteses biológicas e mecânicas tem implicações importantes para o paciente:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Próteses mecânicas:</strong> Maior durabilidade (20-30 anos), indicadas para pacientes mais jovens, requerem anticoagulação permanente</li>
                      <li><strong>Próteses biológicas:</strong> Durabilidade limitada (10-15 anos), indicadas para idosos e pacientes que não podem usar anticoagulantes</li>
                      <li><strong>Posições valvares:</strong> Mitral (entre átrio e ventrículo esquerdos), aórtica (entre ventrículo esquerdo e aorta), tricúspide (entre átrio e ventrículo direitos), pulmonar (entre ventrículo direito e artéria pulmonar)</li>
                      <li><strong>Complicações específicas:</strong> Trombose, vazamento paravalvar, endocardite, deterioração estrutural</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900">Critérios de Elegibilidade para Transplantes</h4>
                    <p>
                      Os critérios para transplantes cardíacos e pulmonares são rigorosos:
                    </p>
                    <ul className="list-disc ml-6 space-y-2 mt-2">
                      <li><strong>Transplante cardíaco:</strong> Insuficiência cardíaca classe III-IV NYHA refratária, expectativa de vida &lt;2 anos, VO2 máximo &lt;14 ml/kg/min, idade geralmente &lt;70 anos</li>
                      <li><strong>Contraindicações absolutas:</strong> Hipertensão pulmonar irreversível, doença sistêmica com prognóstico limitado, infecção ativa, câncer recente</li>
                      <li><strong>Transplante pulmonar:</strong> DPOC grave (GOLD IV), fibrose pulmonar, fibrose cística, hipertensão pulmonar primária</li>
                      <li><strong>Avaliação multidisciplinar:</strong> Cardiologista, cirurgião cardíaco, pneumologista, psicólogo, assistente social, fisioterapeuta</li>
                      <li><strong>Reabilitação pré-transplante:</strong> Fundamental para melhorar condições clínicas e funcionais do paciente</li>
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

export default CirurgiasCardiotoracicas;
