import { TraitCard } from "./trait-card";

export const TraitsSection = () => {
  return (
    <main
      className="
      h-full
      w-full max-w-[1440px]
      flex flex-row justify-center
      gap-10
      "
    >
      <TraitCard name="Безопастность" icon="ShieldCheck"/>
      <TraitCard name="Качество" icon="ThumbsUp"/>
      <TraitCard name="Сроки" icon="Clock"/>
      <TraitCard name="Индивидуальность" icon="PencilRuler"/>
    </main>
  );
};
