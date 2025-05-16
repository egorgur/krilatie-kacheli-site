import { Card } from "@/widgets/card";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CatalogueService } from "../../../shared/lib/api";
import { Item, ItemGroupDetailed } from "../../../shared/lib/types";

export const ProductsPage = () => {
  const { themeId, groupId } = useParams();
  const [group, setGroup] = useState<ItemGroupDetailed>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (groupId) {
          const response = await CatalogueService.getGroupById(
            parseInt(groupId)
          );
          setGroup(response);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };
    fetchGroups();
  }, []);

  console.debug(group);

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
            {group?.items.map((item: Item) => (
              <Link
                key={item.id}
                to={`/catalogue/${themeId}/${groupId}/${item.id}`}
              >
                <Card name={item.title} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
