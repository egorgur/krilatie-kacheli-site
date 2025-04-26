import { Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="h-[100px] bg-slate-800 flex flex-row items-center justify-center text-gray-400">
      <main className="flex flex-row w-full max-w-[1440px] items-baseline ">
        <div className="text-2xl text-gray-50">Крылатые качели</div>

        <div className="w-[150px] shrink"></div>

        <div className="flex flex-row items-baseline h-full gap-8">
          <div className="flex flex-row items-baseline gap-2"><Phone size={18} className="relative bottom-[-3px]"/> 88005553535</div>
          <div className="flex flex-row items-baseline gap-2"><Mail size={18} className="relative bottom-[-3px]"/> mail@mail.com</div>
        </div>

        <div className="grow"></div>

        <div>{"© 2025 ООО «Крылатые качели»"}</div>
      </main>
    </footer>
  );
};
