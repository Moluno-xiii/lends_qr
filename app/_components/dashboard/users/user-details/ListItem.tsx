const ListItem = ({
  name,
  value,
}: {
  name: string;
  value: string | number;
}) => {
  return (
    <li className="flex flex-col gap-y-2">
      <span className="uppercase text-sm ">{name}</span>
      <span className="font-medium text-base">{value}</span>
    </li>
  );
};

export default ListItem;
