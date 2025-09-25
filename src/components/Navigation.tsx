import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-gradient flex items-center justify-center">
              <span className="text-white font-bold text-lg">🌍</span>
            </div>
            <h1 className="text-xl font-bold text-primary">Country Explorer</h1>
          </div>
          
          <div className="flex gap-2">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              onClick={() => navigate("/")}
              className="transition-all duration-200"
            >
              Home
            </Button>
            <Button
              variant={location.pathname === "/about" ? "default" : "ghost"}
              onClick={() => navigate("/about")}
              className="transition-all duration-200"
            >
              About Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};