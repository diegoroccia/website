import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Footer from "@/components/footer/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <main className="container mx-auto text-slate-400 bg-slate-900 min-h-screen flex items-center flex-col justify-center w-full max-w-[800px] gap-8 p-8">
        <div className="flex justify-center">
          <FontAwesomeIcon icon={faCloud} className="w-[100px]" />
        </div>
        <h1 className="text-3xl font-bold text-red-50">Diego Roccia</h1>
        <Button variant="link">Enter</Button>
        <Footer />
      </main>
  );
}
