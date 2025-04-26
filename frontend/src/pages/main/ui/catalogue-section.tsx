import { Card } from "@/widgets/card";

export const CatalogueSection = () => {
  return (
    <main
      className="
      pt-[60px]
      w-full max-w-[1440px]
      flex flex-col
      gap-10
"
    >
      <div className="flex flex-row justify-center gap-10">
        <Card name="Игра" />
        <Card name="Игра" />
        <Card name="Игра" />
      </div>
      <div className="flex flex-row justify-center gap-10">
        <Card name="Игра" />
        <Card name="Игра" />
      </div>
    </main>
  );
};
