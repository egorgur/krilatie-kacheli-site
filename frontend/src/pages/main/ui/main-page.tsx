import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";
import { CatalogueSection } from "./catalogue-section";
import { TraitsSection } from "./traits-section";

export const MainPage = () => {
  return (
    <>
      <Header />

      <main className="grow flex flex-col">
        <section className="grow flex flex-col items-center">
          <CatalogueSection />
        </section>
        <section className="h-[400px] bg-gray-100 flex flex-col items-center">
          <TraitsSection />
        </section>
      </main>

      <Footer />
    </>
  );
};
