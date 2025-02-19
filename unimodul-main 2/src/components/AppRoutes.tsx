import { Routes, Route } from "react-router-dom";
import { useScrollAnimation } from "@/lib/utils/animations";

// Import your pages here
import Index from "@/pages/Index";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Models from "@/pages/Models";
import ModOne from "@/pages/ModOne";
import ModTwo from "@/pages/ModTwo";
import ModStudio from "@/pages/ModStudio";
import ModLibre from "@/pages/ModLibre";
import Process from "@/pages/Process";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import Stories from "@/pages/Stories";
import SuccessStory1 from "@/pages/SuccessStory1";
import SuccessStory2 from "@/pages/SuccessStory2";
import Designer from "@/pages/Designer";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Particulares from "@/pages/Particulares";
import Empresas from "@/pages/Empresas";
import Campings from "@/pages/Campings";
import Financiacion from "@/pages/Financiacion";
import FinanciacionParticulares from "@/pages/FinanciacionParticulares";
import FinanciacionEmpresas from "@/pages/FinanciacionEmpresas";
import FinanciacionInversores from "@/pages/FinanciacionInversores";
import Inversores from "@/pages/Inversores";

// Wrapper component for route transitions
const AnimatedRoute = ({ children }: { children: React.ReactNode }) => {
  const elementRef = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <div ref={elementRef} className="w-full min-h-screen">
      {children}
    </div>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AnimatedRoute>
            <Index />
          </AnimatedRoute>
        }
      />
      <Route
        path="/sobre-nosotros"
        element={
          <AnimatedRoute>
            <About />
          </AnimatedRoute>
        }
      />
      <Route
        path="/contacto"
        element={
          <AnimatedRoute>
            <Contact />
          </AnimatedRoute>
        }
      />
      <Route
        path="/modelos"
        element={
          <AnimatedRoute>
            <Models />
          </AnimatedRoute>
        }
      />
      <Route
        path="/mod-one"
        element={
          <AnimatedRoute>
            <ModOne />
          </AnimatedRoute>
        }
      />
      <Route
        path="/mod-two"
        element={
          <AnimatedRoute>
            <ModTwo />
          </AnimatedRoute>
        }
      />
      <Route
        path="/mod-studio"
        element={
          <AnimatedRoute>
            <ModStudio />
          </AnimatedRoute>
        }
      />
      <Route
        path="/mod-libre"
        element={
          <AnimatedRoute>
            <ModLibre />
          </AnimatedRoute>
        }
      />
      <Route
        path="/proceso"
        element={
          <AnimatedRoute>
            <Process />
          </AnimatedRoute>
        }
      />
      <Route
        path="/blog"
        element={
          <AnimatedRoute>
            <Blog />
          </AnimatedRoute>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <AnimatedRoute>
            <BlogPost />
          </AnimatedRoute>
        }
      />
      <Route
        path="/historias"
        element={
          <AnimatedRoute>
            <Stories />
          </AnimatedRoute>
        }
      />
      <Route
        path="/historia-1"
        element={
          <AnimatedRoute>
            <SuccessStory1 />
          </AnimatedRoute>
        }
      />
      <Route
        path="/historia-2"
        element={
          <AnimatedRoute>
            <SuccessStory2 />
          </AnimatedRoute>
        }
      />
      <Route
        path="/disenador"
        element={
          <AnimatedRoute>
            <Designer />
          </AnimatedRoute>
        }
      />
      <Route
        path="/privacidad"
        element={
          <AnimatedRoute>
            <Privacy />
          </AnimatedRoute>
        }
      />
      <Route
        path="/terminos"
        element={
          <AnimatedRoute>
            <Terms />
          </AnimatedRoute>
        }
      />
      <Route
        path="/particulares"
        element={
          <AnimatedRoute>
            <Particulares />
          </AnimatedRoute>
        }
      />
      <Route
        path="/empresas"
        element={
          <AnimatedRoute>
            <Empresas />
          </AnimatedRoute>
        }
      />
      <Route
        path="/campings"
        element={
          <AnimatedRoute>
            <Campings />
          </AnimatedRoute>
        }
      />
      <Route
        path="/financiacion"
        element={
          <AnimatedRoute>
            <Financiacion />
          </AnimatedRoute>
        }
      />
      <Route
        path="/financiacion-particulares"
        element={
          <AnimatedRoute>
            <FinanciacionParticulares />
          </AnimatedRoute>
        }
      />
      <Route
        path="/financiacion-empresas"
        element={
          <AnimatedRoute>
            <FinanciacionEmpresas />
          </AnimatedRoute>
        }
      />
      <Route
        path="/financiacion-inversores"
        element={
          <AnimatedRoute>
            <FinanciacionInversores />
          </AnimatedRoute>
        }
      />
      <Route
        path="/inversores"
        element={
          <AnimatedRoute>
            <Inversores />
          </AnimatedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes; 