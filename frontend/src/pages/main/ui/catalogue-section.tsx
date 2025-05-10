import { Card } from "@/widgets/card";
import { Link } from "react-router-dom";

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
      <div className="flex flex-row justify-start gap-10">
        <Link to={"/catalogue/game"}>
          <Card name="Игра" />
        </Link>
        <Link to={"/catalogue/sport"}>
          <Card name="Спорт" />
        </Link>
        <Link to={"/catalogue/wellbeing"}>
          <Card name="Благоустройство" />
        </Link>
      </div>
      <div className="flex flex-row justify-start gap-10">
        <Link to={"/catalogue/cover"}>
          <Card name="Покрытия" />
        </Link>
        <Link to={"/catalogue/maf"}>
          <Card name="МАФ" />
        </Link>
      </div>
    </main>
  );
};
