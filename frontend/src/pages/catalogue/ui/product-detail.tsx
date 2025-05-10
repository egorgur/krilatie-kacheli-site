import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  const { categoryId, subcategoryId, productId } = useParams();

  return (
    <main className="grow flex flex-row justify-center pt-[60px]">
      <section className="max-w-[1440px] grow flex flex-row gap-10 ">
        <section className="flex flex-col">
          <div className="w-[600px] h-[700px] bg-white"></div>
        </section>
        <aside className="flex flex-col grow">
          <h3>Детали изделия</h3>
          <p>Категория: {categoryId}</p>
          <p>Подкатегория: {subcategoryId}</p>
          <p>ID продукта: {productId}</p>
        </aside>
      </section>
    </main>
  );
};
