import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="container mx-auto flex-1 max-w-[800px] px-4 flex items-center">
      <section className="h-full flex flex-col items-center justify-center gap-8 w-full">
        <figure className="flex justify-center">
          <FontAwesomeIcon
            icon={faCloud}
            className="w-[100px]"
            aria-hidden="true"
          />
        </figure>
        <h1 className="text-4xl font-bold">Diego Roccia</h1>
        <Button variant="outline" className="text-lg hover:text-slate-200">
          Enter
        </Button>
      </section>
    </main>
  );
}
