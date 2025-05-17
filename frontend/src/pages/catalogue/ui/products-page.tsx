import { Card } from "@/widgets/card";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CatalogueService } from "../../../shared/lib/api";
import { Item, ItemGroupDetailed, GroupTheme } from "../../../shared/lib/types";
import { BreadBoard, Navigation } from "../../../widgets/breadboard";

export const ProductsPage = () => {
  const { themeId, groupId } = useParams();
  const [theme, setTheme] = useState<GroupTheme>();
  const [group, setGroup] = useState<ItemGroupDetailed>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (groupId && themeId) {
          const response = await CatalogueService.getGroupById(
            parseInt(groupId)
          );
          setGroup(response);
          const responseTheme = await CatalogueService.getThemeById(
            parseInt(themeId)
          );
          setTheme(responseTheme);
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

  let navs: Navigation = [];

  if (theme && group) {
    navs = [
      {
        name: "Тематики",
        link: `/catalogue/`,
      },

      {
        name: theme.title,
        link: `/catalogue/${theme.id}`,
      },
      {
        name: group.title,
        link: `/catalogue/${theme.id}/${group.id}`,
      },
    ];
  }

  return (
    <>
      <BreadBoard navs={navs} />
      <main className="grow flex flex-row justify-center pt-[40px]">
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
                <Card name={item.title} image={item.image} />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
