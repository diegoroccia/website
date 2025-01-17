import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="antialiased text-slate-400 bg-slate-900 min-h-screen flex flex-col items-center justify-center">
      <main className="w-full max-w-[800px] flex flex-col items-center gap-8 px-4">
        <div className="flex justify-center">
          <FontAwesomeIcon icon={faCloud} className="w-[100px]" />
        </div>
        <h1 className="text-3xl font-bold">Diego Roccia</h1>
        <Button variant="link">Enter</Button>
          <Footer />
      </main>
    </div>
  );
}
