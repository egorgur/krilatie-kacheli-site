import { Link } from "react-router-dom";

type Nav = {
  name: string;
  link: string;
};

export type Navigation = Nav[];

export const BreadBoard = ({ navs }: { navs: Navigation }) => {
  return (
    <section className="flex flex-row justify-center pt-4">
      <nav className="grow max-w-[1440px] flex flex-row gap-2 justify-start items-center">
        {navs.map((nav) => (
          <>
            <div className="w-1 h-1 bg-gray-300 rounded-4xl"></div>
            <Link to={nav.link} className="hover:underline">
              {nav.name}
            </Link>
          </>
        ))}
      </nav>
    </section>
  );
};
