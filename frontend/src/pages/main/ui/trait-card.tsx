import { LucideWrapper } from "@/shared/ui/lucide-wrapper";

export const TraitCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div
      className="
      w-[280px] h-full
      flex flex-col 
      pt-20
      justify-start
      items-center gap-5
      text-gray-400
      hover:text-gray-900
      transition-all duration-125
      "
    >
      <LucideWrapper className="text-inherit" color={"muted"} icon={icon} size={32} />
      <header className="text-3xl font-semibold text-inherit">{name}</header>
    </div>
  );
};
