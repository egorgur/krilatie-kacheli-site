export const Card = ({
  name,
  image,
}: {
  name: string;
  image: string | undefined;
}) => {
  return (
    <div
      className="
    p-5
    flex flex-row items-end
    w-[450px] h-[300px] bg-white rounded-md overflow-hidden
    hover:shadow-xl hover:cursor-pointer
    transition-all duration-100
    box-border
    "
    >
      <header className="text-2xl font-bold">{name}</header>
      {image && <img className="" src={`${image}`} alt={name} />}
    </div>
  );
};
