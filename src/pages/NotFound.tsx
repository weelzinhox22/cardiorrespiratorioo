import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navigation from '@/components/Navigation';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-lightBlue via-white to-medical-lightTeal pt-16">
      <Navigation />
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-medical-blue/10 max-w-md mx-4">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-medical-blue to-medical-teal bg-clip-text text-transparent">404</h1>
          <p className="text-xl text-gray-700 mb-6">Oops! Página não encontrada</p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-medical-blue to-medical-teal hover:from-medical-blue/90 hover:to-medical-teal/90 text-white transition-all duration-300 hover:scale-105">
              <Home className="mr-2 h-4 w-4" />
              Voltar para Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
