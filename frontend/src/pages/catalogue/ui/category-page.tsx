import { Card } from "../../../widgets/card";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CatalogueService } from "../../../shared/lib/api";
import { GroupTheme } from "../../../shared/lib/types";

export const CategoryPage = () => {
  const [themes, setThemes] = useState<GroupTheme[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await CatalogueService.getThemes();
        setThemes(response);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchThemes();
  }, []);

  console.debug(themes);

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
            {themes.map((theme) => (
              <Link key={theme.id} to={`/catalogue/${theme.id}`}>
                <Card name={theme.title} image={theme.image} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
