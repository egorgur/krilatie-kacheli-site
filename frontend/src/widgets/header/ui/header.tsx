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
        <div className="text-2xl">Крылатые качели</div>
        <div className="grow"></div>
        <nav
          className="
      flex flex-row
      gap-10
    "
        >
          <button className="hover:underline">КАТАЛОГ</button>
          <button className="hover:underline">КОМПАНИЯ</button>
          <button className="hover:underline">КОНТАКТЫ</button>
          <button className="hover:underline">СЕРТИФИКАТЫ</button>
        </nav>
      </main>
    </header>
  );
};
