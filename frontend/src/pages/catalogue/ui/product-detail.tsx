import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { CatalogueService } from "../../../shared/lib/api";
import { Item, GroupTheme, ItemGroupDetailed } from "../../../shared/lib/types";
import { BreadBoard, Navigation } from "../../../widgets/breadboard";

export const ProductDetailsPage = () => {
  const { themeId, groupId, itemId } = useParams();
  const [theme, setTheme] = useState<GroupTheme>();
  const [group, setGroup] = useState<ItemGroupDetailed>();
  const [item, setItem] = useState<Item>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        if (itemId && groupId && themeId) {
          const response = await CatalogueService.getItem(parseInt(itemId));
          console.debug(response);
          setItem(response);

          const responseGroup = await CatalogueService.getGroupById(
            parseInt(groupId)
          );
          setGroup(responseGroup);

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

  console.debug(item);

  let navs: Navigation = [];

  if (theme && group && item) {
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
      {
        name: theme.title,
        link: `/catalogue/${theme.id}/${group.id}/${theme.id}`,
      },
    ];
  }

  return (
    <>
      <BreadBoard navs={navs} />
      <main className="grow flex flex-row justify-center pt-[40px]">
        <section className="max-w-[1440px] grow flex flex-row gap-10 ">
          <section className="flex flex-col">
            <div className="w-[600px] h-[700px] bg-white">
              {item && item.image && (
                <img className="" src={`${item.image}`} alt={item.title} />
              )}
            </div>
          </section>
          <aside className="flex flex-col grow">
            <h3 className="text-4xl">Детали изделия: {item?.title}</h3>

            <div className="text-2xl pt-4 pb-4">{item && item.body}</div>

            <p>Категория: {themeId}</p>
            <p>Подкатегория: {groupId}</p>
            <p>ID продукта: {itemId}</p>
          </aside>
        </section>
      </main>
    </>
  );
};
