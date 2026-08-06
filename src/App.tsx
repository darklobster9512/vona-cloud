import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import CookieBanner from "@/components/CookieBanner";
import SiteLayout from "@/components/layout/SiteLayout";
import Index from "./pages/Index.tsx";
import Leistungen from "./pages/Leistungen.tsx";
import Software from "./pages/Software.tsx";
import Methodik from "./pages/Methodik.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import Karriere from "./pages/Karriere.tsx";
import KarriereDetail from "./pages/KarriereDetail.tsx";
import Bewerbung from "./pages/Bewerbung.tsx";
import Team from "./pages/Team.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/software" element={<Software />} />
            <Route path="/methodik" element={<Methodik />} />
            <Route path="/team" element={<Team />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/karriere" element={<Karriere />} />
            <Route path="/karriere/bewerbung" element={<Bewerbung />} />
            <Route path="/karriere/:slug" element={<KarriereDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
