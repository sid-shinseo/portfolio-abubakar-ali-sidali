import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import BtsSio from "./pages/BtsSio";
import Stage1 from "./pages/Stage1";
import Stage2 from "./pages/Stage2";
import VeilleT from "./pages/VeilleT";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/bts-sio"} component={BtsSio} />
        <Route path={"/stage-1"} component={Stage1} />
        <Route path={"/stage-2"} component={Stage2} />
        <Route path={"/veille-technologique"} component={VeilleT} />
        <Route path={"/competences"} component={Competences} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/mentions-legales"} component={MentionsLegales} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
