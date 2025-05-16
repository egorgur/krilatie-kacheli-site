import { Card } from "@/widgets/card";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CatalogueService } from "../../../shared/lib/api";
import { GroupThemeDetailed } from "../../../shared/lib/types";

export const SubcategoryPage = () => {
  const { themeId } = useParams();
  const [theme, setTheme] = useState<GroupThemeDetailed>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (themeId) {
          const response = await CatalogueService.getThemeById(
            parseInt(themeId)
          );
          setTheme(response);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);

  console.debug(theme);

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
            {theme?.groups.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={`/catalogue/${themeId}/${subcategory.id}`}
              >
                <Card name={subcategory.title} image={subcategory.image} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
