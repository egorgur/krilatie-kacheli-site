import { Card } from "@/widgets/card";
import { Link, useParams } from "react-router-dom";

const categoryData = {
  game: {
    name: "Игра",
    subcategories: [
      { id: "slides", name: "Горки" },
      { id: "sandboxes", name: "Песочницы" },
    ],
  },
  maf: {
    name: "МАФ",
    subcategories: [
      { id: "slides", name: "МАФ1" },
      { id: "sandboxes", name: "МАФ11" },
    ],
  },
  wellbeing: {
    name: "Благоустройство",
    subcategories: [
      { id: "slides", name: "Горки" },
      { id: "sandboxes", name: "Песочницы" },
    ],
  },
  sport: {
    name: "Спорт",
    subcategories: [
      { id: "slides", name: "Горки" },
      { id: "sandboxes", name: "Песочницы" },
    ],
  },
  cover: {
    name: "Покрытия",
    subcategories: [
      { id: "slides", name: "Горки" },
      { id: "sandboxes", name: "Песочницы" },
    ],
  },
};

export const SubcategoryPage = () => {
  const { categoryId } = useParams();
  const category = categoryData[categoryId];

  return (
    <>
      <main className="grow flex flex-col items-center">
        <section
          className="pt-[60px]
                     w-full max-w-[1440px]
                     flex flex-col
                     gap-10"
        >
          <div className="flex flex-row justify-start gap-10">
            {category.subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={`/catalogue/${categoryId}/${subcategory.id}`}
              >
                <Card name={subcategory.name} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
