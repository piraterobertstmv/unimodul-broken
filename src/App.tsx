
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Chatbot } from "@/components/Chatbot";

// Pages
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

import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/modelos" element={<Models />} />
        <Route path="/mod-one" element={<ModOne />} />
        <Route path="/mod-two" element={<ModTwo />} />
        <Route path="/mod-studio" element={<ModStudio />} />
        <Route path="/mod-libre" element={<ModLibre />} />
        <Route path="/proceso" element={<Process />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/historias" element={<Stories />} />
        <Route path="/historia-1" element={<SuccessStory1 />} />
        <Route path="/historia-2" element={<SuccessStory2 />} />
        <Route path="/disenador" element={<Designer />} />
        <Route path="/privacidad" element={<Privacy />} />
        <Route path="/terminos" element={<Terms />} />
        <Route path="/particulares" element={<Particulares />} />
        <Route path="/empresas" element={<Empresas />} />
        <Route path="/campings" element={<Campings />} />
        <Route path="/financiacion" element={<Financiacion />} />
        <Route path="/financiacion-particulares" element={<FinanciacionParticulares />} />
        <Route path="/financiacion-empresas" element={<FinanciacionEmpresas />} />
        <Route path="/financiacion-inversores" element={<FinanciacionInversores />} />
        <Route path="/inversores" element={<Inversores />} />
        <Route path="*" element={<Index />} /> {/* This will catch all unmatched routes */}
      </Routes>
      <Chatbot />
      <Toaster />
    </>
  );
}

export default App;
