
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Modules from "./pages/Modules";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";
import CirurgiasCardiotoracicas from "./pages/CirurgiasCardiotoracicas";
import ReabilitacaoPulmonar from "./pages/ReabilitacaoPulmonar";
import ReabilitacaoCardiaca from "./pages/ReabilitacaoCardiaca";
import PrescricoesExercicios from "./pages/PrescricoesExercicios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/modules/cirurgias-cardiotoracicas" element={<CirurgiasCardiotoracicas />} />
          <Route path="/modules/reabilitacao-pulmonar" element={<ReabilitacaoPulmonar />} />
          <Route path="/modules/reabilitacao-cardiaca" element={<ReabilitacaoCardiaca />} />
          <Route path="/modules/prescricoes-exercicios" element={<PrescricoesExercicios />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
