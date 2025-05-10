import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export const ContactsPage = () => {
  return (
    <>
      <Header />
      <main className="grow flex flex-row justify-center pt-[60px]">
        <section className="max-w-[1440px] flex flex-col justify-start items-center gap-4 pt-[60px]">
          <div className="text-2xl">КОНТАКТЫ</div>
          <div className="text-2xl pt-10">телефон: +88800000</div>
          <div className="text-2xl">mail: mail@gmail.com</div>
          <div className="text-2xl">Адрес: ул. Пушкина д. Колотушкина</div>
        </section>
      </main>

      <Footer />
    </>
  );
};
