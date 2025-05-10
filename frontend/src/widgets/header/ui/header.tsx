import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header
      className="
    w-full flex flex-row justify-center items-center
    h-[55px] border-b border-gray-200
  "
    >
      <main
        className="
      w-full max-w-[1440px]
      flex flex-row
    "
      >
        <Link to={"/"} className="text-2xl">Крылатые качели</Link>
        <div className="grow"></div>
        <nav
          className="
      flex flex-row
      gap-10
    "
        >
          <Link to="/catalogue" className="hover:underline">КАТАЛОГ</Link>
          <Link to="/company" className="hover:underline">КОМПАНИЯ</Link>
          <Link to="/contacts" className="hover:underline">КОНТАКТЫ</Link>
          <Link to="/certificates" className="hover:underline">СЕРТИФИКАТЫ</Link>
        </nav>
      </main>
    </header>
  );
};
