import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/useReveal";

const Home = () => {
  useReveal();
  return (
    <div data-testid="home-page" className="min-h-screen bg-[#F4F4F0] text-[#0F0F0F]">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Toaster
          position="bottom-right"
          toastOptions={{
            classNames: {
              toast:
                "!rounded-none !border !border-[#0F0F0F] !bg-[#F4F4F0] !text-[#0F0F0F] !font-mono shadow-[4px_4px_0_0_#0F0F0F]",
              title: "!font-mono !uppercase !tracking-[0.16em] !text-xs",
              description: "!font-display !text-sm !text-[#0F0F0F]",
            },
          }}
        />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
