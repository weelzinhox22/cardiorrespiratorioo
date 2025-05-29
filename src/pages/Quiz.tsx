import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2, XCircle, ArrowRight, FileDown } from 'lucide-react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Tipo para as questões originais
type Question = {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

// Tipo para as questões randomizadas
type RandomizedQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;  // Novo índice da resposta correta após randomização
  originalCorrect: number; // Índice original para referência
  explanation: string;
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentSelection, setCurrentSelection] = useState<string | null>(null);
  const [questionState, setQuestionState] = useState<'selecting' | 'reviewing'>('selecting');
  const [randomizedQuestions, setRandomizedQuestions] = useState<RandomizedQuestion[]>([]);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Função para randomizar as alternativas de cada questão
  const randomizeQuestions = (originalQuestions: Question[]): RandomizedQuestion[] => {
    return originalQuestions.map(q => {
      // Criar pares de [opção, índice] para manter o rastreamento
      const optionsWithIndices = q.options.map((option, index) => ({ option, index }));
      
      // Embaralhar as opções
      for (let i = optionsWithIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsWithIndices[i], optionsWithIndices[j]] = [optionsWithIndices[j], optionsWithIndices[i]];
      }
      
      // Encontrar o novo índice da resposta correta
      const correctIndex = optionsWithIndices.findIndex(item => item.index === q.correct);
      
      // Retornar a questão randomizada
      return {
        id: q.id,
        question: q.question,
        options: optionsWithIndices.map(item => item.option),
        correctIndex,
        originalCorrect: q.correct,
        explanation: q.explanation
      };
    });
  };

  // Randomizar questões ao iniciar o componente
  useEffect(() => {
    // Sempre randomizar as questões ao carregar a página, sem verificar localStorage
    const newRandomizedQuestions = randomizeQuestions(originalQuestions);
    setRandomizedQuestions(newRandomizedQuestions);
    
    // Adicionar um listener para o evento beforeunload para limpar o localStorage quando o usuário sair/recarregar
    const handleBeforeUnload = () => {
      localStorage.removeItem('quizAnswers');
      localStorage.removeItem('randomizedQuestions');
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    
    // Limpar o listener quando o componente for desmontado
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // Update progress whenever answers change
  useEffect(() => {
    if (randomizedQuestions.length === 0) return;
    
    const answeredQuestions = Object.keys(selectedAnswers).length;
    const progressPercentage = (answeredQuestions / randomizedQuestions.length) * 100;
    setProgress(progressPercentage);
  }, [selectedAnswers, randomizedQuestions]);

  // Reset state when changing questions
  useEffect(() => {
    setQuestionState('selecting');
    setCurrentSelection(null);
    
    // If this question was already answered, go directly to review state
    if (selectedAnswers[currentQuestion] !== undefined) {
      setQuestionState('reviewing');
    }
  }, [currentQuestion, selectedAnswers]);

  const originalQuestions = [
    {
      id: 1,
      question: "Durante uma sessão de fisioterapia no pós-operatório imediato de uma cirurgia cardíaca, o paciente apresenta dor à inspiração profunda e diminuição dos sons respiratórios em bases pulmonares. Qual seria a conduta mais apropriada neste momento?",
      options: [
        "Realizar analgesia adequada, posicionar o paciente em semi-Fowler e iniciar exercícios de expansão pulmonar com ênfase nas bases",
        "Manter o paciente em repouso absoluto e aguardar melhora espontânea da dor, evitando qualquer intervenção que possa aumentar o desconforto respiratório nas primeiras 48 horas pós-operatórias",
        "Iniciar exercícios vigorosos de tosse para eliminar possíveis secreções e restaurar a ventilação pulmonar, mesmo que isso cause desconforto temporário, pois a expansão pulmonar é prioritária",
        "Solicitar ventilação não-invasiva imediata com parâmetros elevados para garantir recrutamento alveolar máximo, independentemente do nível de dor apresentado pelo paciente"
      ],
      correct: 0,
      explanation: "No pós-operatório de cirurgia cardíaca, a dor é um fator limitante para a expansão pulmonar adequada, podendo levar a atelectasias. A analgesia adequada é fundamental antes de qualquer intervenção. O posicionamento em semi-Fowler facilita a expansão diafragmática e os exercícios de expansão pulmonar direcionados às bases ajudam a prevenir complicações respiratórias como atelectasias e pneumonias."
    },
    {
      id: 2,
      question: "Um paciente com doença pulmonar crônica apresenta o seguinte quadro: dispneia aos pequenos esforços, diminuição progressiva das atividades diárias e baixa tolerância ao exercício. Qual sequência melhor representa a intervenção terapêutica para quebrar este ciclo?",
      options: [
        "Repouso prolongado seguido de recuperação energética gradual, com ganho de peso supervisionado e retorno muito gradual às atividades cotidianas após completa recuperação do estado nutricional",
        "Treinamento muscular progressivo → melhora da força → aumento da capacidade funcional → redução da dispneia → maior participação em atividades → melhor qualidade de vida",
        "Suplementação nutricional intensiva com alto aporte calórico-proteico, seguida de ganho de massa muscular através de exercícios intensos e retorno imediato às atividades habituais para readaptação rápida",
        "Medicação broncodilatadora em doses máximas combinada com exercícios de alta intensidade desde o início para promover ganho rápido de condicionamento e adaptação ventilatória forçada"
      ],
      correct: 1,
      explanation: "O ciclo de inatividade na doença pulmonar crônica leva à perda de condicionamento físico, que por sua vez aumenta a dispneia aos esforços. O treinamento muscular progressivo quebra este ciclo ao melhorar a força e resistência muscular, aumentando a eficiência energética e reduzindo a demanda ventilatória para uma mesma atividade. Isso resulta em menor dispneia, permitindo maior participação em atividades e melhor qualidade de vida."
    },
    {
      id: 3,
      question: "Uma paciente idosa inicia um programa de reabilitação após evento cardíaco agudo. Durante a avaliação inicial, ela relata medo de realizar atividades físicas e apresenta sinais de ansiedade. Qual estratégia inicial seria mais adequada para esta paciente?",
      options: [
        "Exercícios de alta intensidade para demonstrar sua capacidade real e superar o medo através da exposição direta ao esforço máximo, provando que seu coração suporta atividades intensas",
        "Apenas orientações teóricas detalhadas sobre fisiopatologia cardiovascular e mecanismos de adaptação ao exercício até diminuição total da ansiedade, postergando qualquer atividade prática por pelo menos um mês",
        "Exercícios sem monitorização para reduzir a dependência psicológica de aparelhos e profissionais, estimulando autonomia imediata e autoconfiança através da prática independente sem supervisão constante",
        "Exercícios de baixa intensidade com monitorização constante, educação sobre sinais/sintomas e progressão gradual baseada na confiança"
      ],
      correct: 3,
      explanation: "Em pacientes com medo e ansiedade após eventos cardíacos, a abordagem inicial deve priorizar a segurança e a construção gradual de confiança. Os exercícios de baixa intensidade com monitorização constante proporcionam uma experiência positiva e segura. A educação sobre sinais e sintomas normais durante o exercício ajuda a reduzir a ansiedade, e a progressão gradual baseada na confiança e adaptação individual promove a adesão ao programa de reabilitação."
    },
    {
      id: 4,
      question: "Durante uma sessão de reabilitação pós-operatória de cirurgia torácica, o paciente apresenta dificuldade respiratória e dor na região da incisão. Qual seria a melhor sequência de intervenções?",
      options: [
        "Ajuste da analgesia → posicionamento adequado → exercícios respiratórios lentos → mobilização precoce progressiva → reavaliação dos sinais vitais",
        "Suspensão imediata da sessão seguida de repouso absoluto por 48 horas, com encaminhamento médico para avaliação completa e possível ajuste medicamentoso antes de qualquer nova tentativa de intervenção fisioterapêutica",
        "Exercícios respiratórios intensos e vigorosos para promover expansão pulmonar máxima, seguidos de mobilização ativa vigorosa de tronco e membros superiores e alongamentos intensos da musculatura torácica",
        "Oxigenoterapia em alto fluxo (10-15 L/min) por máscara não-reinalante, seguida de repouso absoluto em decúbito dorsal e nova tentativa de mobilização apenas no dia seguinte, independentemente da evolução dos sintomas"
      ],
      correct: 0,
      explanation: "Em pacientes pós-cirúrgicos torácicos, a dor é um fator limitante para a expansão pulmonar adequada. A sequência correta prioriza o manejo da dor antes das intervenções respiratórias, seguido de posicionamento adequado para facilitar a ventilação e exercícios respiratórios controlados, evitando sobrecarga. A mobilização precoce é essencial para prevenir complicações, mas deve ser progressiva e adaptada à tolerância do paciente."
    },
    {
      id: 5,
      question: "Um paciente com insuficiência cardíaca realiza teste de caminhada e apresenta desempenho significativamente abaixo do esperado para sua idade e gênero. Qual interpretação clínica e conduta seriam mais apropriadas?",
      options: [
        "Desempenho normal para a condição patológica de base, indicando apenas manutenção das atividades habituais sem necessidade de intervenção específica ou monitoramento adicional da capacidade funcional",
        "Capacidade funcional severamente reduzida, indicando necessidade de programa de reabilitação com início em baixa intensidade e progressão monitorada",
        "Contraindicação absoluta para qualquer tipo de exercício físico, com recomendação de restrição completa de atividades e repouso relativo permanente para evitar descompensação cardíaca iminente",
        "Necessidade urgente de exercícios de alta intensidade para compensação rápida do déficit funcional, com treinamento diário em frequência cardíaca próxima à máxima para adaptação cardiovascular acelerada"
      ],
      correct: 1,
      explanation: "O baixo desempenho no teste de caminhada em pacientes com insuficiência cardíaca indica capacidade funcional reduzida, o que está associado a pior prognóstico. A conduta adequada é iniciar um programa de reabilitação estruturado com exercícios de baixa intensidade, monitorização constante e progressão gradual baseada na adaptação individual, visando melhorar a capacidade funcional e qualidade de vida."
    },
    {
      id: 6,
      question: "Um paciente com espirometria indicando obstrução moderada a grave apresenta dispneia aos esforços e histórico de exacerbações frequentes. Considerando uma abordagem terapêutica completa, qual seria a melhor estratégia de tratamento?",
      options: [
        "Apenas medicação broncodilatadora em doses fixas e acompanhamento trimestral, sem necessidade de intervenções não-farmacológicas ou modificações no estilo de vida, mantendo o tratamento conservador",
        "Exercícios de alta intensidade para melhorar rapidamente a função pulmonar, com sessões diárias de treinamento aeróbico em intensidade próxima à máxima para forçar adaptações ventilatórias aceleradas",
        "Programa de reabilitação com exercícios intervalados, treinamento muscular respiratório e estratégias de conservação de energia",
        "Repouso relativo permanente para evitar dispneia e exacerbações, com restrição significativa de atividades físicas e sociais para minimizar o gasto energético e prevenir qualquer esforço respiratório adicional"
      ],
      correct: 2,
      explanation: "Pacientes com obstrução moderada a grave e histórico de exacerbações se beneficiam de uma abordagem terapêutica completa. O programa de reabilitação com exercícios intervalados permite melhor tolerância ao treinamento, o treinamento muscular respiratório melhora a força e resistência dos músculos respiratórios, e as estratégias de conservação de energia otimizam a capacidade funcional nas atividades diárias, reduzindo a dispneia e o risco de novas exacerbações."
    },
    {
      id: 7,
      question: "Durante exercício supervisionado, um paciente cardiopata apresenta sinais de intolerância como palidez, sudorese fria e tontura leve. Qual seria a sequência correta de ações nesta situação?",
      options: [
        "Redução parcial da velocidade ou intensidade do exercício e continuação da atividade sob observação, mantendo o estímulo de treinamento para promover adaptação cardiovascular progressiva apesar dos sintomas",
        "Interrupção imediata → posicionamento adequado → monitorização de sinais vitais → avaliação de sintomas → documentação do evento → reavaliação da prescrição",
        "Administração imediata de água ou bebida isotônica e continuação do exercício na mesma intensidade, considerando os sintomas como resposta adaptativa normal ao esforço que tende a se resolver com a hidratação adequada",
        "Aumento gradual da intensidade para promover adaptação cardiovascular rápida, considerando os sintomas como indicativos de necessidade de maior estímulo de treinamento para superar o limiar de condicionamento atual"
      ],
      correct: 1,
      explanation: "Os sinais de intolerância ao exercício em pacientes cardiopatas (palidez, sudorese fria, tontura) podem indicar resposta cardiovascular inadequada e risco de eventos adversos. A sequência correta prioriza a segurança do paciente: interrupção imediata do exercício, posicionamento adequado para favorecer o retorno venoso, monitorização dos sinais vitais para avaliar a gravidade, documentação detalhada do evento e reavaliação da prescrição para ajustes necessários no programa."
    },
    {
      id: 8,
      question: "Um paciente com insuficiência cardíaca classe funcional III apresenta fraqueza muscular significativa. Na prescrição de exercícios resistidos, qual abordagem proporcionaria maior segurança e efetividade?",
      options: [
        "Exercícios com carga máxima para ganho rápido de força, utilizando séries curtas até a falha muscular completa para maximizar o estímulo hipertrófico e recuperar rapidamente a massa muscular perdida",
        "Exercícios com baixa carga, maior número de repetições, foco em grupos musculares isolados e monitorização constante de sintomas",
        "Exercícios isométricos prolongados em contração máxima sustentada por períodos de 60-90 segundos para desenvolver maior resistência muscular estática e adaptação cardiovascular ao aumento da pós-carga",
        "Exercícios pliométricos de alto impacto para ganho de potência muscular explosiva, com movimentos rápidos e saltos para estimular adaptações neuromusculares aceleradas e melhora da capacidade funcional"
      ],
      correct: 1,
      explanation: "Em pacientes com insuficiência cardíaca classe funcional III, os exercícios resistidos devem ser cuidadosamente prescritos. A abordagem com baixa carga e maior número de repetições reduz a sobrecarga cardiovascular aguda. O foco em grupos musculares isolados (exercícios monoarticulares) diminui a demanda metabólica total. A monitorização constante de sintomas permite identificar precocemente sinais de intolerância, garantindo segurança e efetividade do treinamento."
    },
    {
      id: 9,
      question: "Na avaliação pré-transplante cardíaco, um paciente apresenta idade avançada, hipertensão pulmonar potencialmente reversível e comorbidades controladas. Qual análise melhor representa este caso?",
      options: [
        "Contraindicação absoluta devido à idade avançada, independentemente de outros fatores clínicos favoráveis ou da capacidade funcional atual, considerando o prognóstico estatisticamente inferior em pacientes idosos",
        "Paciente pode ser considerado para transplante após avaliação da reversibilidade da hipertensão pulmonar e otimização clínica",
        "Contraindicação definitiva devido à hipertensão pulmonar, mesmo que potencialmente reversível, pois qualquer grau de resistência vascular pulmonar elevada representa risco inaceitável para disfunção do ventrículo direito do enxerto",
        "Necessidade apenas de tratamento clínico otimizado com medicações em doses máximas toleradas, sem considerar o transplante como opção viável devido à combinação de fatores de risco que tornam o procedimento excessivamente arriscado"
      ],
      correct: 1,
      explanation: "Na avaliação para transplante cardíaco, a idade avançada isoladamente não é contraindicação absoluta, mas um fator a ser considerado junto com outros aspectos clínicos. A hipertensão pulmonar potencialmente reversível deve ser avaliada com testes específicos, pois apenas a hipertensão pulmonar irreversível é contraindicação absoluta. Comorbidades controladas não impedem o transplante, desde que não comprometam significativamente o prognóstico pós-operatório."
    },
    {
      id: 10,
      question: "Durante teste ergométrico, uma paciente apresenta alterações isquêmicas significativas no eletrocardiograma acompanhadas de dor precordial típica e instabilidade hemodinâmica. Qual seria a conduta mais apropriada neste momento?",
      options: [
        "Redução parcial da carga e continuação do teste em intensidade submáxima para avaliar a persistência dos sintomas e determinar com precisão o limiar isquêmico em diferentes níveis de esforço",
        "Administração de nitrato sublingual e manutenção do exercício na mesma intensidade para avaliar a resposta terapêutica imediata e a capacidade de reversão da isquemia durante esforço contínuo",
        "Interrupção imediata do teste, monitorização contínua e acionamento do protocolo de dor torácica",
        "Aumento gradual e controlado da carga para determinar com exatidão o limiar isquêmico máximo e a resposta cardiovascular completa, documentando todas as alterações para planejamento terapêutico detalhado"
      ],
      correct: 2,
      explanation: "A presença de alterações isquêmicas significativas no ECG, associadas à dor precordial típica e instabilidade hemodinâmica, caracteriza um teste ergométrico positivo para isquemia miocárdica com critérios de alto risco. A conduta apropriada é a interrupção imediata do teste para evitar progressão da isquemia, monitorização contínua dos sinais vitais e ECG, e acionamento do protocolo institucional para dor torácica, que pode incluir medicação e avaliação cardiológica imediata."
    },
    {
      id: 11,
      question: "Um paciente com doença pulmonar avançada apresenta intolerância ao exercício contínuo, com dispneia intensa e uso de musculatura acessória durante o treino aeróbico. Qual seria a melhor adaptação do programa de exercícios?",
      options: [
        "Manter o treino contínuo com mesma intensidade e duração, aumentando gradualmente a frequência semanal para forçar adaptação fisiológica, independentemente dos sintomas apresentados durante as sessões",
        "Suspender definitivamente o programa de exercícios estruturados, substituindo por atividades de vida diária leves e técnicas de conservação de energia, considerando o estágio avançado da doença como contraindicação absoluta para treinamento físico",
        "Aumentar progressivamente a intensidade do treinamento para induzir adaptação respiratória forçada, utilizando cargas elevadas mesmo na presença de sintomas limitantes, seguindo o princípio de sobrecarga progressiva",
        "Implementar treino intervalado com períodos curtos de exercício, recuperação ativa e monitorização rigorosa"
      ],
      correct: 3,
      explanation: "Em pacientes com doença pulmonar avançada que apresentam intolerância ao exercício contínuo, o treinamento intervalado é a melhor estratégia. Esta modalidade permite períodos de recuperação entre os estímulos, reduzindo a sobrecarga ventilatória e a sensação de dispneia, enquanto ainda proporciona estímulo suficiente para adaptações fisiológicas positivas. A monitorização rigorosa é essencial para garantir a segurança e eficácia do treinamento."
    },
    {
      id: 12,
      question: "Na avaliação pré-operatória de cirurgia cardíaca, o paciente apresenta função pulmonar comprometida, tosse produtiva e histórico de tabagismo. Qual seria o principal foco da preparação pré-operatória?",
      options: [
        "Apenas orientações sobre o procedimento cirúrgico e rotinas hospitalares, sem intervenções específicas para a função pulmonar, considerando que o comprometimento será tratado apenas no período pós-operatório",
        "Exercícios de alta intensidade para melhorar função pulmonar rapidamente, com treinamento aeróbico diário em intensidade próxima à máxima para forçar adaptações ventilatórias antes da cirurgia",
        "Repouso absoluto até a cirurgia para preservar energia e evitar qualquer esforço respiratório adicional, mantendo o paciente em ambiente controlado com umidificação e oxigenoterapia preventiva",
        "Otimização da função pulmonar com higiene brônquica, exercícios respiratórios e cessação do tabagismo"
      ],
      correct: 3,
      explanation: "Pacientes com função pulmonar comprometida têm maior risco de complicações respiratórias no pós-operatório de cirurgia cardíaca. A preparação pré-operatória deve focar na otimização da função pulmonar através de técnicas de higiene brônquica para reduzir secreções, exercícios respiratórios para melhorar volumes e capacidades pulmonares, e cessação do tabagismo, que pode melhorar significativamente a função pulmonar mesmo em curto prazo."
    },
    {
      id: 13,
      question: "Para um paciente com fraqueza muscular inspiratória documentada em avaliação respiratória, qual protocolo de treinamento muscular respiratório proporcionaria melhores resultados?",
      options: [
        "Carga mínima sem progressão, respirações livres, 1x/dia, com foco apenas na conscientização do padrão respiratório e sem objetivo de ganho de força, evitando qualquer sobrecarga dos músculos respiratórios já comprometidos",
        "Carga muito elevada (próxima à máxima), 50 respirações contínuas sem intervalos, visando estímulo intenso e rápido ganho de força através de sobrecarga máxima, mesmo que cause fadiga extrema durante o treinamento",
        "30% da carga máxima inicial, 30 respirações, 2x/dia, com progressão baseada em sintomas e reavaliação semanal",
        "60% da carga máxima fixa, sem progressão de carga durante todo o programa de treinamento, mantendo o mesmo estímulo independentemente da adaptação fisiológica, com foco exclusivo no aumento do volume respiratório"
      ],
      correct: 2,
      explanation: "O treinamento muscular inspiratório efetivo deve utilizar uma carga inicial moderada (cerca de 30% da força máxima), com volume e frequência adequados (30 respirações, duas vezes ao dia), e incluir progressão baseada na resposta individual. A reavaliação periódica permite ajustes na carga de treinamento, otimizando os resultados. Este protocolo proporciona estímulo suficiente para adaptações fisiológicas sem causar fadiga excessiva ou sobrecarga muscular."
    },
    {
      id: 14,
      question: "Um paciente com bronquiectasias apresenta secreção abundante, dispneia e limitação funcional. Qual sequência de técnicas respiratórias seria mais efetiva para este caso?",
      options: [
        "Apenas exercícios de respiração profunda em decúbito dorsal, sem técnicas específicas de higiene brônquica, focando exclusivamente no aumento do volume corrente e na expansão torácica global independentemente da presença de secreções",
        "Drenagem postural → técnicas de expiração forçada → exercícios de expansão torácica → respiração com lábios franzidos",
        "Tosse forçada contínua e vigorosa sem técnicas específicas de modulação do fluxo expiratório, mantendo esforço máximo em todas as expirações para eliminação de secreções, mesmo que cause broncoespasmo ou colapso de vias aéreas",
        "Exercícios de alta intensidade para eliminação de secreção através do aumento extremo da ventilação minuto, utilizando cargas elevadas para induzir taquipneia e hiperpneia, independentemente da tolerância do paciente ao esforço"
      ],
      correct: 1,
      explanation: "Em pacientes com bronquiectasias e secreção abundante, a sequência ideal de técnicas respiratórias deve começar com drenagem postural para mobilizar secreções das vias aéreas distais, seguida por técnicas de expiração forçada (huffing) para eliminar secreções sem colapso das vias aéreas. Os exercícios de expansão torácica melhoram a ventilação em áreas hipoventiladas, e a respiração com lábios franzidos reduz o colapso precoce das vias aéreas durante a expiração, melhorando a ventilação."
    },
    {
      id: 15,
      question: "Um paciente com estenose aórtica grave sintomática deseja iniciar atividade física. Considerando o risco-benefício, qual seria a orientação mais apropriada?",
      options: [
        "Liberar exercícios sem restrições de intensidade ou modalidade, incentivando prática esportiva competitiva e treinamento de força com cargas máximas, considerando que o exercício sempre traz benefícios independentemente da condição cardíaca",
        "Contraindicar exercícios de moderada/alta intensidade e considerar apenas atividades leves com monitorização rigorosa após avaliação cardiológica",
        "Prescrever exercícios de alta intensidade com foco em treinamento intervalado de alta intensidade (HIIT) para melhorar rapidamente a função cardíaca e reduzir a sobrecarga pressórica através de adaptações cardiovasculares aceleradas",
        "Recomendar exercícios competitivos e de alto impacto para estimular remodelamento ventricular positivo, incluindo esportes coletivos com mudanças bruscas de direção e intensidade para adaptação cardiovascular variada"
      ],
      correct: 1,
      explanation: "A estenose aórtica grave sintomática representa um alto risco para exercícios de moderada a alta intensidade devido ao aumento da pós-carga e limitação do débito cardíaco durante o esforço. Atividades leves podem ser consideradas com monitorização rigorosa após avaliação cardiológica detalhada, mas exercícios intensos são contraindicados pelo risco de síncope, arritmias graves e morte súbita. A correção cirúrgica ou percutânea da estenose deve ser considerada antes de iniciar um programa regular de exercícios."
    },
    {
      id: 16,
      question: "Durante a avaliação de um paciente em reabilitação cardíaca, observa-se boa recuperação da frequência cardíaca no período pós-exercício, ausência de arritmias e boa tolerância ao esforço. Qual interpretação clínica seria mais adequada?",
      options: [
        "Indicação de suspensão do programa de reabilitação por ter alcançado adaptação cardiovascular máxima, sem necessidade de continuidade do treinamento físico supervisionado ou progressão adicional de intensidade",
        "Resposta inadequada ao exercício, sugerindo possível efeito cronotrópico negativo excessivo que pode mascarar sintomas isquêmicos, necessitando investigação adicional antes de prosseguir com o programa",
        "Boa recuperação autonômica e adaptação cardiovascular, indicando possibilidade de progressão cautelosa da intensidade",
        "Necessidade de redução imediata da intensidade do exercício devido ao risco de adaptação excessivamente rápida, que pode sobrecarregar o sistema cardiovascular e precipitar eventos adversos nas próximas sessões"
      ],
      correct: 2,
      explanation: "A boa recuperação da frequência cardíaca no período pós-exercício é um indicador de adequada função autonômica cardíaca e está associada a melhor prognóstico cardiovascular. A ausência de arritmias e boa tolerância ao esforço são sinais de segurança que permitem considerar a progressão cautelosa da intensidade do treinamento, seguindo princípios de individualização e monitorização contínua."
    },
    {
      id: 17,
      question: "Um paciente com fração de ejeção significativamente reduzida realiza exercício aeróbico e atinge frequência cardíaca elevada, próxima ao limite máximo previsto. Qual seria a conduta mais apropriada neste momento?",
      options: [
        "Aumentar ainda mais a intensidade para melhorar o condicionamento cardiovascular, estimulando adaptações miocárdicas através de sobrecarga progressiva, mesmo em pacientes com disfunção sistólica significativa",
        "Manter a intensidade atual por estar aparentemente bem tolerada, ignorando os valores elevados de frequência cardíaca, pois a ausência de sintomas é indicador suficiente de segurança cardiovascular",
        "Suspender permanentemente o exercício aeróbico e restringir o paciente apenas a exercícios respiratórios e de mobilidade articular, considerando qualquer elevação da frequência cardíaca como risco inaceitável",
        "Reduzir a intensidade do exercício e reavaliar a prescrição, considerando treino intervalado de baixa intensidade"
      ],
      correct: 3,
      explanation: "Em pacientes com fração de ejeção significativamente reduzida, frequências cardíacas elevadas durante o exercício podem comprometer o enchimento diastólico e reduzir ainda mais o débito cardíaco. A redução da intensidade é necessária para evitar sobrecarga cardiovascular. O treinamento intervalado de baixa intensidade é uma alternativa que permite estímulo cardiovascular adequado com períodos de recuperação, sendo mais seguro e eficaz nesta população."
    },
    {
      id: 18,
      question: "No primeiro mês pós-transplante pulmonar, o paciente apresenta boa cicatrização e estabilidade clínica. Qual abordagem terapêutica seria mais adequada neste momento?",
      options: [
        "Exercícios de alta intensidade para recuperação rápida da capacidade funcional, com treinamento aeróbico vigoroso e resistido com cargas elevadas para reverter rapidamente o descondicionamento do período pré-transplante",
        "Apenas mobilização passiva no leito por pelo menos três meses, evitando qualquer tipo de exercício ativo para proteger completamente as anastomoses brônquicas e vasculares até cicatrização total",
        "Exercícios respiratórios suaves, mobilização progressiva e atividades de baixa intensidade com monitorização rigorosa",
        "Exercícios resistidos com carga máxima para todos os grupos musculares, priorizando hipertrofia rápida e ganho de força explosiva para compensar a atrofia muscular do período pré-operatório"
      ],
      correct: 2,
      explanation: "No primeiro mês pós-transplante pulmonar, mesmo com boa cicatrização e estabilidade clínica, é fundamental proteger a anastomose brônquica e adaptar o organismo às novas condições respiratórias. Os exercícios respiratórios suaves ajudam a melhorar a ventilação sem estresse mecânico excessivo, a mobilização progressiva previne complicações do imobilismo, e as atividades de baixa intensidade iniciam o recondicionamento físico de forma segura, sempre com monitorização rigorosa devido à imunossupressão e adaptações fisiológicas em curso."
    },
    {
      id: 19,
      question: "Um paciente com bronquiectasias difusas apresenta secreção espessa, fadiga muscular e baixa tolerância ao exercício. Qual seria a melhor sequência de intervenções para uma sessão de fisioterapia?",
      options: [
        "Exercícios intensos de alta demanda metabólica seguidos de hidratação oral mínima e técnicas de higiene brônquica realizadas apenas no final da sessão, quando o paciente já estiver fatigado para maximizar o esforço expiratório",
        "Hidratação → técnicas de higiene brônquica → intervalo para descanso → exercícios de baixa intensidade → técnicas de conservação de energia",
        "Apenas nebulização com solução salina hipertônica seguida de repouso prolongado em decúbito dorsal, sem mobilização ativa ou técnicas de higiene brônquica, para evitar qualquer esforço respiratório adicional",
        "Exercícios de alta intensidade sem técnicas prévias de higiene brônquica, utilizando treinamento aeróbico contínuo em intensidade próxima à máxima para induzir eliminação de secreções através da hiperpneia do exercício vigoroso"
      ],
      correct: 1,
      explanation: "Em pacientes com bronquiectasias difusas e secreção espessa, a hidratação inicial (sistêmica e/ou inalatória) facilita a fluidificação da secreção. As técnicas de higiene brônquica subsequentes são mais eficazes com secreção menos viscosa. O intervalo para descanso é importante para recuperação da fadiga após a higiene brônquica. Os exercícios de baixa intensidade melhoram o condicionamento sem exacerbar a dispneia, e as técnicas de conservação de energia otimizam a funcionalidade nas atividades diárias."
    },
    {
      id: 20,
      question: "Na avaliação funcional, um paciente idoso realiza o teste de sentar e levantar apresentando tempo prolongado e relatando fadiga moderada. Qual seria a interpretação e conduta mais apropriada?",
      options: [
        "Desempenho normal para a idade, sem necessidade de intervenção específica ou programa estruturado de exercícios, mantendo apenas as atividades habituais independentemente do nível de limitação funcional apresentado",
        "Indica fraqueza muscular significativa, necessitando de programa de fortalecimento progressivo com foco em membros inferiores e equilíbrio",
        "Contraindicação absoluta para qualquer tipo de exercício resistido, devendo restringir completamente atividades que envolvam carga nos membros inferiores para evitar lesões articulares e quedas",
        "Necessidade apenas de alongamentos passivos diários sem componente de fortalecimento, focando exclusivamente na flexibilidade articular e ignorando o componente de força muscular por ser considerado secundário em idosos"
      ],
      correct: 1,
      explanation: "O tempo prolongado no teste de sentar e levantar associado à fadiga moderada indica fraqueza muscular significativa, especialmente em membros inferiores. Esta condição está relacionada a maior risco de quedas, limitação funcional e perda de independência em idosos. Um programa de fortalecimento progressivo focado em membros inferiores melhora a força, resistência e potência muscular, enquanto exercícios de equilíbrio reduzem o risco de quedas e melhoram a confiança na realização das atividades diárias."
    },
    {
      id: 21,
      question: "Um paciente recém-submetido a angioplastia com stent farmacológico deseja retornar às atividades físicas. Qual orientação contemplaria segurança e efetividade?",
      options: [
        "Retornar imediatamente a todas as atividades prévias, incluindo esportes competitivos e exercícios de alta intensidade, considerando que o stent restaura completamente o fluxo coronariano e elimina qualquer restrição à prática esportiva",
        "Iniciar com atividades leves após 1 semana, progredir gradualmente, evitar exercícios de alta intensidade nos primeiros meses e manter dupla antiagregação",
        "Manter repouso absoluto por 6 meses completos, evitando qualquer tipo de atividade física além das necessidades básicas de autocuidado, para garantir endotelização completa do stent e prevenir qualquer risco de trombose",
        "Realizar exclusivamente exercícios de alta intensidade sob supervisão médica direta, com foco em treino intervalado de alta intensidade para estimular colateralização coronariana e adaptações miocárdicas aceleradas"
      ],
      correct: 1,
      explanation: "Após angioplastia com stent farmacológico, é importante equilibrar os benefícios da atividade física com os riscos relacionados ao procedimento recente. Iniciar com atividades leves após a primeira semana permite a cicatrização inicial do local de acesso vascular. A progressão gradual respeita a adaptação cardiovascular, enquanto evitar exercícios de alta intensidade nos primeiros meses reduz o risco de complicações relacionadas ao stent. A manutenção da dupla antiagregação é fundamental para prevenir trombose do stent."
    },
    {
      id: 22,
      question: "Durante avaliação funcional, um paciente com doença pulmonar crônica apresenta dessaturação significativa e dispneia moderada ao esforço. Qual seria a conduta mais adequada para o programa de reabilitação?",
      options: [
        "Suspender definitivamente o programa de exercícios estruturados, considerando qualquer grau de dessaturação como contraindicação absoluta para atividade física, independentemente dos benefícios potenciais da reabilitação pulmonar",
        "Manter exercícios sem suplementação de oxigênio e na mesma intensidade que provoca dessaturação, para forçar adaptação fisiológica à hipoxemia e desenvolver tolerância progressiva aos baixos níveis de oxigenação durante esforço",
        "Aumentar progressivamente a intensidade do exercício para melhorar tolerância à hipoxemia através de adaptações hematológicas compensatórias, seguindo o princípio de adaptação a estímulos crescentes mesmo em condições adversas",
        "Prescrever exercícios com suplementação de oxigênio, monitorização contínua e intensidade ajustada para manter saturação adequada"
      ],
      correct: 3,
      explanation: "A dessaturação significativa durante o exercício em pacientes com doença pulmonar crônica é uma indicação para suplementação de oxigênio durante o treinamento. Esta estratégia permite que o paciente realize exercícios com intensidade adequada para obter benefícios fisiológicos, mantendo a saturação em níveis seguros. A monitorização contínua e o ajuste individualizado da intensidade são fundamentais para garantir a segurança e eficácia do programa."
    },
    {
      id: 23,
      question: "Após cirurgia de revascularização do miocárdio com safena, o paciente inicia reabilitação fase II. Qual seria o enfoque mais apropriado nas primeiras semanas?",
      options: [
        "Exercícios intensos para membros inferiores com foco em fortalecimento vigoroso da musculatura de quadríceps e isquiotibiais, utilizando cargas elevadas para recuperação rápida da força e prevenção de atrofia muscular",
        "Exercícios isométricos prolongados em contração máxima sustentada por períodos de 60-90 segundos, especialmente para musculatura do tronco e membros superiores, visando estabilização da esternotomia",
        "Atividades sem qualquer monitorização de sinais vitais ou sintomas, incentivando autonomia completa e autogestão do esforço pelo paciente desde o início da fase II, independentemente dos riscos cardiovasculares residuais",
        "Exercícios de baixa intensidade, proteção da safena, monitorização de sinais/sintomas e progressão baseada na cicatrização e adaptação"
      ],
      correct: 3,
      explanation: "Nas primeiras semanas após revascularização do miocárdio com safena, o enfoque deve considerar a cicatrização do enxerto e da esternotomia. Os exercícios de baixa intensidade minimizam o estresse cardiovascular enquanto promovem adaptações positivas. A proteção da safena envolve evitar atividades que aumentem excessivamente o retorno venoso ou causem compressão dos membros inferiores. A monitorização de sinais/sintomas permite identificar complicações precocemente, e a progressão individualizada respeita o ritmo de cicatrização e adaptação de cada paciente."
    },
    {
      id: 24,
      question: "Um paciente com fibrose pulmonar apresenta limitação ventilatória importante durante exercício aeróbico. Qual intervenção seria mais adequada para o programa de reabilitação?",
      options: [
        "Manter o exercício na mesma intensidade sem modificações, ignorando os sintomas de limitação ventilatória e incentivando o paciente a superar seus limites através de esforço voluntário máximo em cada sessão de treinamento",
        "Aumentar a intensidade progressivamente sem considerar sintomas, seguindo protocolo padronizado de incremento de carga independentemente da resposta individual, para forçar adaptações ventilatórias aceleradas",
        "Suspender definitivamente o programa de reabilitação pulmonar, considerando a fibrose pulmonar como contraindicação absoluta para qualquer tipo de exercício físico estruturado devido ao risco de exacerbação da doença",
        "Adaptar o exercício com períodos mais curtos, menor intensidade, suplementação de oxigênio quando necessária e monitorização rigorosa"
      ],
      correct: 3,
      explanation: "Pacientes com fibrose pulmonar apresentam limitação ventilatória importante e dessaturação ao exercício devido à alteração na difusão alvéolo-capilar. A adaptação do programa com períodos mais curtos de exercício, menor intensidade, suplementação de oxigênio e monitorização rigorosa permite que o paciente obtenha benefícios da atividade física sem comprometer a segurança ou agravar os sintomas respiratórios."
    },
    {
      id: 25,
      question: "Na avaliação da fase II de reabilitação cardíaca, o paciente apresenta ausência de sintomas, boa recuperação pós-exercício e adaptação adequada à carga atual. Qual critério indicaria segurança para progressão?",
      options: [
        "Qualquer aumento na pressão arterial sistólica durante exercício, mesmo que atinja valores extremamente elevados, desde que retorne aos níveis basais após o término da atividade, independentemente da magnitude da resposta pressórica",
        "FC de recuperação adequada no primeiro minuto, ausência de arritmias e sintomas, e boa tolerância à carga atual por pelo menos 3 sessões",
        "Presença de arritmias ventriculares complexas controladas apenas com ajuste medicamentoso recente, considerando que a supressão farmacológica é suficiente para garantir segurança durante o incremento de intensidade",
        "Dispneia leve a moderada durante exercício máximo, desde que tolerada subjetivamente pelo paciente, mesmo que associada a alterações eletrocardiográficas sugestivas de isquemia miocárdica transitória"
      ],
      correct: 1,
      explanation: "A progressão segura na reabilitação cardíaca fase II deve ser baseada em critérios objetivos. A frequência cardíaca de recuperação adequada no primeiro minuto pós-exercício indica boa função autonômica. A ausência de arritmias e sintomas durante e após o exercício demonstra estabilidade cardiovascular. A boa tolerância à carga atual por pelo menos 3 sessões consecutivas confirma adaptação fisiológica consistente, permitindo progressão segura da intensidade do treinamento."
    },
    {
      id: 26,
      question: "Um paciente com hipertensão pulmonar inicia programa de reabilitação. Qual abordagem contemplaria segurança e efetividade?",
      options: [
        "Exercícios contínuos de alta intensidade e longa duração, mantendo frequência cardíaca próxima à máxima durante toda a sessão para estimular adaptações cardiovasculares aceleradas e redução rápida da resistência vascular pulmonar",
        "Exercícios de baixa intensidade, intervalados, com monitorização rigorosa e progressão individualizada",
        "Exercícios resistidos com carga máxima para todos os grupos musculares, priorizando manobras de Valsalva para aumentar o retorno venoso e melhorar o débito cardíaco direito através do aumento da pré-carga",
        "Atividades sem monitorização específica de sinais vitais ou sintomas, incentivando autogestão completa do esforço pelo paciente desde o início, independentemente da gravidade da hipertensão pulmonar"
      ],
      correct: 1,
      explanation: "Na hipertensão pulmonar, o exercício deve ser cuidadosamente prescrito devido ao risco de sobrecarga ventricular direita. Exercícios de baixa intensidade reduzem a demanda sobre a circulação pulmonar. O formato intervalado permite períodos de recuperação, evitando aumento sustentado da pressão pulmonar. A monitorização rigorosa é essencial para detectar sinais de descompensação, e a progressão individualizada respeita as limitações específicas de cada paciente, otimizando os benefícios enquanto minimiza os riscos."
    },
    {
      id: 27,
      question: "Durante reabilitação pós-operatória de troca valvar mitral, o paciente desenvolve fibrilação atrial. Qual seria a melhor adaptação do programa de exercícios?",
      options: [
        "Suspender completamente os exercícios até reversão completa do ritmo sinusal, independentemente da estabilidade hemodinâmica ou controle da frequência cardíaca, considerando qualquer arritmia como contraindicação absoluta para atividade física",
        "Manter o programa exatamente como estava prescrito antes da fibrilação atrial, sem qualquer ajuste na intensidade, duração ou monitorização, considerando a arritmia como irrelevante para a prescrição de exercícios",
        "Manter exercícios de baixa intensidade com monitorização da frequência cardíaca média, sintomas e sinais de descompensação",
        "Aumentar significativamente a intensidade do exercício para controle não-farmacológico da arritmia, utilizando treinamento de alta intensidade para induzir adaptações elétricas miocárdicas e restauração do ritmo sinusal"
      ],
      correct: 2,
      explanation: "A fibrilação atrial no pós-operatório de troca valvar mitral é relativamente comum e não necessariamente contraindica a continuidade da reabilitação. Os exercícios devem ser mantidos em baixa intensidade para evitar elevações excessivas da frequência cardíaca, que podem comprometer o enchimento ventricular. A monitorização da frequência cardíaca média (não máxima, devido à irregularidade do ritmo), sintomas e sinais de descompensação permite ajustes individualizados e manutenção segura do programa."
    },
    {
      id: 28,
      question: "Um paciente com doença pulmonar obstrutiva e diabetes inicia programa de exercícios. Quais cuidados seriam essenciais para uma sessão segura?",
      options: [
        "Realizar exercícios exclusivamente em jejum prolongado de pelo menos 12 horas para evitar qualquer elevação glicêmica durante o esforço, mesmo que isso resulte em maior risco de hipoglicemia durante atividade física prolongada",
        "Verificar glicemia pré e pós-exercício, manter carboidratos disponíveis, monitorar sintomas e adaptar intensidade conforme resposta",
        "Evitar completamente qualquer tipo de exercício resistido ou de fortalecimento muscular, limitando o programa exclusivamente a exercícios respiratórios passivos, independentemente da capacidade funcional ou controle glicêmico do paciente",
        "Manter glicemia sempre acima de 200mg/dL durante toda a sessão de exercício através de ingestão contínua de carboidratos simples, para prevenir hipoglicemia, desconsiderando os riscos da hiperglicemia mantida durante o esforço físico"
      ],
      correct: 1,
      explanation: "Em pacientes com doença pulmonar obstrutiva e diabetes, a verificação da glicemia antes e após o exercício permite identificar riscos de hipoglicemia, especialmente comum durante atividade física. Manter carboidratos disponíveis possibilita intervenção rápida em caso de queda glicêmica. O monitoramento de sintomas respiratórios e metabólicos durante o exercício e a adaptação da intensidade conforme a resposta individual garantem segurança e efetividade, considerando as particularidades de ambas as condições."
    },
    {
      id: 29,
      question: "Na fase inicial pós-transplante cardíaco, o paciente apresenta estabilidade clínica. Qual característica do exercício seria mais apropriada considerando as alterações fisiológicas específicas deste caso?",
      options: [
        "Exercícios de alta intensidade desde o início do programa, com frequência cardíaca próxima à máxima teórica, para estimular rapidamente a reinervação cardíaca e restaurar a resposta cronotrópica normal através de sobrecarga máxima",
        "Exercícios sem qualquer tipo de monitorização específica de frequência cardíaca ou pressão arterial, confiando exclusivamente na percepção subjetiva de esforço, independentemente das alterações autonômicas características do coração transplantado",
        "Apenas mobilização passiva por pelo menos 3 meses completos, evitando qualquer tipo de exercício ativo, mesmo em baixa intensidade, devido ao risco teórico de rejeição aguda induzida pelo esforço físico",
        "Exercícios de baixa intensidade com progressão baseada em percepção de esforço e sinais clínicos, devido à resposta cronotrópica alterada"
      ],
      correct: 3,
      explanation: "No pós-transplante cardíaco, a denervação do coração altera significativamente a resposta cronotrópica ao exercício, com ausência de aumento inicial da frequência cardíaca mediado pelo sistema nervoso autônomo e recuperação mais lenta após o esforço. Os exercícios devem ser de baixa intensidade inicialmente, com progressão baseada principalmente na percepção de esforço e sinais clínicos, não na frequência cardíaca. Esta abordagem respeita as adaptações fisiológicas específicas do coração transplantado enquanto promove recondicionamento físico seguro."
    },
    {
      id: 30,
      question: "Um paciente com insuficiência cardíaca e fração de ejeção preservada inicia reabilitação. Qual seria o aspecto mais importante na prescrição de exercícios?",
      options: [
        "Manter frequência cardíaca máxima durante todo o período de treinamento, sem intervalos de recuperação, para estimular adaptações cardiovasculares máximas através de sobrecarga constante do ventrículo esquerdo",
        "Monitorização rigorosa da pressão arterial e sintomas durante exercício intervalado, com períodos adequados de recuperação",
        "Realizar exclusivamente exercícios contínuos de alta intensidade e longa duração, mantendo frequência cardíaca acima de 85% da máxima por pelo menos 45 minutos ininterruptos em cada sessão",
        "Evitar completamente qualquer tipo de exercício resistido ou de fortalecimento muscular, limitando o programa exclusivamente a exercícios aeróbicos, independentemente da capacidade funcional ou necessidades individuais do paciente"
      ],
      correct: 1,
      explanation: "Na insuficiência cardíaca com fração de ejeção preservada (ICFEP), o principal problema fisiopatológico é a disfunção diastólica com enchimento ventricular comprometido e hipertensão pulmonar secundária. A monitorização rigorosa da pressão arterial é fundamental, pois muitos pacientes têm hipertensão associada. O exercício intervalado permite períodos de recuperação que favorecem o retorno venoso e reduzem a congestão pulmonar. Os períodos adequados de recuperação são essenciais para evitar sobrecarga cardiopulmonar e otimizar a tolerância ao exercício."
    }
  ];

  const handleAnswerSelect = (value: string) => {
    // Only allow selection in selecting state
    if (questionState === 'selecting') {
      setCurrentSelection(value);
    }
  };

  const handleConfirmAnswer = () => {
    if (currentSelection === null) return;
    
    // Store the answer permanently
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion]: currentSelection
    }));
    
    // Move to reviewing state
    setQuestionState('reviewing');
  };

  const handleNext = () => {
    // If in selecting state and has selection, confirm first
    if (questionState === 'selecting' && currentSelection !== null) {
      handleConfirmAnswer();
      return;
    }
    
    // If in reviewing state or no selection, go to next question
    if (currentQuestion < randomizedQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateScore = () => {
    if (randomizedQuestions.length === 0) return 0;
    
    let score = 0;
    Object.keys(selectedAnswers).forEach(questionIndex => {
      const qIndex = parseInt(questionIndex);
      if (parseInt(selectedAnswers[qIndex]) === randomizedQuestions[qIndex].correctIndex) {
        score++;
      }
    });
    return score;
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  // Função para verificar se uma questão já foi respondida
  const isQuestionAnswered = (questionIndex: number) => {
    return selectedAnswers[questionIndex] !== undefined;
  };

  // Função para obter o valor da resposta selecionada para a questão atual
  const getCurrentQuestionValue = () => {
    // Se já respondeu, mostra a resposta salva
    if (isQuestionAnswered(currentQuestion)) {
      return selectedAnswers[currentQuestion];
    }
    // Se não respondeu ainda, mostra a seleção atual
    return currentSelection || "";
  };

  // Verifica se a resposta atual está correta
  const isCurrentAnswerCorrect = () => {
    if (!isQuestionAnswered(currentQuestion) || randomizedQuestions.length === 0) return false;
    
    const answerIndex = parseInt(selectedAnswers[currentQuestion]);
    return answerIndex === randomizedQuestions[currentQuestion].correctIndex;
  };

  // Limpar todas as respostas e reiniciar o quiz com novas questões randomizadas
  const handleRestart = () => {
    setShowResults(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuestionState('selecting');
    setCurrentSelection(null);
    
    // Randomizar as questões novamente
    const newRandomizedQuestions = randomizeQuestions(originalQuestions);
    setRandomizedQuestions(newRandomizedQuestions);
  };

  // Função para gerar e baixar o PDF com todas as questões e respostas
  const generatePDF = () => {
    if (randomizedQuestions.length === 0) return;
    
    setIsGeneratingPDF(true);
    
    try {
      // Criar um novo documento PDF
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });
      
      // Definir margens e dimensões
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);
      
      // Adicionar título
      doc.setFontSize(16);
      doc.setTextColor(0, 51, 102); // Azul escuro
      doc.setFont("helvetica", "bold");
      doc.text("Questionário de Fisioterapia Cardiorrespiratória", pageWidth / 2, margin, { align: "center" });
      
      // Adicionar data
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100); // Cinza
      doc.setFont("helvetica", "normal");
      const date = new Date().toLocaleDateString('pt-BR');
      doc.text(`Gerado em: ${date}`, pageWidth / 2, margin + 7, { align: "center" });
      
      // Função para limpar texto e remover caracteres especiais ou formatação estranha
      const cleanText = (text) => {
        return text
          .replace(/\s+/g, ' ')          // Remove múltiplos espaços
          .replace(/[→→|]/g, '-')       // Substitui setas por hífen
          .replace(/[↑↓]/g, '')          // Remove setas de aumento/diminuição
          .trim();                       // Remove espaços no início e fim
      };
      
      // Função para quebrar texto em linhas
      const splitText = (text, fontSize, maxWidth) => {
        doc.setFontSize(fontSize);
        // Limpar o texto antes de quebrar
        const cleanedText = cleanText(text);
        return doc.splitTextToSize(cleanedText, maxWidth);
      };
      
      let yPos = margin + 15;
      
      // Processar cada questão
      randomizedQuestions.forEach((question, qIndex) => {
        // Adicionar nova página se necessário
        if (yPos > pageHeight - 40) {
          doc.addPage();
          yPos = margin;
        }
        
        // Número e texto da questão
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "bold");
        doc.text(`Questão ${qIndex + 1}:`, margin, yPos);
        yPos += 6;
        
        // Texto da questão
        doc.setFont("helvetica", "normal");
        const questionLines = splitText(question.question, 11, contentWidth - 5);
        doc.text(questionLines, margin, yPos);
        yPos += (questionLines.length * 5) + 8;
        
        // Verificar espaço restante para opções
        if (yPos + (question.options.length * 15) > pageHeight - 30) {
          doc.addPage();
          yPos = margin;
        }
        
        // Cores e estilos
        const correctBgColor = [240, 252, 240];       // Verde muito claro
        const explanationBgColor = [245, 245, 250];   // Cinza azulado muito claro
        
        // Processar cada opção
        question.options.forEach((option, optIndex) => {
          const letter = String.fromCharCode(65 + optIndex); // A, B, C, D...
          const isCorrect = optIndex === question.correctIndex;
          
          // Verificar se precisa de nova página para esta opção
          if (yPos > pageHeight - 40) {
            doc.addPage();
            yPos = margin;
          }
          
          // Definir estilo para a opção
          if (isCorrect) {
            doc.setTextColor(0, 100, 0); // Verde escuro para resposta correta
            doc.setFont("helvetica", "bold");
          } else {
            doc.setTextColor(0, 0, 0);
            doc.setFont("helvetica", "normal");
          }
          
          // Preparar e limpar o texto da opção
          const optionText = `${letter}. ${cleanText(option)}`;
          const optionLines = splitText(optionText, 10, contentWidth - 5);
          
          // Altura total desta opção
          const optionHeight = (optionLines.length * 5) + 6;
          
          // Desenhar retângulo de fundo para a opção (apenas para respostas corretas)
          if (isCorrect) {
            doc.setFillColor(correctBgColor[0], correctBgColor[1], correctBgColor[2]);
            doc.roundedRect(
              margin - 3, 
              yPos - 3, 
              contentWidth + 6, 
              optionHeight, 
              1, 1, 'F'
            );
          }
          
          // Desenhar o texto da opção
          doc.text(optionLines, margin, yPos);
          
          // Avançar posição Y
          yPos += optionHeight + 2;
        });
        
        // Verificar espaço para explicação
        if (yPos + 30 > pageHeight - 30) {
          doc.addPage();
          yPos = margin;
        }
        
        // Título da explicação
        yPos += 3;
        doc.setFontSize(10);
        doc.setTextColor(60, 60, 60);
        doc.setFont("helvetica", "bold");
        doc.text("Explicação:", margin, yPos);
        yPos += 5;
        
        // Limpar e preparar o texto da explicação
        doc.setFont("helvetica", "italic");
        const explanationText = cleanText(question.explanation);
        const explanationLines = splitText(explanationText, 10, contentWidth - 5);
        
        // Altura total da explicação
        const explanationHeight = (explanationLines.length * 5) + 6;
        
        // Desenhar retângulo de fundo para a explicação
        doc.setFillColor(explanationBgColor[0], explanationBgColor[1], explanationBgColor[2]);
        doc.roundedRect(
          margin - 3, 
          yPos - 3, 
          contentWidth + 6, 
          explanationHeight, 
          1, 1, 'F'
        );
        
        // Desenhar o texto da explicação
        doc.text(explanationLines, margin, yPos);
        yPos += explanationHeight + 15;
        
        // Adicionar linha divisória entre questões (exceto a última)
        if (qIndex < randomizedQuestions.length - 1) {
          doc.setDrawColor(200, 200, 200);
          doc.setLineWidth(0.5);
          doc.line(margin, yPos - 8, pageWidth - margin, yPos - 8);
          yPos += 8;
        }
      });
      
      // Salvar o PDF
      doc.save("questionario-fisioterapia-cardiorrespiratoria.pdf");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
      alert("Ocorreu um erro ao gerar o PDF. Por favor, tente novamente.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Se as questões ainda não foram randomizadas, mostrar uma tela de carregamento
  if (randomizedQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-medium text-gray-700">Carregando quiz...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal pt-16">
      <Navigation />
      
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-900">
            Avaliação de Conhecimentos
            </h1>
          <p className="mt-2 text-sm sm:text-lg text-gray-600">
            Responda todas as questões para avaliar seu conhecimento
          </p>
          <Button 
            onClick={generatePDF}
            disabled={isGeneratingPDF}
            className="mt-4 bg-indigo-600 hover:bg-indigo-700 flex items-center mx-auto text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4"
            size="sm"
          >
            <FileDown className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            {isGeneratingPDF ? "Gerando PDF..." : "Baixar Questionário em PDF"}
          </Button>
          </div>
          
        {!showResults ? (
          <>
            <div className="mb-4 sm:mb-6">
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                <span>Progresso: {progress.toFixed(0)}%</span>
                <span>Questões respondidas: {Object.keys(selectedAnswers).length} de {randomizedQuestions.length}</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="mb-6 sm:mb-8 shadow-md">
              <CardHeader className="p-3 sm:p-6">
                <CardTitle className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <span className="text-base sm:text-lg">Questão {currentQuestion + 1} de {randomizedQuestions.length}</span>
                  <span className={`text-xs sm:text-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-full ${
                    isQuestionAnswered(currentQuestion) 
                      ? "bg-green-100 text-green-800" 
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {isQuestionAnswered(currentQuestion) ? "✓ Respondida" : "Pendente"}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-6 pt-0 sm:pt-0">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-sm sm:text-lg font-medium">{randomizedQuestions[currentQuestion].question}</p>
                  
                  <RadioGroup
                    value={getCurrentQuestionValue()}
                    onValueChange={handleAnswerSelect}
                    className="space-y-2 sm:space-y-3"
                    disabled={questionState === 'reviewing'}
                  >
                    {randomizedQuestions[currentQuestion].options.map((option, index) => (
                      <div 
                        key={index} 
                        className={`flex items-start space-x-2 p-2 sm:p-3 rounded-lg transition-colors
                          ${getCurrentQuestionValue() === index.toString() 
                            ? 'bg-medical-lightBlue/20 border border-medical-blue' 
                            : 'hover:bg-gray-50 border border-transparent'}`}
                      >
                        <RadioGroupItem 
                          value={index.toString()} 
                          id={`q${currentQuestion}-${index}`} 
                          className="mt-1"
                        />
                        <Label 
                          htmlFor={`q${currentQuestion}-${index}`} 
                          className="text-xs sm:text-base flex-grow cursor-pointer"
                        >
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>

                  {/* Explanation shown only in reviewing state */}
                  {questionState === 'reviewing' && (
                    <Alert className={isCurrentAnswerCorrect() ? "bg-green-50 border-green-200 text-green-800 text-xs sm:text-sm" : "bg-red-50 border-red-200 text-red-800 text-xs sm:text-sm"}>
                      <div className="flex items-start">
                        {isCurrentAnswerCorrect() ? (
                          <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <XCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                        )}
                        <div>
                          <AlertTitle className="font-semibold text-xs sm:text-sm">
                            {isCurrentAnswerCorrect() ? "Resposta correta!" : "Resposta incorreta"}
                          </AlertTitle>
                          <AlertDescription className="mt-1 sm:mt-2 text-xs sm:text-sm">
                            {!isCurrentAnswerCorrect() && (
                              <p className="mb-1 sm:mb-2">
                                A resposta correta é: <span className="font-medium">{randomizedQuestions[currentQuestion].options[randomizedQuestions[currentQuestion].correctIndex]}</span>
                              </p>
                            )}
                            {randomizedQuestions[currentQuestion].explanation}
                          </AlertDescription>
                        </div>
                      </div>
                    </Alert>
                  )}

                  <div className="flex justify-between mt-4 sm:mt-6">
                    <Button
                      onClick={handlePrevious}
                      disabled={currentQuestion === 0}
                      variant="outline"
                      className="w-24 sm:w-28 text-xs sm:text-sm py-1 px-2 h-auto sm:h-10"
                      size="sm"
                    >
                      Anterior
                    </Button>

                    {questionState === 'selecting' ? (
                      <Button
                        onClick={handleConfirmAnswer}
                        disabled={currentSelection === null}
                        className="w-24 sm:w-28 bg-medical-blue hover:bg-medical-blue/90 text-xs sm:text-sm py-1 px-2 h-auto sm:h-10"
                        size="sm"
                      >
                        Confirmar
                      </Button>
                    ) : (
                      currentQuestion < randomizedQuestions.length - 1 ? (
                        <Button
                          onClick={handleNext}
                          variant="default"
                          className="w-24 sm:w-28 flex items-center justify-center text-xs sm:text-sm py-1 px-2 h-auto sm:h-10"
                          size="sm"
                        >
                          Próxima <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                        </Button>
                      ) : (
                        <Button
                          onClick={handleSubmit}
                          disabled={Object.keys(selectedAnswers).length < randomizedQuestions.length}
                          className="w-24 sm:w-28 bg-green-600 hover:bg-green-700 text-xs sm:text-sm py-1 px-2 h-auto sm:h-10"
                          size="sm"
                        >
                          Finalizar
                        </Button>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="shadow-md">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg sm:text-xl">Resultados</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0 sm:pt-0">
              <div className="text-center space-y-4">
                <div className="mb-6 sm:mb-8">
                  <p className="text-2xl sm:text-4xl font-bold text-medical-blue mb-1 sm:mb-2">
                    {((calculateScore() / randomizedQuestions.length) * 100).toFixed(1)}%
                  </p>
                  <p className="text-sm sm:text-xl text-gray-600">
                    Você acertou {calculateScore()} de {randomizedQuestions.length} questões
                  </p>
                  
                  <div className="mt-4 sm:mt-6 flex justify-center">
                    <Button 
                      onClick={generatePDF}
                      disabled={isGeneratingPDF}
                      className="bg-indigo-600 hover:bg-indigo-700 flex items-center text-xs sm:text-sm py-1 px-2 sm:py-2 sm:px-4"
                      size="sm"
                    >
                      <FileDown className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      {isGeneratingPDF ? "Gerando PDF..." : "Baixar Gabarito em PDF"}
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  <h3 className="text-base sm:text-xl font-semibold mb-3 sm:mb-4">Revisão das Questões</h3>
                  <ScrollArea className="h-[300px] sm:h-[400px] rounded-md border p-2 sm:p-4">
                    {randomizedQuestions.map((q, index) => (
                      <div key={index} className="mb-4 sm:mb-6 p-3 sm:p-4 border-b last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-xs sm:text-base">Questão {index + 1}</span>
                          <span className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm ${
                            selectedAnswers[index] !== undefined && 
                            parseInt(selectedAnswers[index]) === q.correctIndex
                              ? 'bg-green-100 text-green-800'
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {selectedAnswers[index] !== undefined && 
                             parseInt(selectedAnswers[index]) === q.correctIndex 
                              ? 'Correto' 
                              : 'Incorreto'}
                          </span>
                        </div>
                        <p className="font-medium mb-2 sm:mb-3 text-xs sm:text-sm">{q.question}</p>
                        <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                          <p className="text-green-600 font-medium">✓ Resposta correta: {q.options[q.correctIndex]}</p>
                          {selectedAnswers[index] !== undefined && 
                           parseInt(selectedAnswers[index]) !== q.correctIndex && (
                            <p className="text-red-600">✗ Sua resposta: {q.options[parseInt(selectedAnswers[index])]}</p>
                          )}
                          <div className="mt-2 sm:mt-3 bg-gray-50 p-2 sm:p-3 rounded-md">
                            <p className="text-gray-700 text-xs sm:text-sm">{q.explanation}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>

                <Button
                  onClick={handleRestart}
                  className="mt-4 sm:mt-6 bg-medical-blue hover:bg-medical-blue/90 text-xs sm:text-sm py-1 px-4 h-auto"
                  size="sm"
                >
                  Tentar Novamente
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quiz;
