import { Card } from "@/widgets/card";
import { Link, useParams } from "react-router-dom";

const subCategoryData = {
  game: {
    slides: [
      { id: "slide-1", name: 'Горка "Радуга"' },
      { id: "slide-2", name: 'Горка "Волна"' },
    ],
    sandboxes: [{ id: "sandbox-1", name: 'Песочница "Классик"' }],
  },
};

export const ProductsPage = () => {
  const { categoryId, subcategoryId } = useParams();
  const products = subCategoryData[categoryId][subcategoryId];

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
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/catalogue/${categoryId}/${subcategoryId}/${product.id}`}
              >
                <Card name={product.name} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
